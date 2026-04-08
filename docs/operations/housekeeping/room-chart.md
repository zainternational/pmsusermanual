---
sidebar_position: 7
---

# Room Chart

The **Room Chart** gives a visual, floor-by-floor snapshot of all rooms and their current status for a selected date. It is used for quick room assignment, walk-in check-ins, and housekeeping status review.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or [Housekeeping Overview](/docs/operations/housekeeping/overview) for housekeeping-related issues.
:::

## Access

From the sidebar: **Housekeeping** → **Room Chart**.

## Filters

| Filter | Description |
|--------|-------------|
| Date | The date to view room status for. Defaults to the current business date. |
| Room Type | Filter to show only rooms of a specific type. |
| Floor | Filter to show only a specific floor. |
| Status | Filter by housekeeping status (e.g. Vacant Clean, Occupied, Out of Order). |

Use the **Refresh** button to reload the latest data.

## Room Grid

Rooms are displayed in a grid grouped by floor. Each room tile shows:

- Room number
- Room type
- Housekeeping status (colour-coded)
- Reservation status if occupied (e.g. in-house guest name)

### Status Colours

Colours follow your property's housekeeping status configuration. Typical colours:

| Status | Meaning |
|--------|---------|
| Vacant Clean (VC) | Room is empty and clean — ready to assign |
| Vacant Dirty (VD) | Room is empty but not yet cleaned |
| Occupied Clean (OC) | Guest in-house, room cleaned |
| Occupied Dirty (OD) | Guest in-house, room not yet cleaned |
| Out of Order (OOO) | Room not available for sale |
| Out of Service (OOS) | Room temporarily unavailable |

## Summary Bar

Above the grid, a summary shows counts per status category for the selected date and filters.

## Clicking a Room

- **Occupied room** — Opens a reservation detail modal showing the current guest, stay dates, and folio summary.
- **Vacant Clean room** — Opens a quick action modal with options to:
  - **New Reservation** — Navigate to the new reservation form pre-filled with the room and arrival date.
  - **Walk-In** — Navigate to the new reservation form with the Walk-In reservation type pre-selected.

## Common FAQs

**Why does a room show the wrong status?**
Room status is updated by housekeeping staff from the Room Status screen. If a room was cleaned but not updated, ask housekeeping to update the status. Night audit may also update statuses automatically.

**I clicked a vacant room but the Walk-In option is missing.**
Walk-In requires a reservation type with the code `WI` or `WALK` to be configured. Ask your administrator to add a Walk-In reservation type in Configuration → Reservation Setup → Reservation Types.

**The room chart is empty.**
Ensure rooms are configured in Configuration → Reservation Setup → Rooms, and that the selected date and filters are correct.

## See also

- [Room Status](/docs/operations/housekeeping/room-status) — Update individual room housekeeping status.
- [Room Plan](/docs/operations/front-desk/room-plan) — Calendar-based room availability view used for reservations.
- [Out of Order](/docs/operations/housekeeping/out-of-order) — Mark rooms as out of order or out of service.
- [Reservations](/docs/operations/reservations/overview) — Create and manage reservations.
