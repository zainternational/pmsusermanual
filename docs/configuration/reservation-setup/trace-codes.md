---
sidebar_position: 12
---

# Trace Codes

**Trace Codes** classify internal traces (follow-up notes or tasks) attached to a reservation or guest profile — for example a callback reminder, a special-request follow-up, or a billing check. They let staff categorize and filter traces for reporting and workflow.

## Access

**Configuration → Reservation Setup → Trace Code**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the trace type (e.g. CALLBACK, BILLING, VIP). |
| Name | Full name of the trace type (e.g. Callback Guest, Billing Follow-up, VIP Arrival Check). |
| Sequence | Display order in the selection dropdown. |
| Active | Whether the trace code is available for selection. |
| Allow Hotel | Restricts the trace code to a specific hotel; leave empty to apply to all hotels. |

## Common Examples

- Callback Guest
- Billing Follow-up
- VIP Arrival Check
- Special Request Follow-up
- Housekeeping Note

## Usage

When a trace (a follow-up note or task) is added to a reservation, the user selects a trace code to categorize it. Trace codes make it possible to filter and report on outstanding traces by type.

## Troubleshooting

- **Trace code missing from the dropdown** — confirm it is Active and, if hotel-scoped, configured for the current hotel.
- **Too many overlapping codes** — keep the list focused; overly granular trace codes make trace reports harder to scan.

## See also

- [Reservation Setup Overview](/configuration/reservation-setup/overview)
