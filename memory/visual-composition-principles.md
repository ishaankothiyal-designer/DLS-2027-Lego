# Visual Composition Principles

This file translates the benchmark references into usable UI rules for space, layout, minimalism, and overall visual composition.

## Role

Use this file when designing or reviewing:
- Storybook documentation shells
- dashboards
- landing pages
- forms
- information-heavy screens
- component compositions

## Space

Space is not empty area.

It is the mechanism that tells users:
- what belongs together
- what matters first
- what can be ignored for now

### Working rules

- Keep tighter spacing inside a group than between groups.
- Let major sections breathe more than individual components.
- Use generous outer margins to create composure before adding decorative treatments.
- Default to comfortable density for documentation, onboarding, forms, and explanatory surfaces.
- Use tighter density only for tables, comparison views, or power-user workflows.
- When a page feels noisy, increase inter-group spacing before changing colors or typography.

### Practical checks

- If every card has the same gap above and below, the page will flatten.
- If headers are too close to surrounding sections, hierarchy disappears.
- If primary actions are not visually near the content they affect, the flow feels harder than it is.

## Layout

Layout should create a scan path before color and styling are added.

### Working rules

- Establish a clear content spine instead of letting blocks float.
- Use a consistent grid and align edges aggressively.
- Create one dominant zone per viewport and clearly secondary zones around it.
- Prefer asymmetrical balance over perfect symmetry when you need energy.
- Let section width reflect importance. Not everything needs the same max-width or the same box treatment.
- Use repetition for rhythm, then break that rhythm once for emphasis.

### Practical checks

- Squint at the page. The first thing you notice should be intentional.
- Remove all color mentally. The hierarchy should still read.
- If every section is boxed the same way, the page will feel templated instead of designed.

## Minimalism

Minimalism means reduction to the essentials.

It does not mean:
- low contrast
- low information
- empty space without purpose
- removing labels that improve clarity

### Working rules

- Every visual treatment should do one of three jobs: orient, emphasize, or brand.
- Prefer one main surface style and one secondary surface style per page.
- Use accent color sparingly so it retains meaning.
- Remove redundant borders, redundant shadows, and redundant labels before removing content.
- If a block can read without a container, do not force a container.
- Use decorative effects only where they strengthen mood or focus.

### Practical checks

- If everything looks premium, nothing does.
- If every surface has a gradient, shadow, and border, the page is overdesigned.
- If a section needs styling to feel important, its layout is probably underdoing the work.

## Hierarchy

Hierarchy should be legible in five seconds.

### Working rules

- Use typography, scale, alignment, and spacing before reaching for more color.
- Give one headline or data point enough size and contrast to anchor the screen.
- Keep support text visibly quieter than the primary message.
- Group metadata so it reads as support, not as competing content.
- Avoid more than three active emphasis levels in a single viewport.

## Typography

Typography is the primary carrier of authority in interface design.

### Working rules

- Start with the body text and build hierarchy outward from it.
- Limit the number of active text sizes in a viewport.
- Avoid very thin weights for UI copy.
- Use generous line-height for reading surfaces and tighter leading only for short labels or constrained UI.
- Keep long-form text within readable line lengths instead of letting it span the whole screen.
- Let type do more of the expressive work so the rest of the UI can stay quiet.

### Practical checks

- If headings and body feel too similar, hierarchy is underpowered.
- If every label is bold, bold no longer means anything.
- If a page only feels premium when imagery loads, the typography is underperforming.

## Legibility

Legibility is a baseline requirement, not a finishing pass.

### Working rules

- Body text should generally meet at least `4.5:1` contrast.
- Large display text may go lower, but only when size truly compensates.
- Keep text on images, gradients, and tinted surfaces under strict scrutiny.
- Allow content to survive user text-size and spacing changes.
- Prefer text over images of text wherever possible.

### Practical checks

- Test muted text on real backgrounds, not just neutral white.
- Check hover, focus, disabled, selected, and error states separately.
- If the interface depends on hairline weight and subtle gray, readability is probably fragile.

## Density

Density should be a product decision, not a side effect.

### Working rules

- Default to comfortable density for docs, forms, and explanatory content.
- Use compact density intentionally for data-heavy views only.
- Do not compress all surfaces equally; keep reading-heavy regions calmer than controls or tables.
- Scale spacing and typography together when density changes.

### Practical checks

- If a dense view feels hard to scan, improve grouping before shrinking text.
- If a comfortable view feels slow, improve hierarchy before tightening spacing.

## Materiality

Material cues are useful, but only when controlled.

### Working rules

- Use depth to separate focus from background, not to decorate every element.
- Keep radii consistent enough to feel intentional.
- Let surfaces feel tactile through contrast and proportion, not just through blur and shadow.
- If the brand wants warmth, soften edges and surfaces with discipline rather than adding playful clutter.

## Storybook-specific implications

- Storybook docs should read like product-grade documentation, not a generic template gallery.
- Documentation pages need clearer section rhythm than component showcase pages.
- Chips, badges, and accent fills should highlight state sparingly, not fill every header.
- Token cards should prioritize comparability and scanability over visual flourish.
- One atmospheric page background is enough. The rest of the page should rely on structure.

## Relationship to the token system

- Use `Theme` for brand tone.
- Use `Typography` for hierarchy and editorial texture.
- Use `Semantic` for contrast and state meaning.
- Use `Misc` gap and size foundations to establish rhythm until semantic spacing aliases exist.
- Avoid inventing local spacing or surface values just to make a layout feel better. Fix the composition first.

## Review checklist

- Is the primary reading path obvious within five seconds?
- Does the page have one dominant zone instead of several competing heroes?
- Is the spacing strategy doing real grouping work?
- Are accent color and depth being used sparingly enough to matter?
- Does the layout still feel strong if gradients and shadows are removed?
- Does the interface feel calm because of order, not because content was hidden?

## LLM Readiness

Load this file when:
- refining space and rhythm
- reviewing a visual refresh
- deciding between comfortable and compact density
- making a UI feel calmer, more premium, or easier to scan
