---
sidebar_position: 10
---

# Room Status

**Room Status** codes describe the current state of a room (e.g. Available, Out of Order, Blocked). They are separate from housekeeping status (clean/dirty) and are used to control whether a room can be sold or assigned to a reservation.

## Access

**Configuration → Reservation Setup → Room Status**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the status (e.g. AVL, OOO, BLK). |
| Name | Full name of the status (e.g. Available, Out of Order, Blocked). |
| Sequence | Display order in dropdowns and the Room Plan/Room Chart. |
| Hotel | The hotel this status applies to. Leave empty to apply it to all hotels (multi-property). |

## Common Room Statuses

| Short Code | Name |
|-----------|------|
| AVL | Available |
| OOO | Out of Order |
| OOS | Out of Service |
| BLK | Blocked |

## Usage

Room status is used in:
- **Room Plan / Room Chart** — Rooms are shown or filtered by their current status.
- **Reservation and room assignment** — Rooms with a non-sellable status (e.g. Out of Order) are excluded from availability when assigning a room to a reservation.
- **Front desk operations** — Staff update a room's status when it goes out of order or is returned to service.

## Common FAQs

**How is Room Status different from Housekeeping Status?**
Room Status reflects whether a room is sellable/usable (Available, Out of Order, Blocked). Housekeeping status tracks cleanliness (Clean, Dirty, Inspected) and is managed separately in housekeeping setup.

**A room isn't showing as available for booking. Why?**
Check its current Room Status — a room set to Out of Order or Blocked will not be offered during reservation and room assignment.

## See also

- [Rooms](/configuration/reservation-setup/rooms)
- [Front Desk → Room Plan](/operations/front-desk/room-plan)
- [Housekeeping → Room Chart](/operations/housekeeping/room-chart)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
