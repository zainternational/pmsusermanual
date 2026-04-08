---
sidebar_position: 11
---

# Market Groups

**Market Groups** are the top-level categories that group individual market codes. For example, a market group "Corporate" might contain market codes like "Corporate Negotiated", "Corporate Rack", and "Corporate Government".

## Access

**Configuration → Rate Management → Market Group**

## Fields

| Field | Description |
|-------|-------------|
| Name | The market group name (e.g. Corporate, Leisure, Government, Wholesale). |
| Short Code | Abbreviated code used in reports. |
| Active | Whether this group is available for selection. |

## Relationship to Markets

Market groups are the parent of [Markets](/docs/configuration/rate-setup/markets). Each market code belongs to one market group. When filtering reports by market group, all market codes within that group are included.

## See also

- [Markets](/docs/configuration/rate-setup/markets) — Individual market codes that belong to a market group.
- [Rate Setup Overview](/docs/configuration/rate-setup/overview)
- [Reservation Reports](/docs/operations/reports/reservation)
