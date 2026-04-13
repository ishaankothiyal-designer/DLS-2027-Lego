# Text Field Contract

## Purpose

Text Field is the first form control contract.

It is chosen early because it exercises:
- neutral surfaces
- focus behavior
- invalid state behavior
- disabled behavior
- supporting text
- typography rhythm

## Scope

This contract defines a single-line text field with optional label, helper text, error text, and leading or trailing icons.

It does not yet define:
- multiline text areas
- search fields
- masked inputs
- OTP inputs

## Supported Sizes

- `sm`
- `md`
- `lg`

Recommended size foundations:
- `sm -> field height size.40, horizontal inset size.12, gap gap.8`
- `md -> field height size.48, horizontal inset size.16, gap gap.8`
- `lg -> field height size.56, horizontal inset size.16, gap gap.10`

Recommended radius:
- `theme.radius.md`

Recommended stroke:
- `misc.stroke.regular`

## Typography

Label:
- `sm -> typography.utility.label-4`
- `md -> typography.utility.label-3`
- `lg -> typography.utility.label-2`

Input text:
- `sm -> typography.paragraph.body-3`
- `md -> typography.paragraph.body-2`
- `lg -> typography.paragraph.body-1`

Helper and error text:
- `typography.utility.fine-print` or `typography.caption.sm`, depending on density requirements

## Slots

- `field-container`
- `label`
- `input`
- `placeholder`
- `leading-icon`
- `trailing-icon`
- `helper-text`
- `error-text`
- `focus`

## Base Mapping

Recommended token mapping:
- `field-container.bg.default -> semantic.bg.primary`
- `field-container.border.default -> semantic.border.secondary`
- `field-container.border.hover -> semantic.border.secondary-hover`
- `input.text.default -> semantic.text.primary`
- `placeholder.text.default -> semantic.text.tertiary`
- `label.text.default -> semantic.text.secondary`
- `leading-icon.color.default -> semantic.icon.secondary`
- `trailing-icon.color.default -> semantic.icon.secondary`
- `helper-text.default -> semantic.text.tertiary`

## Focus Visible

Recommended token mapping:
- `field-container.border.focus-visible -> semantic.border.brand.base`
- `label.text.focus-visible -> semantic.text.brand.base`
- `leading-icon.color.focus-visible -> semantic.icon.brand.base`

Note:
- this keeps focus brand-aware without turning the full field into a brand-colored control

## Invalid State

Recommended token mapping:
- `field-container.border.invalid -> semantic.border.danger.base`
- `label.text.invalid -> semantic.text.danger.base`
- `error-text.invalid -> semantic.text.danger.base`
- `leading-icon.color.invalid -> semantic.icon.danger.base`

## Disabled State

Recommended token mapping:
- `field-container.bg.disabled -> semantic.bg.disabled-subtle`
- `field-container.border.disabled -> semantic.border.disabled-subtle`
- `input.text.disabled -> semantic.text.disabled`
- `placeholder.text.disabled -> semantic.text.disabled-subtle`
- `label.text.disabled -> semantic.text.disabled`
- `leading-icon.color.disabled -> semantic.icon.disabled`

## Optional Filled State

If the product differentiates filled from empty:
- retain the same container tokens
- use `semantic.text.primary` for entered text
- avoid inventing a new field background unless a product need appears

## Accessibility Notes

- focus must not rely on color alone if the field shape or ring can help
- placeholder should never be treated as label replacement
- invalid state should be announced beyond border color where applicable

## Brand Notes

- brand enters the field through focus and emphasis, not through the default resting surface
- this keeps forms stable across brands while still allowing clear themed interaction

## LLM Readiness

Use this contract when implementing or documenting:
- single-line text inputs
- labeled form fields
- validation and focus behavior
