---
name: ds-token-architecture
description: Use when planning, reviewing, or extending the design system token model in this repo, including layer boundaries, source-of-truth rules, alias directions, or how Primitive, Semantic, Theme, Typography, Utility, Misc, and future component tokens fit together.
---

# DS Token Architecture

## Read first

- [../../memory/index.md](../../memory/index.md)
- [../../memory/token-architecture.md](../../memory/token-architecture.md)
- [../../memory/interdependency-rules.md](../../memory/interdependency-rules.md)

## Use this skill for

- token architecture planning
- token layer ownership questions
- alias direction review
- new token layer proposals

## Workflow

1. Identify the token layer affected by the task.
2. Preserve the allowed dependency direction.
3. Prefer aliasing over hardcoding.
4. If the task introduces an exception, update [../../memory/exceptions.md](../../memory/exceptions.md).

## Guardrails

- Primitive is the raw color source.
- Semantic must stay aliased.
- Theme owns brand differences.
- Typography owns the shared ramp.
- Utility owns alpha-color foundations.
- Misc currently owns spacing, size, stroke, and numeric opacity foundations.
