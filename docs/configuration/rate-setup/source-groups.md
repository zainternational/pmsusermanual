---
sidebar_position: 12
---

# Source Groups

**Source Groups** are the top-level categories that group individual source codes. For example, a source group "Online" might contain source codes like "Booking.com", "Expedia", and "Hotel Website".

## Access

**Configuration → Rate Management → Source Group**

## Fields

| Field | Description |
|-------|-------------|
| Name | The source group name (e.g. Online, Direct, GDS, Wholesale). |
| Short Code | Abbreviated code used in reports. |
| Sequence | Display order. |

:::note
There is no Active/Inactive field on a Source Group.
:::

## Relationship to Sources

Source groups are the parent of [Sources](/configuration/rate-setup/sources). Each source code belongs to one source group. When filtering reports by source group, all source codes within that group are included.

## See also

- [Sources](/configuration/rate-setup/sources) — Individual source codes that belong to a source group.
- [Rate Setup Overview](/configuration/rate-setup/overview)
- [Reservation Reports](/operations/reports/reservation)
