---
name: ds-brand-themes
description: Use when working on multi-brand theming in this repo, including brand color scales, brand.alt scales, brand-specific font families, radii, behavior flags, theme switching, or approved brand exceptions across Cars24, Team BHP, CarInfo, and Vehicle Info. Pair with `ds-visual-ui-direction` when brand expression needs to feel refined, restrained, and visually compelling in actual UI.
---

# DS Brand Themes

## Read first

- [../../memory/brand-themes.md](../../memory/brand-themes.md)
- [../../memory/exceptions.md](../../memory/exceptions.md)
- [../../memory/token-architecture.md](../../memory/token-architecture.md)
- [../../memory/cars24-visual-ui-summary.md](../../memory/cars24-visual-ui-summary.md)
- [../ds-visual-ui-direction/SKILL.md](../ds-visual-ui-direction/SKILL.md)

## Use this skill for

- brand theme mapping
- brand toggles
- brand font-family overrides
- theme exceptions
- brand behavior differences

## Workflow

1. Treat Theme as the brand layer.
2. Preserve explicit brand mappings and approved exceptions.
3. Keep brand logic out of Primitive.

## Guardrails

- Do not normalize away intentional exceptions.
- Keep font family in Theme.
- Keep brand semantic routing explicit.
- Pull in `ds-visual-ui-direction` when theme work affects tone, brand presence, or premium feel at the surface level.
