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
| Code | Abbreviated code (e.g. SVC, TAX10). |
| Description | Full name (e.g. Service Charge 10%, Government Tax). |
| Amount | Fixed charge amount. Leave blank if using a percentage instead. |
| Service Charge % | Percentage rate for the service charge (e.g. 10 for 10%). Leave blank if using a fixed Amount. |
| Tax % | Percentage rate for tax. Leave blank if no tax applies. |
| Transaction Codes | The [Transaction Code(s)](/configuration/cashiering-setup/transaction-codes) this service charge applies to. This is a multi-select — one service charge can be linked to several transaction codes at once, so the same service charge rule can automatically apply to, for example, both "Room Charge" and "Room Charge - Group" transaction codes. |
| Inclusive / Exclusive | Whether the posted price already includes service charge and tax (inclusive, so they are extracted from the total) or whether service charge and tax are calculated on top of the base price and added (exclusive). |
| Calculation Method | Controls the order in which service charge and tax are stacked. See [Calculation Method](#calculation-method) below. |
| Hotel | Restricts the service charge to a single property. Leave blank to apply it to **all hotels**. |
| Active | Whether the service charge is currently in use. Inactive service charges are not applied to new postings. |

:::note
There is no separate "Posting Rule" field. Which charges a service charge applies to is determined entirely by the **Transaction Codes** linked to it — when a billing item is posted using one of those transaction codes, the linked service charge rule is triggered.
:::

## Calculation Method

When both a service charge % and a tax % are configured, **Calculation Method** determines the order they are stacked in:

| Method | Behaviour |
|--------|-----------|
| Base + Service, then Tax | Service charge is calculated on the base amount first; tax is then calculated on (base + service charge). This is the default. |
| Base + Tax, then Service | Tax is calculated on the base amount first; service charge is then calculated on (base + tax). |
| Base Only | Both service charge and tax are calculated on the base amount only (they are not compounded on each other). |

The system also keeps a **Net Amount** value, which is calculated and stored automatically from the Amount, Service Charge %, Tax %, Inclusive setting, and Calculation Method whenever the service charge is saved. This is a system-maintained snapshot used for reporting and does not need to be entered manually.

## How It Works

When a charge is posted to a folio using a transaction code that is linked to a service charge, the system automatically calculates the service charge and tax and stores them as **Service Charge** and **Tax** amounts on that same billing item/line — they are not posted as separate line items on the folio. The [Billing (Guest Folio)](/operations/reservations/billing#transaction-table) transaction table shows both amounts as columns next to the item's Total Amount.

For example:
- Guest is charged 100 for room, posted with the "Room Charge" transaction code.
- A 10% service charge (Calculation Method: Base + Service, then Tax) is linked to the "Room Charge" transaction code.
- The single "Room Charge" line ends up with a Service Charge amount of 10 (and a Tax amount calculated on 110 if a tax % is also configured), rather than a second folio line.

## See also

- [Transaction Codes](/configuration/cashiering-setup/transaction-codes)
- [Cashiering Setup Overview](/configuration/cashiering-setup/overview)
