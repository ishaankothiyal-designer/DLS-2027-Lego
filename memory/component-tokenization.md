# Component Tokenization

This file defines the active bridge layer between design-system foundations and component implementation.

## Status

Active documentation layer.

Component tokens are not yet exported as a formal token collection in this repo, but the contract model is now defined here so components can be planned and implemented consistently.

## Purpose

Component tokenization exists to:
- translate foundation tokens into stable component contracts
- keep components from reaching directly into raw foundations unnecessarily
- make brand switching predictable
- make React and React Native implementation more consistent
- give Storybook and documentation a stable language for component behavior

## Inputs

Component contracts may depend on:
- `Semantic` for color intent
- `Theme` for radii, font-family, and brand-driven behavior
- `Typography` for size, line-height, and letter-spacing
- `Misc` for spatial and effect foundations
- `Utility` only when the component contract needs alpha-specific behavior and no semantic token exists yet

Component contracts should not normally depend directly on:
- `Primitive`

## Contract Anatomy

Every component contract should describe:
- purpose
- supported variants
- supported sizes
- slots
- states
- token dependencies
- accessibility assumptions
- brand behavior
- explicit non-goals or open questions

## Slot Model

The default slot model for most components is:
- `container`
- `label`
- `icon`
- `supporting-text`
- `focus`

Components may add more slots when needed, but slot names should stay concrete and predictable.

## Property Model

The most common component-token properties are:
- `bg`
- `border`
- `text`
- `icon`
- `radius`
- `height`
- `padding-inline`
- `padding-block`
- `gap`
- `stroke`
- `font-family`
- `font-size`
- `line-height`
- `letter-spacing`

## Naming Model

Component token names should be thought about in this order:

`component -> slot -> property -> variant -> state`

Examples:
- `button.container.bg.brand-solid.default`
- `button.label.text.brand-solid.default`
- `button.container.height.md`
- `badge.container.bg.success.soft`
- `text-field.input.text.default`

This is a conceptual contract shape, not yet a locked serialized token format.

## State Model

The default state vocabulary is:
- `default`
- `hover`
- `focus-visible`
- `active`
- `disabled`

Optional states:
- `selected`
- `pressed`
- `loading`
- `invalid`
- `read-only`

Only add a state when the component genuinely needs it.

## Size Model

The default size vocabulary is:
- `sm`
- `md`
- `lg`

Add `xs` or `xl` only when the component contract truly requires it.

## Contract Rules

- Use semantic tokens for color whenever they exist.
- Use theme radii instead of hardcoded radius values.
- Use typography tokens for label and text rhythm.
- Use `Misc.size` and `Misc.gap` foundations until semantic spatial tokens exist.
- Use explicit contract docs to capture exceptions instead of burying them inside implementation.

## Cross-Platform Guidance

Component contracts should remain platform-neutral where possible.

That means:
- define intent and slot behavior here
- keep web-only CSS quirks out of the contract
- keep React Native constraints in mind when describing dimensions, text behavior, and interaction states

## First Contracts

The first documented contracts are:
- [component-contracts/button.md](./component-contracts/button.md)
- [component-contracts/text-field.md](./component-contracts/text-field.md)
- [component-contracts/badge.md](./component-contracts/badge.md)

## Review Checklist

Before accepting a component-token contract:
- does it depend on the right token layers
- does it avoid Primitive unless absolutely necessary
- does it preserve brand behavior through Theme and Semantic
- does it remain implementable on web and React Native
- does it define states and slots clearly enough for Storybook

## LLM Readiness

Load this file for:
- component token planning
- component contract authoring
- design-to-code translation
- deciding whether a component should get a new token or reuse an existing semantic contract
