---
sidebar_position: 8
---

# Manager Report

The **Manager Report** is a consolidated daily summary for management, built from a night audit run. It shows occupancy, revenue, payments, outstanding balances, and breakdowns by transaction code, payment type, and room type.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or the [Reports Overview](/docs/operations/reports/overview) for how to run and export reports.
:::

## Access

From the sidebar, click **Report** → **Manager Report**.

## Filters

| Filter | Description |
|--------|-------------|
| Audit Date | Enter a date to automatically find the latest audit run for that day. |
| Audit Run | Or select a specific audit run directly from the dropdown. |

Either filter can be used. If both are set, the audit run takes precedence.

## What the Report Shows

### Summary Header

| Field | Description |
|-------|-------------|
| Audit Date | The business date of the selected audit run. |
| Total Rooms | Total number of rooms in the property. |
| Occupied Rooms | Rooms occupied on the audit date. |
| Vacant Rooms | Rooms not occupied. |
| Out of Order Rooms | Rooms marked out of order. |
| Occupancy % | Occupied ÷ Total rooms × 100. |
| Total Guests | Number of in-house guests on the audit date. |
| Total Arrivals | Check-ins on the audit date. |
| Total Departures | Check-outs on the audit date. |
| Total Revenue | Gross revenue posted on the audit date. |
| Total Payments | Total payments received. |
| Total Outstanding | Revenue minus payments (open balance). |

### Revenue Summary

Breakdown of revenue by transaction code:

| Column | Description |
|--------|-------------|
| Transaction Code | Short code and name. |
| Category | Transaction category (e.g. room, food, other). |
| Count | Number of transactions posted. |
| Total Amount | Gross amount posted. |
| Voided Amount | Amount voided. |
| Net Amount | Total minus voided. |

### Payment Summary

Breakdown of payments by payment code:

| Column | Description |
|--------|-------------|
| Payment Code | Short code and name. |
| Count | Number of payments. |
| Total Amount | Gross payments received. |
| Voided Amount | Amount voided. |
| Net Amount | Total minus voided. |

### Occupancy Statistics

Per room type breakdown:

| Column | Description |
|--------|-------------|
| Room Type | Name of the room type. |
| Total Rooms | Rooms of this type. |
| Occupied Rooms | Occupied rooms of this type. |
| Available Rooms | Available (not occupied, not OOO). |
| Out of Order | OOO rooms of this type. |
| Occupancy % | Occupancy rate for this type. |
| Average Rate | Average room rate for occupied rooms. |
| Revenue | Total revenue from this room type. |
| RevPAR | Revenue per available room. |

## Export

Use the export button (if available) to download as Excel or PDF for management review or owner reporting.

## Common FAQs

**Why is the report empty?**
Select an audit date or audit run. If no data appears, night audit may not have been run for that date, or the run may be incomplete.

**Why does occupancy % show as blank?**
Occupancy percentage is only calculated when total rooms > 0. Ensure rooms are configured in the system.

**Where does the revenue data come from?**
Revenue and payment data is captured during the night audit run from billing items and payments posted on that business date.

## See also

- [Night Audit](/docs/operations/night-audit) — Run night audit; the manager report is built from audit run data.
- [Trial Balance Report](/docs/operations/reports/trial-balance) — Detailed debit/credit breakdown by transaction code.
- [Billing Reports](/docs/operations/reports/billing) — Revenue and payment detail by date range.
- [Reports Overview](/docs/operations/reports/overview) — How to run and export reports.
