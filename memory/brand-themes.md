# Brand Themes

This file documents the multi-brand `Theme` collection.

## Role

Theme is the brand layer of the system.

It currently owns:
- `brand` color scale
- `brand.alt` color scale
- font family
- font weights
- radii
- component behavior booleans

## Active Brands

- `Cars24`
- `Team BHP`
- `CarInfo`
- `Vehicle Info`

## Brand Color Mapping

Primary `brand` scale mappings:
- `Cars24 -> cobalt-blue`
- `Team BHP -> slate`
- `CarInfo -> teal`
- `Vehicle Info -> lotus-blue`

Current `brand.alt` mappings:
- `Cars24 -> cobalt-blue`
- `Team BHP -> crimson-red`
- `CarInfo -> teal`, with an intentional special mapping where `brand.alt.500 -> teal/950`
- `Vehicle Info -> lotus-blue`

## Important Exception

`CarInfo brand.alt.500` is intentionally mapped to `teal/950`.

This is not a mistake. It is a deliberate brand exception used in selected components where the alternate brand color needs to appear with stronger contrast or emphasis.

All future contributors must preserve this unless an explicit system decision changes it.

## Fonts

Current theme font-family mapping:
- `Cars24 -> Geist`
- `Team BHP -> Geist`
- `CarInfo -> Manrope`
- `Vehicle Info -> Metropolis`

Current shared weights:
- `regular -> 400`
- `medium -> 500`
- `semibold -> 600`
- `bold -> 700`

## Radius

Current shared radius values:
- `none -> 0`
- `xxs -> 4`
- `xs -> 6`
- `sm -> 8`
- `md -> 12`
- `lg -> 14`
- `xl -> 16`
- `xxl -> 20`
- `full -> 999`

Alternative radius set:
- `alt.xxs -> 4`
- `alt.xs -> 6`
- `alt.sm -> 8`
- `alt.md -> 12`
- `alt.lg -> 14`
- `alt.xl -> 16`
- `alt.xxl -> 20`

## Component Behavior

The theme layer already carries behavior flags.

Current example:
- `Cars24` and `Team BHP` default `justify-item.align-left`
- `CarInfo` and `Vehicle Info` default `justify-item.align-centre`

This shows that the theme layer is allowed to hold brand-specific behavior when the system decides that behavior is part of brand expression.

## Guardrails

- Brand semantics should point to Theme, not directly to Primitive.
- Fonts belong in Theme, not in the shared Typography collection.
- Theme may define approved brand exceptions.
- Do not normalize brand differences away just to make structures look symmetrical.

## LLM Readiness

Load this file for any task involving:
- brand toggles
- theme switching
- brand color mapping
- brand-specific font families
- brand exceptions
- behavior differences by brand
