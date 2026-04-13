# Badge Contract

## Purpose

Badge is the first compact status and attribute component contract.

It is chosen early because it exercises:
- semantic status families
- brand highlighting
- compact typography
- soft and strong emphasis patterns

## Scope

This contract defines:
- informational badges
- semantic status badges
- brand attribute badges

It does not yet define:
- removable chips
- filter chips
- interactive segmented controls

## Supported Sizes

- `sm`
- `md`

Recommended size foundations:
- `sm -> min-height size.20, gap gap.4, horizontal inset size.8`
- `md -> min-height size.24, gap gap.6, horizontal inset size.10`

Recommended radius:
- `theme.radius.full`

## Typography

Recommended label mapping:
- `sm -> typography.utility.label-4`
- `md -> typography.utility.label-3`

## Slots

- `container`
- `label`
- `icon`

## Tone Model

The initial tone model is:
- `soft`
- `solid`

## Variant Families

- `neutral`
- `brand`
- `success`
- `info`
- `warning`
- `danger`

## Neutral

### Neutral Soft

Recommended token mapping:
- `container.bg -> semantic.bg.secondary`
- `container.border -> semantic.border.secondary`
- `label.text -> semantic.text.primary`
- `icon.color -> semantic.icon.primary`

### Neutral Solid

Recommended token mapping:
- `container.bg -> semantic.bg.primary-inverse`
- `container.border -> semantic.border.primary`
- `label.text -> semantic.text.primary-inverse`
- `icon.color -> semantic.icon.primary-inverse`

Use carefully, since this is a higher-emphasis neutral badge.

## Brand

### Brand Soft

Recommended token mapping:
- `container.bg -> semantic.bg.brand.subtle`
- `container.border -> semantic.border.brand.subtle`
- `label.text -> semantic.text.brand.bold`
- `icon.color -> semantic.icon.brand.base`

### Brand Solid

Recommended token mapping:
- `container.bg -> semantic.bg.brand.bold`
- `container.border -> semantic.border.brand.bold`
- `label.text -> semantic.text.primary-inverse`
- `icon.color -> semantic.icon.primary-inverse`

## Status Families

### Soft Status Pattern

Apply the same pattern for `success`, `info`, `warning`, and `danger`:
- `container.bg -> semantic.bg.<family>.subtle`
- `container.border -> semantic.border.<family>.subtle`
- `label.text -> semantic.text.<family>.bold`
- `icon.color -> semantic.icon.<family>.base`

### Solid Status Pattern

Apply the same pattern for `success`, `info`, `warning`, and `danger`:
- `container.bg -> semantic.bg.<family>.bold`
- `container.border -> semantic.border.<family>.bold`
- `label.text -> semantic.text.primary-inverse`
- `icon.color -> semantic.icon.primary-inverse`

## Disabled State

Badges are usually non-interactive, so disabled state is optional.

If a disabled badge is needed:
- `container.bg -> semantic.bg.disabled-subtle`
- `container.border -> semantic.border.disabled`
- `label.text -> semantic.text.disabled`
- `icon.color -> semantic.icon.disabled`

## Accessibility Notes

- badge meaning should not rely on color alone if it communicates status
- text and icon contrast must remain legible in soft variants
- use short labels and avoid wrapping in the smallest size where possible

## Brand Notes

- brand badges should use theme-driven brand semantics, not direct brand palette references
- the `base-alt` brand semantic family remains available for future expressive or alternate-brand badge treatments if product needs emerge

## LLM Readiness

Use this contract when implementing or documenting:
- status badges
- attribute badges
- compact informational labels
