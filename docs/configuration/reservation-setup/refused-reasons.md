---
sidebar_position: 19
---

# Reservation Refused Reasons

**Reservation Refused Reasons** record why a requested reservation was refused or declined — for example when the hotel could not accommodate a guest's request. They give a record of turned-away business for reporting.

## Access

**Configuration → Reservation Setup → Reservation Refused Reason**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the refused reason (e.g. NOAVAIL, CREDIT, POLICY). |
| Name | Full description of the reason (e.g. No Availability, Credit Declined, Against Policy). |
| Sequence | Display order in the selection dropdown. |
| Active | Whether the reason is available for selection. |
| Allow Hotel | Restricts the reason to a specific hotel; leave empty to apply to all hotels. |

## Common Examples

- No Availability
- Credit Declined
- Against Hotel Policy
- Group Block Restriction
- Guest on Restricted List

## Usage

When a requested reservation is declined rather than confirmed, the user selects a refused reason from the configured list. This is captured for reporting on turned-away demand, separate from reservations that are later cancelled after being confirmed.

## Troubleshooting

- **Reason not listed** — confirm it is Active and available for the current hotel.
- **Refused vs. Cancelled** — use Refused Reasons for requests never confirmed, and [Cancellation Reasons](/configuration/reservation-setup/cancellation-reasons) for bookings cancelled after confirmation.

## See also

- [Reservation Lost Reasons](/configuration/reservation-setup/lost-reasons)
- [Cancellation Reasons](/configuration/reservation-setup/cancellation-reasons)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
