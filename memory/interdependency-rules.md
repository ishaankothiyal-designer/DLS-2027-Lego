# Interdependency Rules

This file documents how token layers depend on each other.

## Canonical Dependency Order

`Primitive / Utility / Misc foundations -> Theme / Typography -> Semantic -> Component tokens -> Components -> Widgets -> CMS/page`

## Allowed Relationships

- Primitive may feed Theme and Semantic.
- Utility may feed Semantic.
- Misc may feed future semantic spatial and component layers.
- Theme may feed Semantic brand tokens and component behavior.
- Typography may feed component text systems.
- Semantic may feed component tokens and components.

## Review Rules

When changing a token, always ask:
- what layer is this token in
- what layers depend on it
- should this be aliased instead of hardcoded
- is this a general rule or an approved exception

## Propagation Rules

- Primitive changes can affect Semantic and Theme downstream.
- Theme changes can affect all brand semantics and brand-switched Storybook views.
- Typography changes can affect all components with text.
- Utility changes can affect overlays, inverse states, and disabled states.
- Misc changes can affect layout, borders, and effect consistency.

## Hard Constraints

- Semantic colors must remain aliased.
- Brand exceptions must be documented in [exceptions.md](./exceptions.md).
- Components should not become the place where brand logic is invented.
- New semantic meaning should not be added at the Primitive layer.

## Exception Handling

Approved exceptions are allowed when:
- there is a real product or brand need
- the exception is explicit
- the exception is documented
- the exception is preserved during refactors

The current example is documented in [exceptions.md](./exceptions.md).

## LLM Readiness

Load this file for any task that:
- changes token mappings
- introduces a new token layer
- questions whether a value belongs in Primitive, Semantic, or Theme
- may accidentally bypass aliasing rules
