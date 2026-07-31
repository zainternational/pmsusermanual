---
sidebar_position: 3
---

# Transaction Code Sub-Groups

**Transaction Code Sub-Groups** provide an optional, finer level of grouping for [Transaction Codes](/configuration/cashiering-setup/transaction-codes), nested underneath a [Transaction Code Group](/configuration/cashiering-setup/transaction-code-groups). For example, a "Food & Beverage" group might be broken down into "Breakfast", "Room Service", and "Minibar" sub-groups.

## Access

**Configuration → Cashiering → Transaction Code Sub-Group**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the sub-group. |
| Name | Full name of the sub-group. |
| Sequence | Display order relative to other sub-groups. |
| Transaction Code Group | The parent [Transaction Code Group](/configuration/cashiering-setup/transaction-code-groups) this sub-group belongs to. |
| Hotel | Restricts the sub-group to a single property. Leave blank to apply it to all hotels. |

## Usage

A sub-group is optional — a transaction code can be assigned to a group without any sub-group. When used, sub-groups give finer-grained breakdowns on reports and folio layouts than the group alone provides, without needing to create additional top-level groups.

## Common FAQs

**Is a sub-group required when creating a transaction code?**
No, **Transaction Code Sub-Group** is optional on the Transaction Code form. It can be left blank if a finer breakdown isn't needed.

**Can I use the same sub-group under different groups?**
Each sub-group is linked to a single parent group. If the same breakdown is needed under multiple groups, create a separate sub-group for each parent group.

## See also

- [Transaction Code Groups](/configuration/cashiering-setup/transaction-code-groups)
- [Transaction Codes](/configuration/cashiering-setup/transaction-codes)
