import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const tokensDir = path.join(rootDir, 'Tokens');
const generatedDir = path.join(rootDir, 'src', 'generated');
const outputPath = path.join(generatedDir, 'token-docs.json');

const brands = ['Cars24', 'Team BHP', 'CarInfo', 'Vehicle Info'];

const zipEntries = {
  primitive: ['Primitive.zip', 'Value.tokens.json'],
  semantic: ['Semantic.zip', 'Value.tokens.json'],
  typography: ['Typography.zip', 'Value.tokens.json'],
  utility: ['Utility.zip', 'Mode 1.tokens.json'],
  misc: ['Misc.zip', 'Mode 1.tokens.json']
};

function readZipJson(zipName, entryName) {
  const zipPath = path.join(tokensDir, zipName);
  const content = execFileSync('unzip', ['-p', zipPath, entryName], {
    encoding: 'utf8'
  });

  return JSON.parse(content);
}

function readThemeJson(fileName) {
  const zipPath = path.join(tokensDir, 'Theme.zip');
  const content = execFileSync('unzip', ['-p', zipPath, fileName], {
    encoding: 'utf8'
  });

  return JSON.parse(content);
}

function readJson(fileName) {
  return JSON.parse(fs.readFileSync(path.join(tokensDir, fileName), 'utf8'));
}

function sortTokenKeys(a, b) {
  const rank = (value) => {
    if (value === 'none') {
      return -1;
    }

    if (/^\d+$/.test(value)) {
      return Number(value);
    }

    return Number.POSITIVE_INFINITY;
  };

  const aRank = rank(a);
  const bRank = rank(b);

  if (Number.isFinite(aRank) && Number.isFinite(bRank)) {
    return aRank - bRank;
  }

  if (Number.isFinite(aRank)) {
    return -1;
  }

  if (Number.isFinite(bRank)) {
    return 1;
  }

  return a.localeCompare(b);
}

function getSlashPath(obj, tokenPath) {
  return tokenPath.split('/').reduce((current, segment) => current?.[segment], obj);
}

function getColorHex(entry) {
  if (!entry || entry.$type !== 'color') {
    return null;
  }

  return entry.$value.hex;
}

function getColorAlpha(entry) {
  if (!entry || entry.$type !== 'color') {
    return null;
  }

  return entry.$value.alpha;
}

function getWebSyntax(entry) {
  return entry?.$extensions?.['com.figma.codeSyntax']?.WEB ?? null;
}

function flattenLeafEntries(node, prefix = []) {
  const leaves = [];

  for (const [key, value] of Object.entries(node)) {
    if (key === '$extensions') {
      continue;
    }

    if (value && typeof value === 'object' && '$type' in value) {
      leaves.push({
        segments: [...prefix, key],
        entry: value
      });
      continue;
    }

    if (value && typeof value === 'object') {
      leaves.push(...flattenLeafEntries(value, [...prefix, key]));
    }
  }

  return leaves;
}

function valueToDisplay(entry) {
  if (!entry) {
    return null;
  }

  if (entry.$type === 'color') {
    return entry.$value.hex;
  }

  return entry.$value;
}

function getCollectionRoot(store, setName, brandName) {
  switch (setName) {
    case 'Primitive':
      return store.primitive;
    case 'Semantic':
      return store.semantic;
    case 'Typography':
      return store.typography;
    case 'Utility':
      return store.utility;
    case 'Misc':
      return store.misc;
    case 'Theme':
      return store.themes[brandName];
    default:
      throw new Error(`Unsupported token set: ${setName}`);
  }
}

function resolveToken(store, setName, tokenName, brandName, visited = new Set()) {
  const visitKey = `${brandName}:${setName}:${tokenName}`;

  if (visited.has(visitKey)) {
    throw new Error(`Cyclic token alias detected at ${visitKey}`);
  }

  const nextVisited = new Set(visited);
  nextVisited.add(visitKey);

  const root = getCollectionRoot(store, setName, brandName);
  const entry = getSlashPath(root, tokenName);

  if (!entry || typeof entry !== 'object' || !('$type' in entry)) {
    throw new Error(`Missing token entry for ${setName}:${tokenName}`);
  }

  const alias = entry.$extensions?.['com.figma.aliasData'];
  const step = {
    setName,
    tokenName,
    type: entry.$type
  };

  if (!alias) {
    return {
      entry,
      chain: [step],
      finalSetName: setName,
      finalTokenName: tokenName
    };
  }

  const resolved = resolveToken(
    store,
    alias.targetVariableSetName,
    alias.targetVariableName,
    brandName,
    nextVisited
  );

  return {
    entry: resolved.entry,
    chain: [step, ...resolved.chain],
    finalSetName: resolved.finalSetName,
    finalTokenName: resolved.finalTokenName
  };
}

