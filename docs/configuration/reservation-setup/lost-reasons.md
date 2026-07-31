---
sidebar_position: 18
---

# Reservation Lost Reasons

**Reservation Lost Reasons** record why a prospective reservation was lost — e.g. the guest did not book, went to a competitor, or the requested rate/room was unavailable. They give sales and reservations teams a way to track and report on lost business.

## Access

**Configuration → Reservation Setup → Reservation Lost Reason**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the lost reason (e.g. PRICE, COMP, NOAVAIL). |
| Name | Full description of the reason (e.g. Price Too High, Booked with Competitor, No Availability). |
| Sequence | Display order in the selection dropdown. |
| Active | Whether the reason is available for selection. |
| Allow Hotel | Restricts the reason to a specific hotel; leave empty to apply to all hotels. |

## Common Examples

- Price Too High
- Booked with Competitor
- No Availability
- Guest Changed Plans
- Requested Room Type Not Available

## Usage

When a reservation is marked as lost (for example, a tentative or inquiry-stage booking that did not convert), the user selects a lost reason from the configured list. This is captured for lost-business reporting and revenue analysis.

## Troubleshooting

- **Reason not appearing in the dropdown** — confirm it is marked Active and, if hotel-scoped, that it is configured for the current hotel.
- **Cannot find a suitable reason** — add a new one via **Configuration → Reservation Setup → Reservation Lost Reason** rather than reusing an unrelated code, to keep lost-business reports accurate.

## See also

- [Reservation Refused Reasons](/configuration/reservation-setup/refused-reasons)
- [Cancellation Reasons](/configuration/reservation-setup/cancellation-reasons)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
