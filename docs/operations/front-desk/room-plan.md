---
sidebar_position: 1
---

# Room Plan

The **Room Plan** is a calendar-style grid showing all rooms and their occupancy across a date range. Use it to see availability at a glance, create new reservations by clicking on a room/date cell, and navigate to existing reservations.

:::tip **Having a problem?**
See [Troubleshooting](#troubleshooting) below or the main [Troubleshooting](/docs/general/troubleshooting) page.
:::

## Access

From the sidebar: **Front Desk** → **Room Plan**.

## Filters

| Filter | Description |
|--------|-------------|
| Start Date | The first date shown in the grid. Defaults to the current business date. |
| Days Display | Number of days to show across the grid (e.g. 7, 14, 30). |
| Floor From / Floor To | Filter to show only rooms on a specific floor range. |
| Room Type | Filter to show only rooms of a selected type. |
| Room Number | Filter to a specific room. |

Use the pagination controls if there are more rooms than fit on one page (default loads up to 500 rooms).

## The Grid

Rooms are listed as rows. Dates run across the columns. Each cell represents one room on one date.

**Cell colours indicate occupancy:**
- Green / empty — room is available on that date
- Occupied cell — shows the guest's first initial; hover for a tooltip with guest name, reservation ID, check-in, and check-out dates

**Room status indicators** (from housekeeping) are shown alongside each room row:
- VC — Vacant Clean
- VD — Vacant Dirty
- OC — Occupied Clean
- OD — Occupied Dirty
- OOO — Out of Order

Out-of-order rooms are highlighted separately and excluded from availability.

## Creating a Reservation from Room Plan

Click on an **available cell** (green) for a room and date. The new reservation form opens pre-filled with:
- Arrival date (the clicked date)
- Departure date (arrival + 1 night by default)
- Room number and room type
- ETA set to 09:00

Complete the remaining fields in the reservation form and save.

## Viewing an Existing Reservation

Click on an **occupied cell** to open the reservation detail modal, showing the guest name, stay dates, room, and status. From the modal you can navigate to the full reservation.

## Summary Cards

Above the grid, summary cards show counts for the displayed date range:
- Total rooms
- Occupied rooms
- Vacant rooms
- Out of order rooms
- Arrivals and departures for the period

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Room plan shows wrong date** | Start date filter is not set to today. | Change the Start Date filter. If your property uses a business date, ensure night audit has been run up to the date you need. |
| **Cannot create reservation from room plan** | You may not have permission to create reservations. | Ask your administrator to grant `add_reservation` permission. |
| **Room shows as occupied but guest has checked out** | Room status not updated after checkout. | Check the reservation status in In-House or Checked-Out. Room status updates automatically on checkout; if stale, refresh the page. |
| **Out-of-order room still shows as available** | OOO record may have ended or not been applied for those dates. | Check Housekeeping → Out of Order and ensure the record covers the dates in question. |

## See also

- [In-House](/docs/operations/front-desk/in-house) — Manage currently checked-in guests.
- [Housekeeping → Room Chart](/docs/operations/housekeeping/room-chart) — Visual floor-by-floor room status grid; walk-in from vacant rooms.
- [Reservations → Arrivals](/docs/operations/reservations/arrivals) — Guests arriving today.
- [Housekeeping → Out of Order](/docs/operations/housekeeping/out-of-order) — Mark rooms unavailable.
