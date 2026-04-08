---
sidebar_position: 7
---

# Packages

**Packages** bundle a room rate with additional inclusions (e.g. breakfast, airport transfer, spa credit). When a package rate is selected on a reservation, the included items are posted to the folio automatically.

## Access

**Configuration → Rate Management → Package**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. BB, HB, FB, ROM). |
| Name | Yes | Package name (e.g. Bed & Breakfast, Half Board, Full Board, Romance Package). |
| Description | No | Details of what is included. |
| Transaction Codes | Yes | The transaction codes that make up the package (e.g. room charge + breakfast charge). Each code has an amount or percentage. |
| Valid From / To | No | Date range the package is available. |
| Active | Yes | Whether the package is available for selection. |

## How Packages Work

When a reservation uses a package rate:
1. The room charge is posted as normal.
2. The package inclusions (e.g. breakfast) are posted as separate line items on the folio using the configured transaction codes.
3. The package amount is split between the room and inclusion transaction codes for reporting purposes.

This means revenue is correctly attributed — room revenue goes to the room transaction code, F&B revenue goes to the breakfast transaction code.

## Common Package Types

| Short Code | Name | Inclusions |
|-----------|------|-----------|
| RO | Room Only | Room charge only |
| BB | Bed & Breakfast | Room + breakfast |
| HB | Half Board | Room + breakfast + dinner |
| FB | Full Board | Room + all meals |
| AI | All Inclusive | Room + all meals + beverages |

## Common FAQs

**The package inclusions are not posting to the folio.**
Ensure the package transaction codes are active and the package is linked to the rate plan used on the reservation.

**Can a package have a different price per room type?**
Yes — packages are linked to rate plans, and rate plans are defined per room type. Set different amounts per room type in the rate setup.

## See also

- [Rates](/docs/configuration/rate-setup/rates) — Link packages to rate plans.
- [Transaction Codes](/docs/configuration/cashiering-setup/transaction-codes) — The codes used for package inclusions.
- [Rate Setup Overview](/docs/configuration/rate-setup/overview)
