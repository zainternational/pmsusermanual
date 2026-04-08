---
sidebar_position: 3
---

# Billing Report

The **Billing Report** shows all billing items (charges) and payments for a selected date range, with a summary of total charges, total payments, and outstanding balance.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or the [Reports Overview](/docs/operations/reports/overview) for how to run and export reports.
:::

## Access

From the sidebar, click **Report** → **Billing**.

## Filters

| Filter | Description |
|--------|-------------|
| Start Date / End Date | Filter by the transaction created date range. |
| Business Date From / To | Filter by the business date the transaction was posted to. |
| Include Voided | Yes / No — whether to include voided charges and payments. Default: No. |

Use **Clear All** to reset all filters.

## Summary Cards

Above the tables, summary cards show:

| Card | Description |
|------|-------------|
| Total Items | Count of billing charge items. |
| Total Charges | Sum of all charge amounts. |
| Total Payments | Sum of all payment amounts. |
| Balance | Total Charges minus Total Payments (outstanding). |

A positive balance means charges exceed payments (guests owe money). A negative balance means payments exceed charges (overpayment/credit).

## Billing Items Table

Each row is one charge posted to a folio.

| Column | Description |
|--------|-------------|
| Reservation ID | The reservation the charge belongs to. |
| Folio Number | The folio number within the reservation. |
| Room Number | Room number (if assigned). |
| Guest Name | Primary guest name. |
| Transaction Code | Short code and name of the charge type. |
| Description | Charge description. |
| Quantity | Number of units. |
| Unit Price | Price per unit. |
| Total Amount | Quantity × Unit Price. |
| Service Charge | Service charge component. |
| Tax | Tax component. |
| Business Date | The business date the charge was posted to. |
| Posted Date | The date/time the charge was posted. |
| Voided | Whether the charge has been voided. |
| Arrival Date | Guest arrival date. |
| Departure Date | Guest departure date. |

## Billing Payments Table

Each row is one payment posted to a folio.

| Column | Description |
|--------|-------------|
| Reservation ID | The reservation the payment belongs to. |
| Folio Number | The folio number within the reservation. |
| Room Number | Room number (if assigned). |
| Guest Name | Primary guest name. |
| Payment Code | Short code and name of the payment type. |
| Amount | Payment amount. |
| Description | Payment description or reference. |
| Business Date | The business date the payment was posted to. |
| Posted Date | The date/time the payment was posted. |
| Voided | Whether the payment has been voided. |
| Arrival Date | Guest arrival date. |
| Departure Date | Guest departure date. |

## Export

Use the export button (if available) to download as Excel or PDF for accounting reconciliation.

## Common FAQs

**Why does the balance show a large positive number?**
The balance is total charges minus total payments across all reservations in the filter range. A large positive balance is normal if the date range includes many in-house guests who have not yet checked out and paid.

**Should I use Start Date or Business Date filters?**
- Use **Start Date / End Date** to filter by when the transaction was created (system timestamp).
- Use **Business Date From / To** to filter by the business date the transaction was posted to (the accounting date). Business date filtering is more accurate for accounting reconciliation.

**Why are voided items not showing?**
Set **Include Voided** to **Yes** to include voided charges and payments in the results.

## See also

- [Cashiering → Transaction](/docs/operations/cashiering/transaction) — Post charges and payments on individual folios.
- [Night Audit](/docs/operations/night-audit) — Post room charges and close the business date.
- [Trial Balance Report](/docs/operations/reports/trial-balance) — Debit/credit balance per transaction code for an audit run.
- [Reports Overview](/docs/operations/reports/overview) — How to run and export reports.
