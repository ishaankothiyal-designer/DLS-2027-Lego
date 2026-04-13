---
name: ds-token-interdependency
description: Use when checking how token layers affect each other in this repo, including propagation risk, alias direction, dependency boundaries, source-of-truth review, and whether a requested token change belongs in Primitive, Semantic, Theme, Utility, Misc, or a future component layer.
---

# DS Token Interdependency

## Read first

- [../../memory/interdependency-rules.md](../../memory/interdependency-rules.md)
- [../../memory/token-architecture.md](../../memory/token-architecture.md)
- [../../memory/exceptions.md](../../memory/exceptions.md)

## Use this skill for

- dependency review
- propagation analysis
- source-of-truth checks
- risky refactor evaluation

## Workflow

1. Identify upstream and downstream layers.
2. Check whether the change preserves the system contract.
3. Flag exceptions explicitly instead of hiding them.

## Guardrails

- Never bypass semantic aliasing casually.
- Do not let component code become the place where system rules are invented.
