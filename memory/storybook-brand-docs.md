# Storybook Brand Docs

This file documents the active Storybook token-documentation layer in this repo.

## Status

Active.

## Role

Storybook is the shared visualization layer for:
- designers
- engineers
- product managers
- business stakeholders

It now documents the token system visually and uses the repo token exports as its source input.

## Current Coverage

The current Storybook token docs cover:
- overview and collection counts
- primitive colors
- semantic colors
- theme and brand tokens
- typography
- utility alpha
- misc foundations

## Current Structure

Storybook stories currently live under:
- `Foundations/Overview`
- `Tokens/Primitive Colors`
- `Tokens/Semantic Colors`
- `Tokens/Theme And Brands`
- `Tokens/Typography`
- `Tokens/Utility Alpha`
- `Tokens/Misc Foundations`

## Preferred Documentation Architecture

The next documentation layer should follow a more explicit design-system information architecture.

Top-level sections should prefer:
- `Introduction`
- `Foundations`
- `Guidelines`
- `Components`
- `Patterns` later, once multi-component usage is documented

This structure is suitable for both:
- Storybook documentation
- future Figma documentation that explains the design system

## Preferred Component Documentation Model

When a component is documented, prefer these pages:
- `Overview`
- `Contract`
- `Variations`
- `Properties`
- `Accessibility`

### Page Roles

- `Overview`: purpose, usage guidance, non-goals, best practices, use cases, and brand behavior
- `Contract`: slots, states, token dependencies, size model, accessibility assumptions, and explicit exceptions
- `Variations`: visual matrix of supported variants, sizes, states, and brand-aware differences
- `Properties`: real API documentation for implemented code only
- `Accessibility`: semantic element choice, ARIA or labeling rules, keyboard interaction, focus behavior, disabled behavior, and related resources

## Truth Model For Documentation

Documentation should be explicit about what kind of truth it represents.

- `Foundations` should come from generated token data
- `Contract` should come from reviewed memory and approved component contracts
- `Variations` should come from implemented stories when available, or clearly marked design-contract previews
- `Properties` should only exist when real component code exists
- `Accessibility` should only claim behavior that is backed by implementation, Storybook behavior, or documented testing guidance

Where useful, component pages should signal status such as:
- `Contract`
- `Implemented`
- `Verified`

## Brand Toggle Behavior

Storybook exposes a global brand toolbar with:
- `Cars24`
- `Team BHP`
- `CarInfo`
- `Vehicle Info`

The selected brand affects:
- theme-driven color previews
- semantic brand token previews
- typography previews via brand font family
- page accent styling in the docs shell

## Data Source Model

Storybook does not hand-maintain token values.

Instead:
1. it reads the Figma token exports in `Tokens/`
2. a local generation script normalizes those exports into Storybook-friendly data
3. Storybook renders the generated token data visually

This keeps visual documentation tied to source artifacts instead of copy-pasted docs.

## Current Implementation Files

- `scripts/generate-token-docs.mjs`
- `src/generated/token-docs.json`
- `src/storybook/token-data.ts`
- `src/storybook/TokenDocs.tsx`
- `src/storybook/docs.css`
- `src/stories/`

## Workflow

Use:
- `npm run storybook` for local visual review
- `npm run build-storybook` for static documentation output

## Next Expansion Areas

- component contract pages
- live component stories that consume the same token contracts
- widget documentation
- richer docs around spacing aliases once that layer exists
- accessibility guidance at both system and component level
- reuse of the same IA in future Figma documentation surfaces

## LLM Readiness

Load this file when the task involves:
- Storybook structure
- Figma documentation structure for the design system
- token documentation pages
- component documentation IA
- accessibility documentation planning
- brand toggles
- how the visual docs stay synchronized with the token exports
