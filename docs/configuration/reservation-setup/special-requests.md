---
sidebar_position: 9
---

# Special Requests

**Special Requests** are a lookup list of guest requests that can be attached to a reservation — for example, High Floor, Late Checkout, Extra Pillow, or Away From Elevator.

## Access

**Configuration → Reservation Setup → Special Requests**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code for the request (e.g. `HIFL`, `LATECO`). |
| Name | Yes | Full label shown on the reservation form (e.g. High Floor, Late Checkout). |
| Sequence | No | Display order in dropdowns and lists. |
| Allowed Hotel | No | Restricts the request to a specific hotel. Leave empty to make it available to all hotels. |

## How It Works

Special requests set up here become available as selectable items on the reservation form. Front office staff can attach one or more special requests to a reservation when booking or editing it, so that housekeeping and front desk teams know what to prepare for the guest's stay.

Use **Import** to bulk-load special requests from an Excel file (download the template first via **Template**), and **Export** to download the current list. See [Bulk Import (Excel)](/general/bulk-import) for the full import workflow.

## Common FAQs

**Can a request be limited to one property?**
Yes — set **Allowed Hotel** on the request. Leave it blank to make the request available at every hotel in the group.

**Where do special requests appear after being added to a reservation?**
They are shown on the reservation and are available to reporting and operational teams (e.g. housekeeping) for fulfilment.

## See also

- [Reservations](/operations/reservations/overview)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
