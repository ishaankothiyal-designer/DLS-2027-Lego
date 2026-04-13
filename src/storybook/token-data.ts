import rawData from '../generated/token-docs.json';

export type BrandName = 'Cars24' | 'Team BHP' | 'CarInfo' | 'Vehicle Info';

export interface CollectionSummary {
  name: string;
  modes: string[];
  variableCount: number;
}

export interface PrimitiveToken {
  name: string;
  path: string;
  hex: string | null;
  alpha: number | null;
  codeSyntaxWeb: string | null;
  description: string | null;
}

export interface PrimitiveFamily {
  name: string;
  tokens: PrimitiveToken[];
}

export interface SemanticToken {
  name: string;
  path: string;
  description: string | null;
  codeSyntaxWeb: string | null;
  alias: {
    setName: string;
    tokenName: string;
  } | null;
  resolvedByBrand: Record<BrandName, string | number | null>;
  finalSourceByBrand: Record<BrandName, string>;
  chainByBrand: Record<BrandName, string>;
  sharedAcrossBrands: boolean;
}

export interface SemanticCategory {
  name: string;
  tokens: SemanticToken[];
}

export interface ThemeScaleToken {
  name: string;
  path: string;
  hex: string | number | null;
  description: string | null;
  aliasSource: string;
}

export interface ThemeBrand {
  name: BrandName;
  fontFamily: string;
  fontWeights: Array<{ name: string; value: number }>;
  radiusCore: Array<{ name: string; value: number }>;
  radiusAlt: Array<{ name: string; value: number }>;
  behaviours: Array<{ path: string; value: boolean }>;
  brandScale: ThemeScaleToken[];
  brandAltScale: ThemeScaleToken[];
}

export interface TypographyGroup {
  name: string;
  tokens: Array<{
    name: string;
    path: string;
    size: number | null;
    lineHeight: number | null;
    letterSpacing: number | null;
  }>;
}

export interface AlphaGroup {
  name: string;
  tokens: Array<{
    name: string;
    path: string;
    hex: string | null;
    alpha: number;
    codeSyntaxWeb: string | null;
  }>;
}

export interface MetricToken {
  name: string;
  path: string;
  value: number | string;
  codeSyntaxWeb: string | null;
}

export interface TokenDocsData {
  meta: {
    generatedAt: string;
    brands: BrandName[];
    collectionSummary: CollectionSummary[];
  };
  primitive: {
    families: PrimitiveFamily[];
  };
  semantic: {
    categories: SemanticCategory[];
  };
  theme: {
    brands: ThemeBrand[];
  };
  typography: {
    groups: TypographyGroup[];
  };
  utility: {
    alphaGroups: AlphaGroup[];
  };
  misc: {
    gap: MetricToken[];
    size: MetricToken[];
    stroke: MetricToken[];
    opacity: MetricToken[];
  };
}

export const tokenDocsData = rawData as TokenDocsData;
export const brandNames = tokenDocsData.meta.brands;

export function getThemeBrand(brand: BrandName) {
  const match = tokenDocsData.theme.brands.find((entry) => entry.name === brand);

  if (!match) {
    throw new Error(`Missing theme definition for ${brand}`);
  }

  return match;
}

export function getBrandAccent(brand: BrandName) {
  const brandDoc = getThemeBrand(brand);
  return (
    brandDoc.brandScale.find((token) => token.name === '500')?.hex ??
    brandDoc.brandScale[0]?.hex ??
    '#2563eb'
  );
}

export function getBrandAccentSoft(brand: BrandName) {
  const brandDoc = getThemeBrand(brand);
  return (
    brandDoc.brandScale.find((token) => token.name === '100')?.hex ??
    brandDoc.brandAltScale[0]?.hex ??
    '#dbeafe'
  );
}

export function getBrandAccentDeep(brand: BrandName) {
  const brandDoc = getThemeBrand(brand);
  return (
    brandDoc.brandScale.find((token) => token.name === '700')?.hex ??
    brandDoc.brandScale.at(-1)?.hex ??
    '#1d4ed8'
  );
}

export function humanizeTokenName(value: string) {
  return value.replaceAll('-', ' ');
}

export function formatTokenValue(value: number | string | null) {
  if (value === null) {
    return '-';
  }

  if (typeof value === 'number') {
    return Number.isInteger(value) ? `${value}` : value.toFixed(2);
  }

  return value;
}
