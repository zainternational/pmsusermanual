---
sidebar_position: 6
---

# Sources

**Sources** (also called Source Codes) identify where a reservation came from — the booking channel or origin. Each source belongs to a Source Group.

## Access

**Configuration → Rate Management → Source**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code used in reports (e.g. WEB, TA, WALK). |
| Name | Yes | Full name (e.g. Hotel Website, Travel Agent, Walk-in). |
| Source Group | Yes | The parent source group this source belongs to. |
| Sequence | No | Display order in dropdowns. |
| Active | Yes | Whether this source is available for selection on reservations. |

## Common Sources

| Short Code | Name | Group |
|-----------|------|-------|
| WEB | Hotel Website | Online |
| BDC | Booking.com | Online |
| EXP | Expedia | Online |
| TA | Travel Agent | Indirect |
| CORP | Corporate Direct | Direct |
| WALK | Walk-in | Direct |
| PHONE | Phone Reservation | Direct |
| GDS | GDS | Online |

## Usage

Sources are selected on the reservation form (Booking Info step). They appear in reservation reports for channel analysis and revenue attribution.

## See also

- [Source Groups](/docs/configuration/rate-setup/source-groups) — Parent grouping of source codes.
- [Rates](/docs/configuration/rate-setup/rates) — Rates can be restricted to specific sources.
- [Reservation Reports](/docs/operations/reports/reservation) — Filter by source and source group.
- [Rate Setup Overview](/docs/configuration/rate-setup/overview)
