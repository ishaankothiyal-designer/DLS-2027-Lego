# Exceptions

This file records approved token exceptions that must not be normalized away.

## Current Approved Exceptions

### CarInfo `brand.alt.500`

- token: `theme.brand.alt.500`
- brand: `CarInfo`
- current mapping: `teal/950`
- status: intentional

Reason:
- this darker alternate brand value is used in selected components where the alternate brand color needs to appear with stronger emphasis
- it is a brand-level exception, not a broken tonal mapping

Rule:
- preserve this mapping unless the brand system is explicitly redesigned

## Future Exception Format

For each exception, document:
- token name
- scope
- current value or alias
- reason
- whether it is temporary or durable
