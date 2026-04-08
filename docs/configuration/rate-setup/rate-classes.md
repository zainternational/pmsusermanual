---
sidebar_position: 2
---

# Rate Classes

**Rate Classes** are the broadest grouping of rates (e.g. BAR, Corporate, Package). They sit above Rate Categories in the hierarchy.

## Access

**Configuration → Rate Management → Rate Class**

## Rate Hierarchy

```
Rate Class → Rate Category → Rate Plan → Rate (per room type + date range)
```

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code used in reports (e.g. BAR, CORP, PKG). |
| Name | Yes | Full name (e.g. Best Available Rate, Corporate, Package). |
| Sequence | No | Display order in dropdowns. |

## Common Rate Classes

| Short Code | Name |
|-----------|------|
| BAR | Best Available Rate |
| CORP | Corporate |
| PKG | Package |
| GOV | Government |
| COMP | Complimentary |
| PROMO | Promotional |

## See also

- [Rate Categories](/docs/configuration/rate-setup/rate-categories) — Finer grouping within a class.
- [Rates](/docs/configuration/rate-setup/rates) — Individual rate plans linked to a class and category.
- [Rate Setup Overview](/docs/configuration/rate-setup/overview)
