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
| Active | Whether this group is available for selection. |

## Relationship to Sources

Source groups are the parent of [Sources](/docs/configuration/rate-setup/sources). Each source code belongs to one source group. When filtering reports by source group, all source codes within that group are included.

## See also

- [Sources](/docs/configuration/rate-setup/sources) — Individual source codes that belong to a source group.
- [Rate Setup Overview](/docs/configuration/rate-setup/overview)
- [Reservation Reports](/docs/operations/reports/reservation)
