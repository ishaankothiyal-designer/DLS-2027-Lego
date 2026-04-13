---
name: ds-storybook-brand-docs
description: Use when planning or documenting Storybook or Figma documentation structure for this design system, especially brand toggles, token documentation, component IA, accessibility guidance, and Audi-style docs patterns such as Overview, Contract, Variations, Properties, and Accessibility pages. Pair with `ds-visual-ui-direction` when the surface must also feel premium, editorial, legible, and designer-approved.
---

# DS Storybook Brand Docs

## Read first

- [../../memory/workflows/figma-github-storybook.md](../../memory/workflows/figma-github-storybook.md)
- [../../memory/storybook-brand-docs.md](../../memory/storybook-brand-docs.md)
- [../../memory/brand-themes.md](../../memory/brand-themes.md)
- [../../memory/component-tokenization.md](../../memory/component-tokenization.md)
- [../ds-visual-ui-direction/SKILL.md](../ds-visual-ui-direction/SKILL.md)

## Use this skill for

- Storybook structure planning
- Figma documentation structure planning
- brand theme toggles
- token documentation visibility
- cross-team documentation
- component documentation IA
- accessibility documentation structure
- Audi-style documentation patterns for design-system surfaces

## Workflow

1. Present Storybook as the shared visibility layer.
2. Keep theme switching tied to the actual Theme contract.
3. Reuse the same documentation architecture across Storybook and future Figma documentation when that improves clarity.
4. Keep system-level guidance separate from component-level guidance.
5. For component documentation, prefer this page model:
   - `Overview`
   - `Contract`
   - `Variations`
   - `Properties`
   - `Accessibility`
6. Treat `Contract` as the maintainer-facing bridge between token memory and implementation.
7. Only publish `Properties` when there is real implemented component code to document.
8. Only publish `Accessibility` claims that are backed by implementation truth, Storybook behavior, or explicit testing guidance.

## Guardrails

- Storybook should reflect approved GitHub implementation, not speculative design state.
- Brand switching should update real theme behavior, not just marketing labels.
- Figma documentation can mirror Storybook structure, but Storybook remains the shared implementation-facing visibility layer.
- Do not blur aspiration and truth. Mark whether a component is contract-only, implemented, or verified.
- Pull in `ds-visual-ui-direction` whenever the task involves visual polish, hierarchy, reading comfort, or overall documentation taste.
