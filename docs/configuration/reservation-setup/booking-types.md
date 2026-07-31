---
sidebar_position: 6
---

# Booking Types

**Booking Types** are a lookup list that classifies how a reservation is confirmed — for example, Guaranteed or Non-guaranteed.

## Access

**Configuration → Reservation Setup → Booking Types**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. `GTD`, `NGTD`). |
| Name | Yes | Full name (e.g. Guaranteed, Non-guaranteed). |
| Sequence | No | Display order in dropdowns. |
| Allowed Hotel | No | Restricts the booking type to a specific hotel. Leave empty to make it available to all hotels. |

## How It Works

Booking type is selected when creating a reservation, and it is used in reservation and revenue reporting to distinguish how each booking is secured (e.g. whether it is held with a guarantee against no-shows).

Use **Import** to bulk-load booking types from an Excel file (download the template first via **Template**), and **Export** to download the current list. See [Bulk Import (Excel)](/general/bulk-import) for the full import workflow.

## Common FAQs

**Can a booking type be limited to one property?**
Yes — set **Allowed Hotel** on the booking type. Leave it blank to make it available at every hotel in the group.

## See also

- [Reservations](/operations/reservations/overview)
- [Reservation Types](/configuration/reservation-setup/reservation-types)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
