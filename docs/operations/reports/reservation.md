---
sidebar_position: 1
---

# Reservation Report

The **Reservation Report** shows all reservations matching the selected filters, with a summary of totals and breakdowns by market, source, and room type.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or the [Reports Overview](/docs/operations/reports/overview) for how to run and export reports.
:::

## Access

From the sidebar, click **Report** → **Reservation**.

## Filters

### Basic Filters

| Filter | Description |
|--------|-------------|
| Created From / To | Filter by the date the reservation was created. |
| Arrival From / To | Filter by arrival date range. |

### Advanced Filters

Click **Show Advanced** to reveal additional filters:

| Filter | Description |
|--------|-------------|
| Departure From / To | Filter by departure date range. |
| Status | Confirmed, In House, Checked Out, Cancelled, Waitlist. |
| Reservation Type | Filter by reservation type (e.g. Regular, Walk-In, Group). |
| Source | Filter by booking source. |
| Market | Filter by market segment. |
| Room Type | Filter by room type. |
| Travel Agent | Filter by travel agent profile. |
| Company | Filter by company profile. |
| Group ID | Filter by group booking ID. |

Use **Clear All** to reset all filters.

## Summary Cards

Above the table, summary cards show:

| Card | Description |
|------|-------------|
| Total Reservations | Count of all matching reservations. |
| Total Guests | Sum of adults across all reservations. |
| Total Rooms | Sum of rooms across all reservations. |
| Total Revenue | Sum of rate amounts. |
| Average Rate | Average nightly rate. |
| Average Nights | Average length of stay. |
| Confirmed | Count with status Confirmed/Reserved. |
| In House | Count currently checked in. |
| Checked Out | Count that have departed. |
| Cancelled | Count that were cancelled. |
| Waitlist | Count on waitlist. |

Breakdowns by **Market**, **Source**, and **Room Type** show count and revenue per segment.

## Report Table

Each row is one reservation. Columns:

| Column | Description |
|--------|-------------|
| ID | Reservation ID. |
| Guest | Guest name. |
| Arrival | Arrival date. |
| Departure | Departure date. |
| Nights | Length of stay. |
| Room Type | Room type name. |
| Room | Room number (if assigned). |
| Rate | Nightly rate amount. |
| Status | Reservation status. |
| Type | Reservation type. |
| Source | Booking source. |
| Market | Market segment. |
| Rooms | Number of rooms. |
| Adults | Number of adults. |

Click the expand arrow on any row to see additional details:
- Guest email and phone
- Rate code
- Origin, Purpose of Stay
- Travel Agent, Company
- Group ID and name
- Created date/time

Columns are sortable — click any column header to sort ascending/descending.

## Export

Use the export button (if available) to download as Excel or PDF.

## See also

- [Reservations](/docs/operations/reservations/overview) — Source of reservation data.
- [Reports Overview](/docs/operations/reports/overview) — How to run and export reports.
- [Frontdesk Report](/docs/operations/reports/frontdesk) — Arrivals, departures, and in-house for a specific business date.
