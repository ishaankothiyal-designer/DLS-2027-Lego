---
name: ds-component-tokenization
description: Use when defining or reviewing component-level token contracts in this repo, including state tokens, variant tokens, slot tokens, and the bridge from foundations into stable component APIs. Pair with `ds-visual-ui-direction` when component contracts should also support stronger hierarchy, rhythm, and designer-grade visual outcomes.
---

# DS Component Tokenization

## Read first

- [../../memory/component-tokenization.md](../../memory/component-tokenization.md)
- [../../memory/component-contracts/index.md](../../memory/component-contracts/index.md)
- [../../memory/interdependency-rules.md](../../memory/interdependency-rules.md)
- [../../memory/token-usage-rules.md](../../memory/token-usage-rules.md)
- [../ds-visual-ui-direction/SKILL.md](../ds-visual-ui-direction/SKILL.md)

## Use this skill for

- component token planning
- component-state contract definition
- variant token design

## Workflow

1. Start from semantic meaning and component behavior.
2. Pull from Theme, Typography, Utility, and spacing foundations as needed.
3. Avoid reaching directly into Primitive from components.

## Guardrails

- Component tokens are a bridge layer, not a duplicate of foundations.
- Keep APIs stable and predictable across brands.
- Pull in `ds-visual-ui-direction` when token contracts influence rendered component hierarchy, density, or polish.
