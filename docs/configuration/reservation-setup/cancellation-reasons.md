---
sidebar_position: 16
---

# Cancellation Reasons

**Cancellation Reasons** are required when cancelling a reservation. They provide a record of why the booking was cancelled for reporting and auditing purposes.

## Access

**Configuration → Reservation Setup → Cancellation Reason**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code (e.g. GR, NS, DUP). |
| Name | Full reason name (e.g. Guest Request, No Show, Duplicate Booking, Rate Not Available). |
| Sequence | Display order in the cancellation modal. |

## Common Examples

- Guest Request
- No Show
- Duplicate Booking
- Rate Not Available
- Property Request
- Force Majeure

## Usage

When a user cancels a reservation from the reservation detail or list, a modal appears requiring them to select a cancellation reason. If no reasons are configured, cancellation may be blocked.

## See also

- [Reservations → Cancellations](/docs/operations/reservations/cancellations)
- [Reservation Setup Overview](/docs/configuration/reservation-setup/overview)
