# Spacing And Sizing

This file documents the spatial foundations currently exported through the `Misc` collection.

## Role

The current export does not yet contain semantic spacing aliases such as `padding`, `inset`, `stack`, or `inline`.

What it does contain is the raw spatial scale needed to build those semantic layers later:
- `gap`
- `size`

## Current Gap Scale

Gap tokens:
- `none`
- `2`
- `4`
- `6`
- `8`
- `10`
- `12`
- `14`
- `16`
- `18`
- `20`
- `24`
- `28`
- `32`
- `36`
- `40`
- `48`
- `56`
- `64`
- `72`
- `80`
- `88`
- `96`
- `100`

## Current Size Scale

Size tokens mirror the same numeric system and add:
- `0`

This makes `size` the more general raw measurement scale, while `gap` is already shaped toward layout spacing.

## Planned Direction

This foundation should later support semantic spacing aliases such as:
- `gap`
- `stack`
- `inline`
- `inset`
- `squish`
- `padding`

For now:
- raw scale lives here
- semantic spatial meaning will be added later

## Guardrails

- Do not invent semantic spacing names inside component code before the token layer exists.
- Prefer consistent use of the existing numeric scale.
- When semantic spacing aliases are added later, components should consume those aliases instead of raw scale names whenever possible.

## LLM Readiness

Load this file for:
- spacing discussions
- layout rhythm decisions
- padding and gap token planning
- component spacing normalization

Pair with [token-architecture.md](./token-architecture.md) if the task involves introducing a new semantic spatial layer.
