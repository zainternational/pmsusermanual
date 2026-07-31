---
sidebar_position: 5
---

# Markets

**Markets** identify the market segment a reservation belongs to (e.g. Corporate, Leisure, Government, OTA). Each market can optionally belong to a Market Group for higher-level reporting rollups.

## Access

**Configuration → Rate Management → Market**

## Fields

| Field | Required | Description |
|-------|----------|--------------|
| Short Code | Yes | Abbreviated code used in reports (e.g. CORP, LEIS). |
| Name | Yes | Full name (e.g. Corporate, Leisure). |
| Market Group | No | The parent market group this market rolls up to, for reporting. |
| Sequence | No | Display order in dropdowns. |
| Active | Yes | Whether this market is available for selection on reservations. |

## Usage

Markets are selected on the reservation form (Stay Information section) and can be used to restrict a [Rate](/configuration/rate-setup/rates) to a specific market. They appear in reservation reports for market-segment analysis and revenue attribution.

## See also

- [Market Groups](/configuration/rate-setup/market-groups) — Parent grouping of market codes.
- [Sources](/configuration/rate-setup/sources) — The companion "where the booking came from" classification.
- [Rates](/configuration/rate-setup/rates) — Rates can be restricted to specific markets.
- [Rate Setup Overview](/configuration/rate-setup/overview)
