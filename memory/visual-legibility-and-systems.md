# Visual Legibility And Systems

This file captures the broader design-system and graphic-design research that supports repeatable UI quality.

## Role

Use this file when a UI needs stronger:
- legibility
- hierarchy
- spacing discipline
- contrast
- responsive composition
- repeatable visual taste

## Source priority

For accessibility, legibility, and interaction basics, prefer official guidance over inspiration articles.

For visual taste and craft, use graphic-design publications as directional input, not as hard rules.

## Official references reviewed

- [Apple UI Design Dos and Don’ts](https://developer.apple.com/design/tips/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- [Apple Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- [Apple Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Material Design Accessibility](https://m1.material.io/usability/accessibility.html)
- [Material Design Responsive UI](https://m1.material.io/layout/responsive-ui.html)
- [Material Design Layout Principles](https://m1.material.io/layout/principles.html)
- [Material Design Color](https://m1.material.io/style/color.html)
- [W3C WCAG 2.2 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing)
- [W3C WCAG Contrast Minimum](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)
- [W3C WCAG Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [Atlassian Spacing](https://atlassian.design/foundations/spacing/)
- [Atlassian Applying Typography](https://atlassian.design/foundations/typography/applying-typography/)
- [Carbon 2x Grid](https://carbondesignsystem.com/elements/2x-grid/usage/)
- [NN/g: 5 Visual-design Principles in UX](https://www.nngroup.com/articles/principles-visual-design/)
- [W3Schools Accessibility Color Contrast](https://www.w3schools.com/accessibility/accessibility_color_contrast.php)
- [W3Schools Typography](https://www.w3schools.com/htmlcss/htmlcss_typography.asp)
- [W3Schools Responsive Design](https://www.w3schools.com/htmlcss/htmlcss_responsive_design.asp)

## Graphic and editorial references reviewed

- [Smashing Magazine: Building Better UI Designs With Layout Grids](https://www.smashingmagazine.com/2017/12/building-better-ui-designs-layout-grids/)
- [Smashing Magazine: How To Use Spaces In Web Design With Gestalt Principles](https://www.smashingmagazine.com/2019/04/spaces-web-design-gestalt-principles/)
- [Creative Review: AtkinsRéalis Precisely Assembled typography](https://www.creativereview.co.uk/atkinsrealis-precisely-assembled-typography/)
- [It’s Nice That: Solid typography can elevate the worst imagery](https://www.itsnicethat.com/articles/nick-losacco-graphic-design-200420)
- [It’s Nice That: Julia Whitechapel catalogue layout](https://www.itsnicethat.com/articles/julia-whitechapel-electronic-superhighway-catalogue-design-110216)
- [Eye on Design: Portada and digital serif legibility](https://eyeondesign.aiga.org/whoever-said-sans-serifs-were-the-most-legible-digital-typeface/)

## What the official systems agree on

### Hierarchy is structural before it is decorative

- Apple emphasizes clear visual hierarchy, alignment, readable layouts, and keeping controls close to the content they modify.
- Material treats typography, grids, space, scale, and color as structural tools for hierarchy and focus.
- Carbon explicitly ties good layout to hierarchy, scale, proportion, contrast, harmony, rhythm, and repetition.
- NN/g reduces visual design to a few fundamentals: scale, visual hierarchy, balance, contrast, and Gestalt.

### Spacing is a system, not a vibe

- Atlassian uses an 8px base unit and calls out that intentional spacing creates a more harmonious experience.
- Material uses baseline grids plus consistent margins and gutters to create continuity across breakpoints.
- W3Schools, while basic, reinforces the same implementation pattern: consistent spacing scales, `max-width`, fluid grids, and responsive typography.

### Legibility is a product requirement

- Apple explicitly warns against thin weights for small text and recommends layouts that adapt as text size grows.
- Atlassian recommends responsive text, proper heading levels, and ideal line lengths around 60-80 characters for English body copy.
- W3C sets hard floors for contrast and text-spacing resilience.

### Color must support meaning, not carry it alone

- Material says state changes should be noticeable and communicated with more than color alone.
- W3C requires contrast for both text and non-text UI elements.
- W3Schools provides useful implementation reminders for text on images and all interactive states, but W3C should remain the authority.

## Distilled rules for this repo

## Typography

- Limit the number of font families used within a page or surface.
- Avoid very thin weights for interface text.
- Treat body copy as the anchor and scale the hierarchy up and down from there.
- Use roughly 2-3 strongly differentiated text sizes per viewport before introducing more.
- Keep long-form line length around 60-80 characters when possible.
- Prefer comfortable line-height for reading surfaces. Around `1.5` is a strong default for body text.
- Use letter-spacing sparingly and mostly for uppercase labels, short metadata, or edge cases.
- Let typography carry most of the tone. Good type can do more than decoration.

## Layout

- Use a real grid or alignment spine, even when the UI appears minimal.
- Give the layout one dominant zone and quieter secondary zones.
- Use consistent margins and gutters, then vary section widths and grouping for hierarchy.
- Use `max-width` to preserve readability on large screens.
- Favor repeatable layout modules for consistency, then break rhythm deliberately where emphasis is needed.

## Spacing

- Use one spacing scale consistently.
- Tight spacing belongs inside tight groups.
- Larger spacing belongs between sections and layout regions.
- Comfortable density should be the default for docs, forms, onboarding, and narrative content.
- Compact density should be opt-in for tables, lists, and data-heavy views.
- Spacing should express grouping, not just neatness.

## Contrast and readability

- Normal body text should meet at least `4.5:1`.
- Large text can drop to `3:1`, but only when truly large.
- Non-text UI boundaries, focus indicators, and controls need enough contrast too.
- Check hover, focus, active, selected, disabled, and error states individually.
- Do not rely on color alone for status or validation.
- Text on images or gradients should be tested against the brightest and darkest relevant areas.

## Responsive readability

- Scale type and spacing together.
- Use relative units and fluid sizing where useful, but preserve hard minimums for readability.
- Start mobile-first.
- Reflow layouts instead of merely shrinking them.
- Let text containers grow when users override spacing and size preferences.

## Motion and materiality

- Motion should guide focus or explain transitions, not decorate every interaction.
- Use depth to distinguish planes or focus states, not as ambient frosting on every box.
- Surface treatments should help users understand where content lives and what acts on it.

## Graphic-design taste signals

- Strong typography can carry the whole composition.
- Negative space should clarify relationships, not merely make the page look premium.
- Precision in spacing and character makes a screen feel expensive.
- Hierarchy becomes elegant when indentation, alignment, and proportion are doing visible work.
- Minimalism is credible only when readability remains high.
- Expressive type belongs mostly in moments of emphasis, not in dense system content.

## Cars24 taste translation

For Cars24, the practical sweet spot is:

`editorial clarity inside a robust product grid`

That means:
- disciplined layout
- warm but sharp typography
- fewer container styles
- stronger margins
- better line lengths
- deliberate density choices
- restrained color emphasis

## Anti-patterns

- thin, low-contrast text on atmospheric backgrounds
- wide unbounded paragraphs on desktop
- using only color to signal states
- treating every state as equally loud
- repeated card containers instead of true grouping
- decorative motion with no informational value
- “minimal” screens with weak type and weak spacing

## LLM Readiness

Load this file when:
- evaluating legibility
- choosing density
- defining typography rules
- improving contrast and states
- translating visual taste into repeatable UI guardrails