function chainToLabel(chain) {
  return chain
    .map((step) => `${step.setName}.${step.tokenName.replaceAll('/', '.')}`)
    .join(' -> ');
}

function buildPrimitiveFamilies(primitive) {
  return Object.entries(primitive)
    .filter(([name]) => name !== '$extensions')
    .map(([family, tokens]) => ({
      name: family,
      tokens: Object.entries(tokens)
        .sort(([a], [b]) => sortTokenKeys(a, b))
        .map(([tokenName, entry]) => ({
          name: tokenName,
          path: `${family}.${tokenName}`,
          hex: getColorHex(entry),
          alpha: getColorAlpha(entry),
          codeSyntaxWeb: getWebSyntax(entry),
          description: entry.$description ?? null
        }))
    }));
}

function buildSemanticCategories(store) {
  return Object.entries(store.semantic)
    .filter(([name]) => name !== '$extensions')
    .map(([category, categoryNode]) => {
      const tokens = flattenLeafEntries(categoryNode)
        .map(({ segments, entry }) => {
          const tokenPath = `${category}/${segments.join('/')}`;
          const alias = entry.$extensions?.['com.figma.aliasData'] ?? null;
          const resolvedByBrand = Object.fromEntries(
            brands.map((brand) => {
              const resolved = resolveToken(store, 'Semantic', tokenPath, brand);
              return [brand, valueToDisplay(resolved.entry)];
            })
          );
          const finalSourceByBrand = Object.fromEntries(
            brands.map((brand) => {
              const resolved = resolveToken(store, 'Semantic', tokenPath, brand);
              return [brand, `${resolved.finalSetName}.${resolved.finalTokenName.replaceAll('/', '.')}`];
            })
          );
          const chainByBrand = Object.fromEntries(
            brands.map((brand) => {
              const resolved = resolveToken(store, 'Semantic', tokenPath, brand);
              return [brand, chainToLabel(resolved.chain)];
            })
          );
          const values = Object.values(resolvedByBrand);
          const sharedAcrossBrands = values.every((value) => value === values[0]);

          return {
            name: segments.join('.'),
            path: `${category}.${segments.join('.')}`,
            description: entry.$description ?? null,
            codeSyntaxWeb: getWebSyntax(entry),
            alias: alias
              ? {
                  setName: alias.targetVariableSetName,
                  tokenName: alias.targetVariableName
                }
              : null,
            resolvedByBrand,
            finalSourceByBrand,
            chainByBrand,
            sharedAcrossBrands
          };
        })
        .sort((a, b) => a.path.localeCompare(b.path));

      return {
        name: category,
        tokens
      };
    });
}

function buildThemeBrands(store) {
  return brands.map((brandName) => {
    const theme = store.themes[brandName];
    const behaviourLeaves = flattenLeafEntries(theme['component-behaviour']).map(
      ({ segments, entry }) => ({
        path: segments.join('.'),
        value: Boolean(entry.$value)
      })
    );

    const buildScale = (scaleNode, basePath) =>
      Object.entries(scaleNode)
        .filter(([key]) => key !== '$extensions')
        .sort(([a], [b]) => sortTokenKeys(a, b))
        .map(([key, entry]) => {
          const tokenPath = `${basePath}/${key}`;
          const resolved = resolveToken(store, 'Theme', tokenPath, brandName);

          return {
            name: key,
            path: tokenPath.replaceAll('/', '.'),
            hex: valueToDisplay(resolved.entry),
            description: entry.$description ?? null,
            aliasSource: `${resolved.finalSetName}.${resolved.finalTokenName.replaceAll('/', '.')}`
          };
        });

    const buildMetricList = (node) =>
      Object.entries(node)
        .filter(([key]) => key !== '$extensions')
        .map(([name, entry]) => ({
          name,
          value: entry.$value
        }));

    return {
      name: brandName,
      fontFamily: theme.font.family.primary.$value,
      fontWeights: buildMetricList(theme.font.weight),
      radiusCore: buildMetricList(
        Object.fromEntries(
          Object.entries(theme.radius).filter(([name]) => name !== 'alt' && name !== '$extensions')
        )
      ).sort((a, b) => sortTokenKeys(a.name, b.name)),
      radiusAlt: buildMetricList(theme.radius.alt).sort((a, b) => sortTokenKeys(a.name, b.name)),
      behaviours: behaviourLeaves.sort((a, b) => a.path.localeCompare(b.path)),
      brandScale: buildScale(
        Object.fromEntries(
          Object.entries(theme.brand).filter(([name]) => name !== 'alt' && name !== '$extensions')
        ),
        'brand'
      ),
      brandAltScale: buildScale(theme.brand.alt, 'brand/alt')
    };
  });
}

