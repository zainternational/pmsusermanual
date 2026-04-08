---
sidebar_position: 7
---

# Trial Balance Report

The **Trial Balance Report** aggregates the night audit guest ledger by transaction code for a selected audit run, showing total debits, total credits, and the net balance per code.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or the [Reports Overview](/docs/operations/reports/overview) for how to run and export reports.
:::

## Access

From the sidebar, click **Report** → **Trial Balance**.

## Filters

| Filter | Description |
|--------|-------------|
| Start Date | Optional date range start to narrow the audit run list. |
| End Date | Optional date range end. |
| Audit Run | Select a specific night audit run to view its trial balance. |

You must select an **Audit Run** to generate the report. The audit run dropdown lists completed runs with their date and status.

## What the Report Shows

Each row is one transaction code that appeared in the selected audit run's guest ledger.

| Column | Description |
|--------|-------------|
| Transaction Code | Short code and name of the transaction code. |
| Total Debit | Sum of all debit entries for that code in the audit run. |
| Total Credit | Sum of all credit entries for that code in the audit run. |
| Balance | Debit minus Credit for that code. |

The report footer shows grand totals: **Total Debit**, **Total Credit**, and overall **Balance**.

## How It Works

The trial balance is built from the **Night Audit Guest Ledger** — the record of all charges and payments posted during the night audit run. Each ledger entry is linked to a transaction code, and this report groups and sums them.

A balanced trial balance (total debit = total credit) confirms that all postings for that audit run are in balance.

## Export

Use the export button (if available) to download as Excel or PDF for accounting reconciliation.

## Common FAQs

**Why is the report empty?**
You must select an audit run from the dropdown. If no audit runs appear, night audit has not been run yet, or you may not have permission to view night audit data.

**What does a non-zero balance mean?**
A non-zero overall balance may indicate unposted items, voided transactions, or an incomplete audit run. Review the night audit run and exceptions.

## See also

- [Night Audit](/docs/operations/night-audit) — Run night audit and view audit runs.
- [Night Audit Reports](/docs/operations/reports/night-audit) — Daily summary, revenue, and guest ledger for an audit run.
- [Billing Reports](/docs/operations/reports/billing) — Revenue and payment detail by date range.
- [Reports Overview](/docs/operations/reports/overview) — How to run and export reports.
