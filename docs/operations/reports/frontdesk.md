---
sidebar_position: 2
---

# Frontdesk Report

The **Frontdesk Report** shows a snapshot of front-desk activity for a selected business date: arrivals, departures, in-house guests, and room status.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or the [Reports Overview](/docs/operations/reports/overview) for how to run and export reports.
:::

## Access

From the sidebar, click **Report** → **Frontdesk**.

## Filter

| Filter | Description |
|--------|-------------|
| Business Date | The date to report on. Defaults to the current business date. |

## Summary

At the top, a summary shows:
- Arrivals count — reservations arriving on the selected date
- Departures count — reservations departing on the selected date
- In-House count — reservations currently checked in on the selected date

## Report Sections

The report is divided into four sections:

### Arrivals

Reservations with arrival date matching the selected business date.

| Column | Description |
|--------|-------------|
| Reservation ID | Reservation number. |
| Guest Name | Primary guest name. |
| Phone | Guest phone number. |
| Arrival Date | Check-in date. |
| Departure Date | Check-out date. |
| Nights | Length of stay. |
| Room Number | Assigned room (if any). |
| Room Type | Room type name. |
| Rate Amount | Nightly rate. |
| Status | Reservation status. |
| Type | Reservation type. |
| Adults | Number of adults. |

### Departures

Reservations with departure date matching the selected business date.

| Column | Description |
|--------|-------------|
| Reservation ID | Reservation number. |
| Guest Name | Primary guest name. |
| Room Number | Assigned room. |
| Room Type | Room type name. |
| Arrival Date | Original check-in date. |
| Departure Date | Check-out date. |
| Nights | Length of stay. |
| Rate Amount | Nightly rate. |
| Status | Reservation status. |
| Adults | Number of adults. |

### In-House

Reservations currently checked in on the selected business date (arrival ≤ date < departure).

| Column | Description |
|--------|-------------|
| Reservation ID | Reservation number. |
| Guest Name | Primary guest name. |
| Phone | Guest phone number. |
| Room Number | Assigned room. |
| Room Type | Room type name. |
| Arrival Date | Check-in date. |
| Departure Date | Expected check-out date. |
| Nights | Length of stay. |
| Rate Amount | Nightly rate. |
| Status | Reservation status. |
| Adults | Number of adults. |

### Room Status

Current housekeeping status of all rooms.

| Column | Description |
|--------|-------------|
| Room Number | Room number. |
| Room Type | Room type name. |
| Floor | Floor name. |
| FO Status | Front office status (Vacant / Occupied). |
| Room Status | Housekeeping status (Clean, Dirty, Inspected, Pickup, OOO, OOS). |
| Reservation Status | Whether the room is reserved, checked in, etc. |

## Export

Use the export button (if available) to download as Excel or PDF.

## See also

- [Front Desk](/docs/operations/front-desk/overview) — Room plan, in-house list, checked-out list.
- [Reservation Report](/docs/operations/reports/reservation) — Full reservation list with advanced filters.
- [Reports Overview](/docs/operations/reports/overview) — How to run and export reports.
