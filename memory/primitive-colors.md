# Primitive Colors

This file documents the raw color foundations exported in the current `Primitive` collection.

## Role

Primitive colors are the only raw palette source for color tokens in this system.

They exist so that:
- semantic colors can express intent without embedding raw values
- brand themes can build branded scales from a shared palette source
- future brands can be introduced without rewriting semantic usage contracts

## Families

Base colors:
- `base/black`
- `base/white`

11-step families (`50` to `950`):
- `slate`
- `neutral`
- `cobalt-blue`
- `lotus-blue`
- `teal`
- `crimson-red`
- `electric-violet`
- `bright-blue`
- `amber`
- `red`
- `green`
- `mint-green`
- `cream-beige`
- `sky-surge`

10-step families (`50` to `900`):
- `drive-pink`
- `pop-purple`
- `cool-mint`
- `orange`

## Important Notes

- Primitive exports include WCAG contrast notes in token descriptions.
- Primitive exports also include platform code syntax for web, Android, and iOS.
- Primitive colors should be referenced by alias from Semantic or Theme. They should not be used directly in component implementation unless the task is token-definition work.

## Naming Model

Primitive names follow:

`family/step`

Examples:
- `slate/100`
- `neutral/500`
- `cobalt-blue/700`
- `amber/50`

## Guardrails

- Do not create semantic meaning at the Primitive layer.
- Do not encode brand ownership at the Primitive layer.
- Do not route component state directly to Primitive in production usage.
- When a new brand arrives, prefer new Theme mappings before introducing new Primitive families.

## LLM Readiness

If a task asks for:
- raw palette analysis
- tonal mapping
- color family expansion
- brand palette selection

load this file first, then load [brand-themes.md](./brand-themes.md) or [semantic-colors.md](./semantic-colors.md) as needed.
