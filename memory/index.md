# Design System Memory

This directory is the canonical repo knowledge for the Cars24 multi-brand design system sandbox.

Use this directory as the source of truth for:
- token architecture
- token-layer responsibilities
- brand theming rules
- typography and spacing foundations
- cross-layer dependency rules
- workflow guidance for Figma, GitHub, and Storybook

Current source artifacts live in [Tokens](../Tokens). Those exports are the factual input. The files in this directory translate those exports into stable system rules that humans and LLMs can use consistently.

## Architecture

The current token model is:

`Primitive -> Semantic -> Theme-aware usage -> Component -> Widget -> CMS/page`

Supporting layers:
- `Typography` provides the shared type ramp.
- `Utility` provides alpha-color foundations.
- `Misc` currently provides spacing, size, stroke, and opacity foundations.

## Core Memory Files

- [token-architecture.md](./token-architecture.md): overall token model and source-of-truth rules
- [primitive-colors.md](./primitive-colors.md): raw color families and scale rules
- [semantic-colors.md](./semantic-colors.md): semantic color intent and aliasing model
- [brand-themes.md](./brand-themes.md): brand modes, fonts, radii, and theme exceptions
- [typography.md](./typography.md): shared type ramp and brand font-family overrides
- [spacing-and-sizing.md](./spacing-and-sizing.md): spatial foundations from the current `Misc` export
- [utility-alpha.md](./utility-alpha.md): alpha-color system and semantic dependencies
- [effects-and-strokes.md](./effects-and-strokes.md): opacity and stroke foundations
- [component-tokenization.md](./component-tokenization.md): active bridge from foundations into component contracts
- [component-contracts/index.md](./component-contracts/index.md): first documented component contracts
- [interdependency-rules.md](./interdependency-rules.md): allowed dependency directions and review rules
- [token-usage-rules.md](./token-usage-rules.md): which layer to consume in which context
- [visual-benchmark-references.md](./visual-benchmark-references.md): benchmark visual patterns from Audi, Uber, Amazon, and IKEA
- [visual-composition-principles.md](./visual-composition-principles.md): practical rules for space, layout, minimalism, and hierarchy
- [visual-legibility-and-systems.md](./visual-legibility-and-systems.md): official and editorial rules for typography, contrast, spacing, density, and repeatable visual craft
- [cars24-visual-ui-summary.md](./cars24-visual-ui-summary.md): Cars24-specific synthesis for premium, warm, and structured UI
- [exceptions.md](./exceptions.md): approved exceptions that must not be normalized away

## Workflow Memory

- [workflows/figma-github-storybook.md](./workflows/figma-github-storybook.md): manual PR-reviewed sync model
- [storybook-brand-docs.md](./storybook-brand-docs.md): active Storybook token documentation structure and brand-toggle behavior

## Future Memory

- [future/expressive-palette.md](./future/expressive-palette.md): reserved for non-brand visual colors beyond the current system contract
- [future/storybook-brand-docs.md](./future/storybook-brand-docs.md): Storybook documentation and theme-switching plan

## LLM Readiness

These memory files are intentionally written to be:
- small enough to load selectively
- explicit about what is allowed and what is not
- stable enough to guide future token, component, and documentation work

When adding new knowledge, prefer updating the relevant memory file here first. Skills should reference memory, not replace it.
