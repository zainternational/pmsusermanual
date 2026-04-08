---
sidebar_position: 3
---

# Rate Categories

**Rate Categories** are a finer grouping within a Rate Class (e.g. Weekday, Weekend, Peak Season within the BAR class).

## Access

**Configuration → Rate Management → Rate Category**

## Rate Hierarchy

```
Rate Class → Rate Category → Rate Plan → Rate (per room type + date range)
```

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. WD, WE, PEAK). |
| Name | Yes | Full name (e.g. Weekday, Weekend, Peak Season). |
| Rate Class | Yes | The parent rate class this category belongs to. |
| Sequence | No | Display order in dropdowns. |

## Common Rate Categories

| Short Code | Name | Typical Class |
|-----------|------|--------------|
| WD | Weekday | BAR |
| WE | Weekend | BAR |
| PEAK | Peak Season | BAR |
| LOW | Low Season | BAR |
| NEGO | Negotiated | Corporate |

## See also

- [Rate Classes](/docs/configuration/rate-setup/rate-classes) — Parent grouping above categories.
- [Rates](/docs/configuration/rate-setup/rates) — Individual rate plans linked to a category.
- [Rate Setup Overview](/docs/configuration/rate-setup/overview)
