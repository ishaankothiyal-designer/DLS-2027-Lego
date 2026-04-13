---
name: ds-spacing-foundations
description: Use when working on spacing and sizing foundations in this repo, including the current gap and size scales from the Misc export, future semantic spacing aliases such as padding or inset, and layout rhythm decisions. Pair with `ds-visual-ui-direction` when spacing decisions also affect visual rhythm, hierarchy, density, or overall interface taste.
---

# DS Spacing Foundations

## Read first

- [../../memory/spacing-and-sizing.md](../../memory/spacing-and-sizing.md)
- [../../memory/token-architecture.md](../../memory/token-architecture.md)
- [../../memory/visual-composition-principles.md](../../memory/visual-composition-principles.md)
- [../ds-visual-ui-direction/SKILL.md](../ds-visual-ui-direction/SKILL.md)

## Use this skill for

- spacing scale review
- gap and size usage
- semantic spacing planning
- layout rhythm normalization

## Workflow

1. Use the current numeric scale consistently.
2. Distinguish raw spatial foundations from future semantic spacing aliases.
3. Add semantic spacing only when the naming model is ready.

## Guardrails

- Do not invent ad hoc spacing names inside component code.
- Treat current gap and size as foundational, not yet semantic.
- Pull in `ds-visual-ui-direction` when the task is really about page rhythm, grouping, or density quality.
