---
sidebar_position: 5
---

# Night Audit Report

The **Night Audit Report** shows a list of all audit runs with their key metrics, and lets you drill into the details of a specific run — revenue summary, payment summary, reservation summary, and occupancy statistics.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or the [Reports Overview](/docs/operations/reports/overview) for how to run and export reports.
:::

## Access

From the sidebar, click **Report** → **Night Audit**.

## Filters

| Filter | Description |
|--------|-------------|
| Start Date / End Date | Filter the audit runs list by audit date range. |
| Status | Filter by audit run status: Pending, In Progress, Completed, Failed, Partial. |
| Select Audit Run | Select a specific audit run to view its detailed breakdown. |

Select an **Audit Run** from the dropdown to load the detail sections below the runs table.

## Audit Runs Table

The main table lists all audit runs matching the filters.

| Column | Description |
|--------|-------------|
| Audit Date | The business date that was closed. |
| Status | PENDING / IN_PROGRESS / COMPLETED / FAILED / PARTIAL. |
| Run By | Username of the person who ran the audit. |
| Total Rooms | Total rooms in the property on that date. |
| Occupied Rooms | Rooms occupied on that date. |
| Vacant Rooms | Rooms not occupied. |
| OOO Rooms | Rooms out of order. |
| Total Guests | In-house guest count. |
| Total Arrivals | Check-ins on that date. |
| Total Departures | Check-outs on that date. |
| Total Revenue | Gross revenue posted. |
| Total Payments | Total payments received. |
| Total Outstanding | Revenue minus payments. |
| Notes | Any notes on the run. |
| Error Message | Error details if the run failed. |

## Detail Sections (for selected audit run)

When you select an audit run, four detail sections load:

### Revenue Summary

Revenue breakdown by transaction code for the selected audit run.

| Column | Description |
|--------|-------------|
| Transaction Code | Short code and name. |
| Category | Transaction category (e.g. room, F&B, tax). |
| Count | Number of transactions posted. |
| Total Amount | Gross amount. |
| Voided Amount | Amount voided. |
| Net Amount | Total minus voided. |

### Payment Summary

Payment breakdown by payment code for the selected audit run.

| Column | Description |
|--------|-------------|
| Payment Code | Short code and name. |
| Count | Number of payments. |
| Total Amount | Gross payments. |
| Voided Amount | Amount voided. |
| Net Amount | Total minus voided. |
| Reference | FX or reference details (e.g. Cash USD). |

### Reservation Summary

All reservations included in the selected audit run.

| Column | Description |
|--------|-------------|
| Reservation ID | Reservation number. |
| Guest Name | Primary guest name. |
| Room Number | Assigned room. |
| Arrival Date | Check-in date. |
| Departure Date | Check-out date. |
| Status | Reservation status on the audit date. |
| Is Arrival | Whether the guest arrived on the audit date. |
| Is Departure | Whether the guest departed on the audit date. |
| Is In-House | Whether the guest was in-house on the audit date. |
| Rate Amount | Nightly rate. |
| Total Charges | Total charges on the folio. |
| Total Payments | Total payments on the folio. |
| Balance | Charges minus payments. |

### Occupancy Statistics

Per room type occupancy breakdown for the selected audit run.

| Column | Description |
|--------|-------------|
| Room Type | Room type name. |
| Total Rooms | Total rooms of this type. |
| Occupied Rooms | Occupied rooms of this type. |
| Occupancy % | Occupancy rate for this type. |
| Revenue | Revenue from this room type. |
| RevPAR | Revenue per available room. |

## Export

Use the export button (if available) to download as Excel or PDF.

## Common FAQs

**Why is the detail section empty after selecting an audit run?**
The audit run may be in PENDING or FAILED status and may not have generated summary data. Select a COMPLETED audit run to see full details.

**What is the difference between this report and the Night Audit Summary modal?**
The Night Audit Summary modal (accessed from the Night Audit page) shows the same data but also includes the Guest Ledger and No-Show Reservations tabs. This report page provides the same data in a printable/exportable format.

## See also

- [Night Audit](/docs/operations/night-audit) — Run night audit and view audit runs with the full summary modal.
- [Trial Balance Report](/docs/operations/reports/trial-balance) — Debit/credit balance per transaction code for an audit run.
- [Manager Report](/docs/operations/reports/manager-report) — Consolidated daily management summary.
- [Billing Report](/docs/operations/reports/billing) — Revenue and payment detail by date range.
- [Reports Overview](/docs/operations/reports/overview) — How to run and export reports.
