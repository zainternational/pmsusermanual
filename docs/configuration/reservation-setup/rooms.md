---
sidebar_position: 3
---

# Rooms

**Rooms** are the individual sellable units in the property. Each room belongs to a room type and floor, and is linked to a hotel in multi-property setups.

## Access

**Configuration → Reservation Setup → Rooms**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Room Number | Yes | The room identifier shown on folios, room plan, and reports (e.g. 101, 201A). |
| Room Type | Yes | The room type this room belongs to — from [Room Types](/docs/configuration/reservation-setup/room-types). |
| Room Class | No | Auto-derived from the room type's class. |
| Hotel | Yes | The hotel/property this room belongs to (multi-property). |
| Floor | No | The floor — from [Floor Plans](/docs/configuration/reservation-setup/floor-plans). Used for grouping in Room Plan and Room Chart. |
| Sequence | No | Display order within the floor/type. |
| Description | No | Optional notes about the room. |
| PM Room | No | If checked, this room is excluded from inventory counts (does not affect occupancy %). PM rooms can still have reservations, charges, and checkouts. |

## Room Limit

Each hotel has a **total rooms** limit set in Hotel Information. When you try to add a non-PM room that would exceed this limit, the system blocks the creation with an error. PM rooms do not count toward the limit.

## Common FAQs

**Why can't I add more rooms?**
The hotel has reached its maximum room limit (set in Hotel Information → Total Rooms). Either increase the limit or mark the new room as a PM room.

**What is a PM room?**
A PM (Property Management) room is excluded from inventory and occupancy calculations. Use it for rooms that are managed but not sold as regular inventory (e.g. owner's suite, staff room).

**Why doesn't a room appear in the Room Plan or Room Chart?**
Ensure the room has a Floor assigned. Rooms without a floor may not appear in floor-grouped views.

## See also

- [Room Types](/docs/configuration/reservation-setup/room-types)
- [Room Classes](/docs/configuration/reservation-setup/room-classes)
- [Floor Plans](/docs/configuration/reservation-setup/floor-plans)
- [Front Desk → Room Plan](/docs/operations/front-desk/room-plan)
- [Housekeeping → Room Chart](/docs/operations/housekeeping/room-chart)
