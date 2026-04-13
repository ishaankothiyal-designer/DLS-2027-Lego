---
name: ds-token-usage-rules
description: Use when deciding which token layer designers, engineers, or component authors should consume in this repo, including practical guidance for when to use Primitive, Semantic, Theme, Typography, Utility, or Misc foundations. Pair with `ds-visual-ui-direction` when token-consumption advice also needs taste, hierarchy, or visual-quality guardrails.
---

# DS Token Usage Rules

## Read first

- [../../memory/token-usage-rules.md](../../memory/token-usage-rules.md)
- [../../memory/semantic-colors.md](../../memory/semantic-colors.md)
- [../../memory/spacing-and-sizing.md](../../memory/spacing-and-sizing.md)
- [../ds-visual-ui-direction/SKILL.md](../ds-visual-ui-direction/SKILL.md)

## Use this skill for

- consumption guidance
- education and onboarding
- design-to-engineering alignment

## Workflow

1. Identify the consumer: designer, engineer, token author, or component author.
2. Route them to the highest-meaning token layer available.
3. Avoid exposing raw foundations unless the task truly needs them.

## Guardrails

- Prefer Semantic over Primitive in implementation.
- Prefer Theme for brand differences.
- Prefer shared guidance over one-off local choices.
- Pull in `ds-visual-ui-direction` when deciding not just what layer to use, but how the resulting UI should actually feel.
