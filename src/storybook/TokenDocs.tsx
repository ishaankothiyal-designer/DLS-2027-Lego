import type { CSSProperties, ReactNode } from 'react';
import {
  brandNames,
  formatTokenValue,
  getBrandAccent,
  getBrandAccentDeep,
  getBrandAccentSoft,
  getThemeBrand,
  humanizeTokenName,
  tokenDocsData,
  type AlphaGroup,
  type BrandName,
  type MetricToken,
  type PrimitiveFamily,
  type SemanticCategory,
  type SemanticToken,
  type ThemeBrand,
  type TypographyGroup,
} from './token-data';

function toTitleCase(value: string) {
  return humanizeTokenName(value)
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function docsShellStyle(brand: BrandName): CSSProperties {
  const accent = `${getBrandAccent(brand)}`;
  const accentSoft = `${getBrandAccentSoft(brand)}`;
  const accentDeep = `${getBrandAccentDeep(brand)}`;
  const fontFamily = getThemeBrand(brand).fontFamily;

  return {
    ['--docs-accent' as string]: accent,
    ['--docs-accent-soft' as string]: accentSoft,
    ['--docs-accent-deep' as string]: accentDeep,
    ['--docs-brand-font' as string]: `"${fontFamily}", "Avenir Next", "Segoe UI Variable", sans-serif`,
  };
}

interface DocsSummaryItem {
  label: string;
  value: string;
  note: string;
}

function formatCount(value: number) {
  return value.toLocaleString();
}

function totalVariableCount() {
  return tokenDocsData.meta.collectionSummary.reduce((sum, collection) => sum + collection.variableCount, 0);
}

function totalPrimitiveTokenCount() {
  return tokenDocsData.primitive.families.reduce((sum, family) => sum + family.tokens.length, 0);
}

function totalSemanticTokenCount() {
  return tokenDocsData.semantic.categories.reduce((sum, category) => sum + category.tokens.length, 0);
}

function totalBrandAwareSemanticCount() {
  return tokenDocsData.semantic.categories.reduce(
    (sum, category) => sum + category.tokens.filter((token) => !token.sharedAcrossBrands).length,
    0
  );
}

function totalTypographyTokenCount() {
  return tokenDocsData.typography.groups.reduce((sum, group) => sum + group.tokens.length, 0);
}

function totalUtilityTokenCount() {
  return tokenDocsData.utility.alphaGroups.reduce((sum, group) => sum + group.tokens.length, 0);
}

function totalMiscTokenCount() {
  return (
    tokenDocsData.misc.gap.length +
    tokenDocsData.misc.size.length +
    tokenDocsData.misc.stroke.length +
    tokenDocsData.misc.opacity.length
  );
}

function DocsShell(props: {
  brand: BrandName;
  eyebrow: string;
  title: string;
  description: string;
  summary: DocsSummaryItem[];
  children: ReactNode;
}) {
  const generatedAt = new Date(tokenDocsData.meta.generatedAt).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <div className="docs-shell" style={docsShellStyle(props.brand)}>
      <header className="docs-hero">
        <div className="docs-hero__body">
          <div className="docs-hero__eyebrow">
            <span className="docs-chip docs-chip--accent">{props.eyebrow}</span>
            <span className="docs-hero__eyebrow-copy">Storybook system docs</span>
          </div>
          <h1 className="docs-title">{props.title}</h1>
          <p className="docs-description">{props.description}</p>
        </div>
        <aside className="docs-hero__rail">
          <div className="docs-hero__panel">
            <div className="docs-hero__context">
              <span className="docs-overline">Active context</span>
              <strong>{props.brand}</strong>
              <p>The toolbar switch updates theme-driven previews so each page stays grounded in a real brand contract.</p>
            </div>
            <div className="docs-summary">
              {props.summary.map((item) => (
                <article className="docs-summary__item" key={item.label}>
                  <span className="docs-summary__label">{item.label}</span>
                  <strong className="docs-summary__value">{item.value}</strong>
                  <span className="docs-summary__note">{item.note}</span>
                </article>
              ))}
            </div>
            <p className="docs-hero__timestamp">Generated {generatedAt}</p>
          </div>
        </aside>
      </header>
      <main className="docs-content">{props.children}</main>
    </div>
  );
}

