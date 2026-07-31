---
sidebar_position: 2
---

# Transaction Code Groups

**Transaction Code Groups** are the top-level grouping for [Transaction Codes](/configuration/cashiering-setup/transaction-codes) — for example, "Room", "Food & Beverage", "Tax", or "Payments". Every transaction code belongs to a group, and groups drive how charges roll up in reports and on the folio.

## Access

**Configuration → Cashiering → Transaction Code Group**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the group (e.g. ROOM, FB, TAX). |
| Name | Full name of the group. |
| Sequence | Display order relative to other groups. |
| Revenue | Marks this group as a revenue group, so transaction codes in it contribute to revenue totals in reports. |
| Payment | Marks this group as a payment group, distinguishing it from charge/revenue groups. |
| Wrapped | Controls whether the group's totals are wrapped (collapsed into a single summary line) in reports. |
| Hotel | Restricts the group to a single property. Leave blank to apply it to all hotels. |

## Usage

Transaction Code Groups are selected when creating a [Transaction Code](/configuration/cashiering-setup/transaction-codes), and are used to:
- Roll up charges by category on reports such as the Billing Report, Night Audit, and Trial Balance.
- Organize how charges are displayed and totaled on the folio.
- Distinguish revenue-generating groups from payment groups via the **Revenue** and **Payment** flags.

## Common FAQs

**What's the difference between a group and a sub-group?**
A group is the top-level category (e.g. "Food & Beverage"). A [Transaction Code Sub-Group](/configuration/cashiering-setup/transaction-code-sub-groups) is an optional finer breakdown within a group (e.g. "Breakfast", "Room Service" under "Food & Beverage").

**Can a group apply to only one hotel?**
Yes — set the **Hotel** field to restrict the group to a single property, or leave it blank to make it available to all hotels.

## See also

- [Transaction Code Sub-Groups](/configuration/cashiering-setup/transaction-code-sub-groups)
- [Transaction Codes](/configuration/cashiering-setup/transaction-codes)
