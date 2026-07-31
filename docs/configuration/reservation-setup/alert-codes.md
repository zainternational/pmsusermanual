---
sidebar_position: 14
---

# Alert Codes

**Alert Codes** are a lookup list of alerts or flags that can be attached to a reservation to draw staff attention — for example, VIP Watch, Do Not Rent, or Security Concern.

## Access

**Configuration → Reservation Setup → Alert Code**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code for the alert (e.g. `VIPW`, `DNR`). |
| Name | Yes | Full label shown when attaching the alert. |
| Sequence | No | Display order in dropdowns and lists. |
| Allowed Hotel | No | Restricts the alert code to a specific hotel. Leave empty to make it available to all hotels. |

## How It Works

Alert codes set up here become available to attach to individual reservations. Staff can attach or remove an alert on a reservation so that anyone viewing it — front desk, housekeeping, or management — is aware of important information at a glance. See [All Reservations → Alerts](/operations/reservations/list#alerts) for how staff attach or remove an alert on a reservation.

Use **Import** to bulk-load alert codes from an Excel file (download the template first via **Template**), and **Export** to download the current list. See [Bulk Import (Excel)](/general/bulk-import) for the full import workflow.

## Common FAQs

**Can an alert code be limited to one property?**
Yes — set **Allowed Hotel** on the alert code. Leave it blank to make it available at every hotel in the group.

## See also

- [Reservations → List](/operations/reservations/list)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
