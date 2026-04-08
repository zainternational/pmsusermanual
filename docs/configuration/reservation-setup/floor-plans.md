---
sidebar_position: 8
---

# Floor Plans

**Floor Plans** define the floors of your property. Rooms are assigned to a floor, which controls how they are grouped in the Room Plan, Room Chart, and housekeeping views.

## Access

**Configuration → Reservation Setup → Floor Plan**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. G, 1F, 2F, B1). |
| Name | Yes | Floor name (e.g. Ground Floor, 1st Floor, 2nd Floor, Basement). |
| Sequence | Yes | Display order — controls the top-to-bottom order of floors in the Room Plan and Room Chart. |

## Usage

Once floors are created, assign each room to a floor in **Configuration → Reservation Setup → Rooms**. Rooms without a floor assigned may not appear in floor-grouped views.

## Common Floor Plans

| Short Code | Name | Sequence |
|-----------|------|----------|
| B1 | Basement | 1 |
| G | Ground Floor | 2 |
| 1F | 1st Floor | 3 |
| 2F | 2nd Floor | 4 |
| 3F | 3rd Floor | 5 |

## Common FAQs

**Rooms are not showing in the Room Plan or Room Chart.**
Ensure each room has a floor assigned. Go to **Configuration → Reservation Setup → Rooms** and set the Floor field for each room.

**How do I change the order floors appear in the Room Plan?**
Adjust the **Sequence** number on each floor. Lower sequence numbers appear first (top of the grid).

## See also

- [Rooms](/docs/configuration/reservation-setup/rooms) — Assign rooms to floors.
- [Front Desk → Room Plan](/docs/operations/front-desk/room-plan) — Calendar grid grouped by floor.
- [Housekeeping → Room Chart](/docs/operations/housekeeping/room-chart) — Floor-by-floor room status grid.
- [Reservation Setup Overview](/docs/configuration/reservation-setup/overview)
