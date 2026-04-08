---
sidebar_position: 4
---

# Reservation Types

**Reservation Types** classify bookings and control which fields are required when creating a reservation. Examples: Regular, Walk-In, Group, Complimentary, House Use.

## Access

**Configuration → Reservation Setup → Reservation Type**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. REG, WI, GRP). Walk-In types should use `WI` or `WALK` for the Room Chart walk-in feature to work. |
| Name | Yes | Full name (e.g. Regular, Walk-In, Group). |
| Sequence | No | Display order in dropdowns. |
| Inactive | No | Mark as inactive to hide from reservation forms. |

## Behaviour Flags

These flags control what is required when a reservation of this type is created:

| Flag | Effect |
|------|--------|
| Arrival Time Required | The ETA (Estimated Time of Arrival) field becomes mandatory on the reservation form. |
| Credit Card Required | The credit card number field becomes mandatory. |
| Deposit Required | The deposit amount field becomes mandatory. |
| Phone Required | The guest phone number field becomes mandatory. |
| Detach Inventory | When checked, reservations of this type do not consume room inventory (e.g. House Use, Complimentary). |

## Walk-In Type

For the **Room Chart** walk-in feature to work, create a reservation type with short code `WI` or `WALK`. When a user clicks **Walk-In** on a vacant room in the Room Chart, the new reservation form opens with this type pre-selected.

## Common FAQs

**Why is the deposit field greyed out on a reservation?**
The selected reservation type does not have **Deposit Required** enabled. Enable it on the reservation type if deposits should be collected for that type.

**Why does the Room Chart not show a Walk-In button?**
No reservation type with short code `WI` or `WALK` exists. Create one in this screen.

## See also

- [Reservations → List](/docs/operations/reservations/list) — Reservation form uses these types.
- [Housekeeping → Room Chart](/docs/operations/housekeeping/room-chart) — Walk-In uses the WI/WALK type.
- [Reservation Setup Overview](/docs/configuration/reservation-setup/overview)
