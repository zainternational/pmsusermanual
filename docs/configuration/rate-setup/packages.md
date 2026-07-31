---
sidebar_position: 7
---

# Packages

**Packages** define a priced add-on (e.g. Bed & Breakfast, Airport Transfer, Spa Credit) that can be attached to a reservation, either bundled into the room rate or sold as a separate line item. Each package posts to the folio under a single transaction code.

## Access

**Configuration → Rate Setup → Package**

## Fields

| Field | Required | Description |
|-------|----------|--------------|
| Code | Yes | Short package code (e.g. BB, TRANSFER). Must be unique per hotel. |
| Name | Yes | Package name (e.g. Bed & Breakfast). |
| Price | Yes | The package price. |
| Currency | Auto | Not editable directly — automatically set from the selected hotel's default currency when **Hotel** is set. If no hotel is selected, the system default currency is used. |
| Start Date / End Date | Yes | Date range the package is valid for. End date must not be earlier than start date. |
| Transaction Code | No | The single transaction code this package posts under when charged to the folio. |
| Service Charge % | No | Service charge percentage applied to this package. If left blank, the transaction code's default service charge applies. Set this to override it per package. |
| Tax % | No | Tax percentage applied to this package. If left blank, the transaction code's default tax applies. Set this to override it per package. |
| Include in Rate | No | When enabled, the package amount is bundled into the room rate rather than shown as a separate charge. |
| Sell Separately | No | When enabled, the package can be added to a reservation independently of a rate plan, as a standalone chargeable item. |
| Hotel | No | Restricts the package to a specific hotel. Leave empty to make the package available to all hotels. Setting this also determines the package's currency (see Currency above). |
| Active | Yes | Whether the package is available for selection. |

## Notes

- **Currency follows the hotel, not manual entry.** If you change the **Hotel** field, the package's currency is automatically updated to that hotel's default currency on save.
- **Include in Rate** and **Sell Separately** are independent toggles — a package can be marked as both, neither, or either one, depending on how it should be offered.
- A package code only needs to be unique within the same hotel; the same code can be reused across different hotels.

## Common FAQs

**The package isn't posting under the currency I expect.**
Check the **Hotel** field on the package — currency is derived from the hotel's default currency, not set independently. Clear the hotel field to fall back to the system default currency.

**Can a package have a different tax or service charge than its transaction code?**
Yes — set **Service Charge %** and/or **Tax %** on the package itself to override the transaction code's defaults for that package only.

## See also

- [Transaction Codes](/configuration/cashiering-setup/transaction-codes) — The code a package posts under.
- [Rate Setup Overview](/configuration/rate-setup/overview)
- [Currencies](/configuration/rate-setup/currencies) — Hotel default currency, which packages inherit.
