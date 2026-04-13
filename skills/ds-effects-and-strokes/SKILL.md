---
name: ds-effects-and-strokes
description: Use when working on non-color visual foundations in this repo, including stroke widths and numeric opacity tokens from the current Misc export, and when deciding whether an effect belongs in stroke, opacity, or alpha utility. Pair with `ds-visual-ui-direction` when those decisions affect perceived polish, restraint, and interface quality.
---

# DS Effects And Strokes

## Read first

- [../../memory/effects-and-strokes.md](../../memory/effects-and-strokes.md)
- [../../memory/utility-alpha.md](../../memory/utility-alpha.md)
- [../ds-visual-ui-direction/SKILL.md](../ds-visual-ui-direction/SKILL.md)

## Use this skill for

- stroke-width standardization
- opacity token usage
- choosing between opacity and alpha

## Workflow

1. Determine whether the task is structural stroke, element opacity, or translucent color.
2. Use stroke for line weight.
3. Use opacity for property-level transparency.
4. Use Utility alpha for translucent color.

## Guardrails

- Do not mix alpha and opacity concepts casually.
- Keep stroke widths on the defined scale.
- Pull in `ds-visual-ui-direction` when line weight, opacity, or material cues affect the emotional quality of the UI.
