# Button Contract

## Purpose

Button is the first primary action component contract.

It is intentionally chosen first because it exercises:
- brand semantics
- neutral semantics
- destructive semantics
- typography
- spacing
- radius
- hover, focus, and disabled behavior

## Scope

This contract defines:
- primary action buttons
- secondary surface buttons
- neutral outline buttons
- destructive action buttons

It does not yet define:
- icon-only buttons
- split buttons
- loading spinners
- link-style buttons

## Supported Sizes

- `sm`
- `md`
- `lg`

Recommended size foundations:
- `sm -> height size.32, gap gap.6, horizontal inset size.12`
- `md -> height size.40, gap gap.8, horizontal inset size.16`
- `lg -> height size.48, gap gap.10, horizontal inset size.20`

Recommended radius:
- use `theme.radius.alt.md` for standard buttons so interactive curvature can evolve separately if needed

## Typography

Recommended label mapping:
- `sm -> typography.utility.label-3`
- `md -> typography.utility.label-2`
- `lg -> typography.utility.label-1`

Use:
- Theme font family
- Theme font weights `medium` or `semibold`

## Slots

- `container`
- `label`
- `leading-icon`
- `trailing-icon`
- `focus`

## Variants

### Brand Solid

Use this as the default high-emphasis CTA.

Recommended token mapping:
- `container.bg.default -> semantic.bg.brand.bold`
- `container.bg.hover -> semantic.bg.brand.bold-hover`
- `container.border.default -> semantic.border.brand.bold`
- `label.text.default -> semantic.text.primary-inverse`
- `icon.color.default -> semantic.icon.primary-inverse`

Reason:
- `brand.bold` is safer than `brand.base` for inverse text across all current brands
- this avoids relying on `brand.500` contrast to be uniformly strong

### Neutral Soft

Use for secondary actions on light surfaces.

Recommended token mapping:
- `container.bg.default -> semantic.bg.secondary`
- `container.bg.hover -> semantic.bg.secondary-hover`
- `container.border.default -> semantic.border.secondary`
- `label.text.default -> semantic.text.primary`
- `icon.color.default -> semantic.icon.primary`

### Neutral Outline

Use when a low-emphasis but clearly bounded action is needed.

Recommended token mapping:
- `container.bg.default -> semantic.bg.primary`
- `container.bg.hover -> semantic.bg.secondary`
- `container.border.default -> semantic.border.secondary`
- `container.border.hover -> semantic.border.secondary-hover`
- `label.text.default -> semantic.text.primary`
- `icon.color.default -> semantic.icon.primary`

### Danger Solid

Use only for destructive actions.

Recommended token mapping:
- `container.bg.default -> semantic.bg.danger.base`
- `container.bg.hover -> semantic.bg.danger.bold`
- `container.border.default -> semantic.border.danger.base`
- `container.border.hover -> semantic.border.danger.bold`
- `label.text.default -> semantic.text.primary-inverse`
- `icon.color.default -> semantic.icon.primary-inverse`

## States

### Focus Visible

Recommended mapping:
- retain the active variant border token
- add a focus treatment derived from `semantic.border.brand.base`

Note:
- a dedicated focus-ring token does not exist yet
- if a separate focus-ring foundation is introduced later, update this contract instead of hardcoding local styles

### Disabled

Recommended mapping:
- `container.bg -> semantic.bg.disabled`
- `container.border -> semantic.border.disabled`
- `label.text -> semantic.text.disabled`
- `icon.color -> semantic.icon.disabled`

### Active

Until dedicated pressed tokens exist:
- use the hover mapping for active
- avoid creating one-off darker tones inside implementation

## Accessibility Notes

- preserve sufficient contrast for inverse text on solid actions
- keep minimum interactive height at or above `size.32`
- do not rely on color alone for destructive confirmation flows

## Brand Notes

- the contract intentionally routes high-emphasis CTA color through brand semantics
- brand differences should arrive via Theme and Semantic, not custom per-component palette logic

## LLM Readiness

Use this contract when implementing or documenting:
- primary buttons
- secondary buttons
- outline buttons
- destructive buttons
