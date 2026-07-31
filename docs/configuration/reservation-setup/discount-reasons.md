---
sidebar_position: 15
---

# Discount Reasons

**Discount Reasons** are a lookup list of reasons used to justify a discount applied on a reservation or folio — for example, Loyalty Member, Corporate Rate, or Manager Approval.

## Access

**Configuration → Reservation Setup → Discount Reason**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. `LOYAL`, `MGRAPP`). |
| Name | Yes | Full name shown when applying a discount. |
| Sequence | No | Display order in dropdowns. |
| Allowed Hotel | No | Restricts the reason to a specific hotel. Leave empty to make it available to all hotels. |

## How It Works

When a discount is applied to a reservation or charge, the user selects a Discount Reason to record why the discount was given. This provides an audit trail and is used in reporting to review discounting activity.

Use **Import** to bulk-load discount reasons from an Excel file (download the template first via **Template**), and **Export** to download the current list. See [Bulk Import (Excel)](/general/bulk-import) for the full import workflow.

## Common FAQs

**Can a discount reason be limited to one property?**
Yes — set **Allowed Hotel** on the reason. Leave it blank to make it available at every hotel in the group.

## See also

- [Reservations](/operations/reservations/overview)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