function buildTypographyGroups(typography) {
  const groups = ['title', 'headline', 'utility', 'paragraph', 'caption'];

  return groups.map((groupName) => {
    const sizeTokens = typography.size[groupName] ?? {};
    const lineHeightTokens = typography['line-height'][groupName] ?? {};
    const letterSpacingTokens = typography['letter-spacing'][groupName] ?? {};
    const tokenNames = Array.from(
      new Set([
        ...Object.keys(sizeTokens),
        ...Object.keys(lineHeightTokens),
        ...Object.keys(letterSpacingTokens)
      ])
    ).sort((a, b) => sortTokenKeys(a, b));

    return {
      name: groupName,
      tokens: tokenNames.map((tokenName) => ({
        name: tokenName,
        path: `${groupName}.${tokenName}`,
        size: sizeTokens[tokenName]?.$value ?? null,
        lineHeight: lineHeightTokens[tokenName]?.$value ?? null,
        letterSpacing: letterSpacingTokens[tokenName]?.$value ?? null
      }))
    };
  });
}

function buildUtilityAlpha(utility) {
  return ['white', 'black'].map((groupName) => ({
    name: groupName,
    tokens: Object.entries(utility.alpha[groupName])
      .sort(([a], [b]) => sortTokenKeys(a, b))
      .map(([tokenName, entry]) => ({
        name: tokenName,
        path: `alpha.${groupName}.${tokenName}`,
        hex: getColorHex(entry),
        alpha: Math.round((getColorAlpha(entry) ?? 0) * 100),
        codeSyntaxWeb: getWebSyntax(entry)
      }))
  }));
}

function buildMetricTokens(node, pathPrefix) {
  return Object.entries(node)
    .sort(([a], [b]) => sortTokenKeys(a, b))
    .map(([name, entry]) => ({
      name,
      path: `${pathPrefix}.${name}`,
      value: entry.$value,
      codeSyntaxWeb: getWebSyntax(entry)
    }));
}

function main() {
  const store = {
    primitive: readZipJson(...zipEntries.primitive),
    semantic: readZipJson(...zipEntries.semantic),
    typography: readZipJson(...zipEntries.typography),
    utility: readZipJson(...zipEntries.utility),
    misc: readZipJson(...zipEntries.misc),
    themes: {
      Cars24: readThemeJson('Cars24.tokens.json'),
      'Team BHP': readThemeJson('Team BHP.tokens.json'),
      CarInfo: readThemeJson('CarInfo.tokens.json'),
      'Vehicle Info': readThemeJson('Vehicle Info.tokens.json')
    },
    full: readJson('Tokens-variables-full.json')
  };

  const docsData = {
    meta: {
      generatedAt: new Date().toISOString(),
      brands,
      collectionSummary: store.full.collections.map((collection) => ({
        name: collection.name,
        modes: collection.modes.map((mode) => mode.name),
        variableCount: collection.variables.length
      }))
    },
    primitive: {
      families: buildPrimitiveFamilies(store.primitive)
    },
    semantic: {
      categories: buildSemanticCategories(store)
    },
    theme: {
      brands: buildThemeBrands(store)
    },
    typography: {
      groups: buildTypographyGroups(store.typography)
    },
    utility: {
      alphaGroups: buildUtilityAlpha(store.utility)
    },
    misc: {
      gap: buildMetricTokens(store.misc.gap, 'gap'),
      size: buildMetricTokens(store.misc.size, 'size'),
      stroke: buildMetricTokens(store.misc.stroke, 'stroke'),
      opacity: buildMetricTokens(store.misc.opacity, 'opacity')
    }
  };

  fs.mkdirSync(generatedDir, { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(docsData, null, 2)}\n`, 'utf8');
  console.log(`Generated token docs data at ${path.relative(rootDir, outputPath)}`);
}

main();
