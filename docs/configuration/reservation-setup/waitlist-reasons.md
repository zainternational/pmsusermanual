---
sidebar_position: 17
---

# Waitlist Reasons

**Waitlist Reasons** are a lookup list of reasons a reservation is placed on the waitlist instead of being confirmed — for example, No Availability or Rate Not Approved.

## Access

**Configuration → Reservation Setup → Waitlist Reason**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code for the reason (e.g. `NOAVL`). |
| Name | Yes | Full label shown when placing a reservation on the waitlist. |
| Sequence | No | Display order in dropdowns and lists. |
| Allowed Hotel | No | Restricts the reason to a specific hotel. Leave empty to make it available to all hotels. |

## How It Works

When a reservation cannot be confirmed and is placed on the waitlist, the agent selects a Waitlist Reason to record why. This value is used when managing the waitlist and in related reporting, helping staff understand demand and follow up appropriately when inventory or rates become available.

Use **Import** to bulk-load waitlist reasons from an Excel file (download the template first via **Template**), and **Export** to download the current list. See [Bulk Import (Excel)](/general/bulk-import) for the full import workflow.

## Common FAQs

**Can a waitlist reason be limited to one property?**
Yes — set **Allowed Hotel** on the reason. Leave it blank to make it available at every hotel in the group.

## See also

- [Reservations](/operations/reservations/overview)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