function Section(props: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="docs-section">
      <div className="docs-section__header">
        <h2>{props.title}</h2>
        {props.description ? <p>{props.description}</p> : null}
      </div>
      {props.children}
    </section>
  );
}

function StatGrid() {
  return (
    <div className="stat-grid">
      {tokenDocsData.meta.collectionSummary.map((collection) => (
        <article className="stat-card" key={collection.name}>
          <span className="stat-card__label">{collection.name}</span>
          <strong className="stat-card__value">{collection.variableCount}</strong>
          <span className="stat-card__meta">Modes: {collection.modes.join(', ')}</span>
        </article>
      ))}
    </div>
  );
}

function BrandStrip() {
  return (
    <div className="brand-strip">
      {tokenDocsData.theme.brands.map((brand) => {
        const accent = brand.brandScale.find((token) => token.name === '500')?.hex ?? '#0f172a';
        const accentSoft = brand.brandScale.find((token) => token.name === '100')?.hex ?? '#e2e8f0';

        return (
          <article
            className="brand-card"
            key={brand.name}
            style={
              {
                ['--brand-card-accent' as string]: `${accent}`,
                ['--brand-card-soft' as string]: `${accentSoft}`,
              } as CSSProperties
            }
          >
            <div className="brand-card__swatch" />
            <div>
              <h3>{brand.name}</h3>
              <p>{brand.fontFamily}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ColorSwatchCard(props: {
  label: string;
  value: string | number | null;
  subtitle?: string;
  description?: string | null;
  codeSyntax?: string | null;
  note?: string | null;
}) {
  const color = typeof props.value === 'string' && props.value.startsWith('#') ? props.value : null;

  return (
    <article className="swatch-card">
      <div
        className="swatch-card__color"
        style={color ? { background: color } : undefined}
        aria-hidden="true"
      />
      <div className="swatch-card__body">
        <div className="swatch-card__heading">
          <strong>{props.label}</strong>
          <span>{formatTokenValue(props.value)}</span>
        </div>
        {props.subtitle ? <p className="swatch-card__meta">{props.subtitle}</p> : null}
        {props.note ? <p className="swatch-card__note">{props.note}</p> : null}
        {props.codeSyntax ? <code>{props.codeSyntax}</code> : null}
        {props.description ? <p className="swatch-card__description">{props.description}</p> : null}
      </div>
    </article>
  );
}

function PrimitiveFamilySection(props: { family: PrimitiveFamily }) {
  return (
    <Section title={toTitleCase(props.family.name)} description={`${props.family.tokens.length} tokens`}>
      <div className="swatch-grid">
        {props.family.tokens.map((token) => (
          <ColorSwatchCard
            key={token.path}
            label={token.name}
            value={token.hex}
            subtitle={token.path}
            codeSyntax={token.codeSyntaxWeb}
          />
        ))}
      </div>
    </Section>
  );
}

function SemanticTokenCard(props: { token: SemanticToken; brand: BrandName }) {
  const currentValue = props.token.resolvedByBrand[props.brand];
  const currentSource = props.token.finalSourceByBrand[props.brand];
  const currentChain = props.token.chainByBrand[props.brand];

  return (
    <article className="semantic-card">
      <div className="semantic-card__header">
        <div>
          <strong>{props.token.path}</strong>
          <span>{props.token.alias ? `${props.token.alias.setName}.${props.token.alias.tokenName.replaceAll('/', '.')}` : 'Direct value'}</span>
        </div>
        <span className={`docs-chip ${props.token.sharedAcrossBrands ? '' : 'docs-chip--accent'}`}>
          {props.token.sharedAcrossBrands ? 'Shared' : 'Brand-aware'}
        </span>
      </div>

      {props.token.sharedAcrossBrands ? (
        <div className="semantic-card__single">
          <div className="semantic-card__color" style={{ background: `${currentValue}` }} />
          <div>
            <strong>{formatTokenValue(currentValue)}</strong>
            <p>{currentSource}</p>
          </div>
        </div>
      ) : (
        <div className="semantic-card__brands">
          {brandNames.map((brandName) => (
            <div
              className={`semantic-card__brand ${brandName === props.brand ? 'semantic-card__brand--active' : ''}`}
              key={brandName}
            >
              <div
                className="semantic-card__mini-color"
                style={{ background: `${props.token.resolvedByBrand[brandName]}` }}
              />
              <div>
                <strong>{brandName}</strong>
                <span>{formatTokenValue(props.token.resolvedByBrand[brandName])}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="token-meta-list">
        <div>
          <span>Selected brand source</span>
          <strong>{currentSource}</strong>
        </div>
        <div>
          <span>Resolution chain</span>
          <strong>{currentChain}</strong>
        </div>
        {props.token.codeSyntaxWeb ? (
          <div>
            <span>Web syntax</span>
            <code>{props.token.codeSyntaxWeb}</code>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ThemeBrandPanel(props: { brandDoc: ThemeBrand; activeBrand: BrandName }) {
  const isActive = props.brandDoc.name === props.activeBrand;

  return (
    <article className={`theme-panel ${isActive ? 'theme-panel--active' : ''}`}>
      <header className="theme-panel__header">
        <div>
          <h3>{props.brandDoc.name}</h3>
          <p>{props.brandDoc.fontFamily}</p>
        </div>
        {isActive ? <span className="docs-chip docs-chip--accent">Selected</span> : null}
      </header>

      <div className="theme-panel__block">
        <h4>Brand scale</h4>
        <div className="mini-swatch-grid">
          {props.brandDoc.brandScale.map((token) => (
            <ColorSwatchCard
              key={token.path}
              label={token.name}
              value={token.hex}
              subtitle={token.aliasSource}
              description={token.description}
            />
          ))}
        </div>
      </div>

      <div className="theme-panel__block">
        <h4>Brand alt scale</h4>
        <div className="mini-swatch-grid">
          {props.brandDoc.brandAltScale.map((token) => (
            <ColorSwatchCard
              key={token.path}
              label={token.name}
              value={token.hex}
              subtitle={token.aliasSource}
              description={token.description}
            />
          ))}
        </div>
      </div>

      <div className="theme-panel__split">
        <div className="metric-card">
          <h4>Weights</h4>
          <div className="pill-row">
            {props.brandDoc.fontWeights.map((weight) => (
              <span className="docs-chip" key={weight.name}>
                {weight.name}: {weight.value}
              </span>
            ))}
          </div>
        </div>
        <div className="metric-card">
          <h4>Radius</h4>
          <div className="pill-row">
            {props.brandDoc.radiusCore.map((radius) => (
              <span className="docs-chip" key={radius.name}>
                {radius.name}: {radius.value}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="metric-card">
        <h4>Component behaviour</h4>
        <div className="token-meta-list">
          {props.brandDoc.behaviours.map((behaviour) => (
            <div key={behaviour.path}>
              <span>{behaviour.path}</span>
              <strong>{behaviour.value ? 'true' : 'false'}</strong>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function TypographyTable(props: { brand: BrandName; group: TypographyGroup }) {
  const brandDoc = getThemeBrand(props.brand);
  const sampleMap: Record<string, string> = {
    title: 'Driven by confident systems',
    headline: 'Design language with clear hierarchy',
    utility: 'Action label',
    paragraph: 'Documentation should feel clear, durable, and easy to scale across brands.',
    caption: 'Supporting context and metadata',
  };

  return (
    <article className="type-table">
      <header className="type-table__header">
        <div>
          <h3>{toTitleCase(props.group.name)}</h3>
          <p>Previewing the shared ramp with {brandDoc.fontFamily} as the active brand family.</p>
        </div>
      </header>
      <div className="type-table__rows">
        {props.group.tokens.map((token) => (
          <div className="type-row" key={token.path}>
            <div className="type-row__sample">
              <span className="type-row__token">{token.name}</span>
              <p
                style={{
                  fontFamily: `"${brandDoc.fontFamily}", "Avenir Next", "Segoe UI Variable", sans-serif`,
                  fontSize: token.size ?? undefined,
                  lineHeight: token.lineHeight ? `${token.lineHeight}px` : undefined,
                  letterSpacing: token.letterSpacing ? `${token.letterSpacing}px` : undefined,
                  fontWeight: props.group.name === 'headline' || props.group.name === 'title' ? 600 : 500,
                }}
              >
                {sampleMap[props.group.name]}
              </p>
            </div>
            <div className="type-row__metrics">
              <span>size {formatTokenValue(token.size)}</span>
              <span>line {formatTokenValue(token.lineHeight)}</span>
              <span>track {formatTokenValue(token.letterSpacing)}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function MetricTable(props: { title: string; tokens: MetricToken[] }) {
  return (
    <article className="metric-card">
      <h3>{props.title}</h3>
      <div className="metric-table">
        {props.tokens.map((token) => (
          <div className="metric-table__row" key={token.path}>
            <span>{token.name}</span>
            <strong>{formatTokenValue(token.value)}</strong>
            {token.codeSyntaxWeb ? <code>{token.codeSyntaxWeb}</code> : null}
          </div>
        ))}
      </div>
    </article>
  );
}

function AlphaGroupSection(props: { group: AlphaGroup }) {
  return (
    <Section title={`${toTitleCase(props.group.name)} alpha`} description={`${props.group.tokens.length} tokens`}>
      <div className="swatch-grid">
        {props.group.tokens.map((token) => (
          <ColorSwatchCard
            key={token.path}
            label={token.name}
            value={token.hex}
            subtitle={`${token.alpha}% opacity`}
            codeSyntax={token.codeSyntaxWeb}
          />
        ))}
      </div>
    </Section>
  );
}

export function OverviewPage(props: { brand: BrandName }) {
  return (
    <DocsShell
      brand={props.brand}
      eyebrow="Foundations"
      title="Design System Token Overview"
      description="A Storybook-facing view of the token system: collection counts, brand structure, and the dependency model that turns Figma token exports into an engineering-ready design system."
      summary={[
        {
          label: 'Collections',
          value: formatCount(tokenDocsData.meta.collectionSummary.length),
          note: 'Generated from the current Figma token exports.',
        },
        {
          label: 'Variables',
          value: formatCount(totalVariableCount()),
          note: 'Normalized into Storybook-friendly docs data.',
        },
        {
          label: 'Brands',
          value: formatCount(tokenDocsData.meta.brands.length),
          note: 'Available in the global toolbar switcher.',
        },
      ]}
    >
      <Section
        title="Collection map"
        description="These are the token collections currently being documented from the Figma exports."
      >
        <StatGrid />
      </Section>
      <Section
        title="Dependency model"
        description="The current contract moves from shared raw foundations into brand-aware usage, then into components."
      >
        <div className="architecture-line">
          <span>Primitive</span>
          <span>Semantic</span>
          <span>Theme</span>
          <span>Component contracts</span>
          <span>Components</span>
          <span>Widgets</span>
          <span>CMS / page</span>
        </div>
      </Section>
      <Section
        title="Brand system"
        description="Theme switching changes brand-driven semantics, font family, and approved brand behavior."
      >
        <BrandStrip />
      </Section>
    </DocsShell>
  );
}

export function ArchitecturePage(props: { brand: BrandName }) {
  const brandDoc = getThemeBrand(props.brand);

  return (
    <DocsShell
      brand={props.brand}
      eyebrow="Foundations"
      title="Token Architecture"
      description="The design system is built as a layered contract. Shared raw foundations flow into semantics, semantics route brand differences through Theme, and components will later consume those stable contracts instead of raw palette values."
      summary={[
        {
          label: 'Layers',
          value: '7',
          note: 'From source foundations through component contracts.',
        },
        {
          label: 'Rules',
          value: '6',
          note: 'Guardrails documented before implementation scales.',
        },
        {
          label: 'Brand font',
          value: brandDoc.fontFamily,
          note: 'The active preview family for this session.',
        },
      ]}
    >
      <Section
        title="System path"
        description="This is the working dependency order documented in repo memory and reflected in the Storybook docs."
      >
        <div className="architecture-line">
          <span>Primitive</span>
          <span>Utility</span>
          <span>Misc</span>
          <span>Theme</span>
          <span>Typography</span>
          <span>Semantic</span>
          <span>Component contracts</span>
        </div>
      </Section>

      <Section
        title="Source-of-truth rules"
        description="These are the constraints we are preserving before component implementation begins."
      >
        <div className="rule-grid">
          <article className="rule-card">
            <h3>Primitive</h3>
            <p>Raw color source only. No semantic meaning should be created here.</p>
          </article>
          <article className="rule-card">
            <h3>Semantic</h3>
            <p>Intent-first usage layer. Semantic colors stay aliased instead of hardcoded.</p>
          </article>
          <article className="rule-card">
            <h3>Theme</h3>
            <p>Brand differences enter here through brand scales, font family, radii, and approved behavior.</p>
          </article>
          <article className="rule-card">
            <h3>Typography</h3>
            <p>Shared ramp for size, line-height, and letter-spacing across brands.</p>
          </article>
          <article className="rule-card">
            <h3>Utility</h3>
            <p>Alpha-color foundation for disabled, inverse, and overlay token behavior.</p>
          </article>
          <article className="rule-card">
            <h3>Misc</h3>
            <p>Current source for gap, size, stroke, and numeric opacity foundations.</p>
          </article>
        </div>
      </Section>

      <Section
        title="Selected brand impact"
        description="Theme switching changes the actual theme contract that brand-aware semantics resolve through."
      >
        <div className="metric-grid">
          <article className="metric-card">
            <h3>{props.brand}</h3>
            <div className="token-meta-list">
              <div>
                <span>Primary font family</span>
                <strong>{brandDoc.fontFamily}</strong>
              </div>
              <div>
                <span>Brand 500</span>
                <strong>{String(brandDoc.brandScale.find((token) => token.name === '500')?.hex ?? '-')}</strong>
              </div>
              <div>
                <span>Brand alt 500</span>
                <strong>{String(brandDoc.brandAltScale.find((token) => token.name === '500')?.hex ?? '-')}</strong>
              </div>
            </div>
          </article>
          <article className="metric-card">
            <h3>Why brand toggle matters</h3>
            <p>
              The Storybook toolbar is not just cosmetic. Theme-driven semantics such as
              <code> semantic.bg.brand.base </code>
              and typography previews change with the active brand.
            </p>
          </article>
        </div>
      </Section>
    </DocsShell>
  );
}

export function UsageRulesPage(props: { brand: BrandName }) {
  return (
    <DocsShell
      brand={props.brand}
      eyebrow="Foundations"
      title="Token Usage Rules"
      description="A practical guide for who should consume which token layer. This is the guardrail page that keeps designers, engineers, and future component work aligned before implementation scales."
      summary={[
        {
          label: 'Audiences',
          value: '2',
          note: 'Separate guidance for designers and engineers.',
        },
        {
          label: 'Priority order',
          value: '5',
          note: 'Color, brand, text, alpha, then spacing.',
        },
        {
          label: 'Current phase',
          value: 'Pre-components',
          note: 'Rules are tuned for the token and contract stage.',
        },
      ]}
    >
      <Section
        title="Designers"
        description="Use the highest-meaning layer available instead of reaching down into raw foundations unnecessarily."
      >
        <div className="rule-grid">
          <article className="rule-card">
            <h3>Use</h3>
            <p>Semantic for general UI intent, Theme for brand context, Typography for text hierarchy, and Misc foundations while semantic spacing does not exist yet.</p>
          </article>
          <article className="rule-card">
            <h3>Avoid</h3>
            <p>Specifying direct primitive palette values in component behavior when the same intent already exists in Semantic.</p>
          </article>
        </div>
      </Section>

      <Section
        title="Engineers"
        description="Implementation should stay aligned to the system contract rather than drifting into local values."
      >
        <div className="rule-grid">
          <article className="rule-card">
            <h3>Use</h3>
            <p>Semantic for color, Theme for brand switching, Typography for type rhythm, Utility for alpha plumbing, and Misc for raw spacing and effect foundations.</p>
          </article>
          <article className="rule-card">
            <h3>Avoid</h3>
            <p>Hardcoded hex values, raw RGBA usage, custom stroke widths, and direct primitive colors in feature code unless the task is token-definition work.</p>
          </article>
        </div>
      </Section>

      <Section
        title="Current working rule"
        description="Before semantic spacing and component token collections exist, the Storybook docs represent the system in this order."
      >
        <div className="architecture-line">
          <span>Color through Semantic</span>
          <span>Brand through Theme</span>
          <span>Text through Typography</span>
          <span>Alpha through Utility</span>
          <span>Spacing through Misc</span>
        </div>
      </Section>
    </DocsShell>
  );
}

export function PrimitiveTokensPage(props: { brand: BrandName }) {
  return (
    <DocsShell
      brand={props.brand}
      eyebrow="Tokens"
      title="Primitive Colors"
      description="Raw palette families are the only color source of truth. These tokens should feed Theme and Semantic, not be consumed directly in component implementation."
      summary={[
        {
          label: 'Families',
          value: formatCount(tokenDocsData.primitive.families.length),
          note: 'Grouped by shared hue families from the exports.',
        },
        {
          label: 'Swatches',
          value: formatCount(totalPrimitiveTokenCount()),
          note: 'Every raw color currently available to the system.',
        },
        {
          label: 'Consumption',
          value: 'Indirect',
          note: 'Primitive values should flow through Theme and Semantic.',
        },
      ]}
    >
      {tokenDocsData.primitive.families.map((family) => (
        <PrimitiveFamilySection family={family} key={family.name} />
      ))}
    </DocsShell>
  );
}

export function SemanticTokensPage(props: { brand: BrandName }) {
  return (
    <DocsShell
      brand={props.brand}
      eyebrow="Tokens"
      title="Semantic Colors"
      description="Intent-first color tokens for backgrounds, text, icons, and borders. Brand-aware semantics update with the selected Storybook brand, while shared semantics remain stable."
      summary={[
        {
          label: 'Categories',
          value: formatCount(tokenDocsData.semantic.categories.length),
          note: 'Intent groups for backgrounds, text, icons, and borders.',
        },
        {
          label: 'Tokens',
          value: formatCount(totalSemanticTokenCount()),
          note: 'Semantic values resolved through the current brand.',
        },
        {
          label: 'Brand-aware',
          value: formatCount(totalBrandAwareSemanticCount()),
          note: 'These tokens shift when the active brand changes.',
        },
      ]}
    >
      {tokenDocsData.semantic.categories.map((category: SemanticCategory) => (
        <Section
          key={category.name}
          title={toTitleCase(category.name)}
          description={`${category.tokens.length} semantic tokens`}
        >
          <div className="semantic-grid">
            {category.tokens.map((token) => (
              <SemanticTokenCard brand={props.brand} key={token.path} token={token} />
            ))}
          </div>
        </Section>
      ))}
    </DocsShell>
  );
}

export function ThemeTokensPage(props: { brand: BrandName }) {
  const brandDoc = getThemeBrand(props.brand);

  return (
    <DocsShell
      brand={props.brand}
      eyebrow="Tokens"
      title="Theme And Brand Tokens"
      description="Theme is the brand layer. It maps shared palettes into brand scales, carries font-family overrides, radius values, and the few brand-specific behavior flags the system allows."
      summary={[
        {
          label: 'Brands',
          value: formatCount(tokenDocsData.theme.brands.length),
          note: 'Each brand exposes a distinct theme contract.',
        },
        {
          label: 'Families',
          value: formatCount(new Set(tokenDocsData.theme.brands.map((entry) => entry.fontFamily)).size),
          note: 'Typography personality available across the system.',
        },
        {
          label: 'Active accent',
          value: String(brandDoc.brandScale.find((token) => token.name === '500')?.hex ?? '-'),
          note: 'Primary brand scale value for the current context.',
        },
      ]}
    >
      <div className="theme-grid">
        {tokenDocsData.theme.brands.map((brandDoc) => (
          <ThemeBrandPanel activeBrand={props.brand} brandDoc={brandDoc} key={brandDoc.name} />
        ))}
      </div>
    </DocsShell>
  );
}

export function TypographyTokensPage(props: { brand: BrandName }) {
  const brandDoc = getThemeBrand(props.brand);

  return (
    <DocsShell
      brand={props.brand}
      eyebrow="Tokens"
      title="Typography"
      description="The type ramp is shared across brands. The selected brand changes the preview typeface through Theme, while size, line-height, and letter-spacing stay consistent."
      summary={[
        {
          label: 'Groups',
          value: formatCount(tokenDocsData.typography.groups.length),
          note: 'Shared hierarchy buckets used across brands.',
        },
        {
          label: 'Styles',
          value: formatCount(totalTypographyTokenCount()),
          note: 'Size, line-height, and tracking combinations in the ramp.',
        },
        {
          label: 'Preview family',
          value: brandDoc.fontFamily,
          note: 'Live typeface for the currently selected brand.',
        },
      ]}
    >
      {tokenDocsData.typography.groups.map((group) => (
        <TypographyTable brand={props.brand} group={group} key={group.name} />
      ))}
    </DocsShell>
  );
}

export function UtilityTokensPage(props: { brand: BrandName }) {
  return (
    <DocsShell
      brand={props.brand}
      eyebrow="Tokens"
      title="Utility Alpha"
      description="Alpha utilities are the source of truth for translucent white and black token usage. Semantic disabled, inverse, and overlay states are expected to build from these values."
      summary={[
        {
          label: 'Alpha groups',
          value: formatCount(tokenDocsData.utility.alphaGroups.length),
          note: 'Split across white and black transparency ramps.',
        },
        {
          label: 'Tokens',
          value: formatCount(totalUtilityTokenCount()),
          note: 'Reusable opacity values for stateful UI surfaces.',
        },
        {
          label: 'Role',
          value: 'States',
          note: 'Supports disabled, inverse, and overlay behavior.',
        },
      ]}
    >
      {tokenDocsData.utility.alphaGroups.map((group) => (
        <AlphaGroupSection group={group} key={group.name} />
      ))}
    </DocsShell>
  );
}

export function MiscTokensPage(props: { brand: BrandName }) {
  return (
    <DocsShell
      brand={props.brand}
      eyebrow="Tokens"
      title="Misc Foundations"
      description="The current Misc export contains the raw spatial and visual scales used by the system today: gap, size, stroke, and numeric opacity."
      summary={[
        {
          label: 'Scales',
          value: '4',
          note: 'Gap, size, stroke, and opacity foundations.',
        },
        {
          label: 'Tokens',
          value: formatCount(totalMiscTokenCount()),
          note: 'Raw spatial and visual values available today.',
        },
        {
          label: 'Current use',
          value: 'Layout + effects',
          note: 'Bridge layer until richer semantic spacing arrives.',
        },
      ]}
    >
      <div className="metric-grid">
        <MetricTable title="Gap scale" tokens={tokenDocsData.misc.gap} />
        <MetricTable title="Size scale" tokens={tokenDocsData.misc.size} />
        <MetricTable title="Stroke scale" tokens={tokenDocsData.misc.stroke} />
        <MetricTable title="Opacity scale" tokens={tokenDocsData.misc.opacity} />
      </div>
    </DocsShell>
  );
}
