---
sidebar_position: 7
---

# Articles

**Articles** are predefined item/service descriptions — such as minibar items, laundry services, or spa treatments — that can be attached to a charge when it is posted in **Cashiering → Transaction**. They let a cashier post a standardized description and default price instead of typing free text every time.

## Access

**Configuration → Cashiering → Article**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the article. |
| Name | Full name of the article (e.g. "Minibar - Water", "Laundry - Shirt"). |
| Sequence | Display order in lists. |
| Transaction Code | The [Transaction Code](/configuration/cashiering-setup/transaction-codes) the article is normally posted against. Optional. |
| Default Price | The price pre-filled when the article is selected during posting. |
| Active | Whether the article is currently available for selection. Inactive articles no longer appear in posting screens. |
| Hotel | Restricts the article to a single property. Leave blank to apply it to all hotels. |

## Usage

When posting a charge, a cashier can optionally select an article to attach a standard description (and default price) to the transaction. Attached articles can also be used to filter results on the **Journal by Transaction** screen. Posting a charge with an article requires the `post_article` permission; viewing article details on a posted transaction requires the `view_article` permission.

## Common FAQs

**Why doesn't an article show up when posting a charge?**
Check that the article's **Active** flag is set, and that it is scoped to the correct **Hotel** (or left blank for all hotels).

**Can an article's price be overridden at posting time?**
The **Default Price** only pre-fills the amount; whether a cashier can change it at posting time depends on posting permissions.

## See also

- [Transaction Codes](/configuration/cashiering-setup/transaction-codes)
- [Cashiering → Transaction](/operations/cashiering/transaction)
