---
sidebar_position: 9
---

# Service Charges

**Service Charges** define automatic charges that are added on top of eligible billing items. For example, a 10% service charge applied to all room charges, or a 5% tax on food & beverage.

## Access

**Configuration → Cashiering → Service Charges**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code (e.g. SVC, TAX10). |
| Name | Full name (e.g. Service Charge 10%, Government Tax). |
| Sequence | Display order. |
| Percentage / Amount | The charge rate (percentage) or fixed amount to apply. |
| Transaction Code | The transaction code used to post the service charge to the folio. |
| Posting Rule | Which charges this service charge applies to (e.g. room charges, F&B, all). |
| Inclusive / Exclusive | Whether the service charge is included in the posted amount (inclusive) or added on top (exclusive). |

## How It Works

When a charge is posted to a folio using a transaction code that has a service charge rule, the system automatically calculates and posts the service charge as a separate line item using the linked transaction code.

For example:
- Guest is charged 100 for room.
- A 10% service charge rule applies to room charges.
- The system automatically posts an additional 10 service charge line.

## See also

- [Transaction Codes](/docs/configuration/cashiering-setup/transaction-codes)
- [Cashiering Setup Overview](/docs/configuration/cashiering-setup/overview)
