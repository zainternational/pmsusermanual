---
sidebar_position: 7
---

# Night Audit

**Night Audit** is the end-of-day process that closes the business date, posts room charges, and produces audit reports. It is run once per property per business day, after all front-office and cashier activity is complete.

:::tip **Having a problem?**
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules, see the main [Troubleshooting](/general/troubleshooting) page.
:::

## Access

From the sidebar, click **Night Audit**. You need the **Night Audit** permission to run audits. Viewing past runs may require a separate view permission.

Keyboard shortcut: **Alt+A** opens the Run Night Audit modal.

## Audit Runs List

The main screen shows a paginated table of all past audit runs with:

| Column | Description |
|--------|-------------|
| Audit Date | The business date that was closed. |
| Status | PENDING / IN_PROGRESS / COMPLETED / FAILED / PARTIAL |
| Run By | The user who ran the audit. |
| Run DateTime | When the audit was started. |
| Completed DateTime | When the audit finished. |
| Duration | How long the audit took. |
| Total Revenue | Total revenue posted on that date. |
| Total Payments | Total payments received. |
| Occupancy % | Occupancy rate for that date. |
| Actions | **View Summary** — opens the audit summary modal. |

### Filters

| Filter | Description |
|--------|-------------|
| Status | Filter by audit run status (COMPLETED, FAILED, etc.). |
| Date Range | Filter by audit date range. |

Use **Refresh** to reload the list.

## Running Night Audit

Click **Run Night Audit** (or press **Alt+A**). The Run Night Audit modal opens.

### Run Audit Modal

| Field | Description |
|-------|-------------|
| Audit Date | The business date to close. Defaults to the current business date. Cannot be before the business date. |
| Force Logout Wait (seconds) | How long to wait (10–300 seconds, default 30) before force-logging out users who do not have night audit permission. This gives active users time to save their work before the audit locks the system. |

Click **Run Audit** to start. A live **Audit Steps** panel appears showing progress — see [Audit Steps Progress](#audit-steps-progress) below.

### Pre-Run Confirmation Modals

The system checks for blocking conditions before running. If any are found, a confirmation modal appears:

#### Today's Arrivals (Not Checked In)

If there are reservations with today's arrival date that have not been checked in, the **Today's Arrivals** modal appears showing:
- A list of all pending arrivals (reservation ID, guest name, arrival/departure dates, room type, room, status)
- For each reservation, a **Manage** button opens a side drawer with two options:
  - **Save new date** — Change the arrival date to a future date (e.g. the guest is arriving tomorrow).
  - **Cancel reservation** — Permanently cancel the reservation.
- Once all arrivals are resolved (or if you choose to proceed), click **Continue & Mark as No Show** to mark remaining arrivals as no-shows and proceed with the audit.

#### Today's Departures (Not Checked Out)

If there are in-house reservations with today's departure date that have not been checked out, the **Today's Departures** modal appears showing the list of pending departures. Resolve each one (check out or change departure date) before proceeding.

#### Cashier Shift Not Closed

If any cash registers have open shifts (not yet shift-dropped), the **Cashier Shift Not Closed** modal appears showing a list of open registers. For each register:
1. Click **Shift Drop** to open the shift drop detail view.
2. Review the cash and payment totals for that register.
3. Enter the **Actual Cash** amount.
4. Click **Shift Close** to record the shift drop.
5. Repeat for each open register.

Once all registers are shift-dropped, run night audit again.

### What Night Audit Does

When the audit runs successfully:
1. **Posts room charges** — Room revenue is posted to each in-house guest's folio for the audit date.
2. **Advances the business date** — The system date moves to the next day.
3. **Generates audit data** — Reservation summaries, revenue summaries, payment summaries, occupancy statistics, and guest ledger entries are recorded for the run.
4. **Force-logs out users** — After the wait period, users without night audit permission are logged out.

### Audit Run Statuses

| Status | Meaning |
|--------|---------|
| PENDING | Audit is queued but not yet started. |
| IN_PROGRESS | Audit is currently running. |
| COMPLETED | Audit finished successfully. |
| PARTIAL | Audit completed with some warnings or partial data. |
| FAILED | Audit failed; check the error message on the run. |

## Audit Steps Progress

While an audit is running, the **Audit Steps** panel (headed "Hotel Night Audit: [date]") lists the 13 fixed steps of the process in order, each with **Complete** and **Error** indicators and a start/completed timestamp:

1. Start Checking Data
2. Check Discrepancy
3. Departures Not Checked Out
4. Check Arrivals Not Yet Checked In
5. Check Post Room Charges
6. Check Cashier Account
7. Complete Check Data
8. Update Room Status
9. Update Guest Information To Guest Profile
10. Update Statistic Data
11. Update Room Rate On Reservation
12. Change Hotel Date
13. Complete End Of Day

Each step is marked **Complete** as it finishes, and flagged **Error** if it fails. Use this panel to see exactly where a long-running or failed audit is stuck, rather than waiting on the overall run status alone.

## Viewing an Audit Run Summary

Click **View Summary** on any completed audit run row. The **Night Audit Summary** modal opens with five tabs:

### Reservation Summaries Tab

All reservations included in the audit run, showing:
- Reservation ID, guest name, room number
- Arrival/departure dates, nights
- Status flags: Is Arrival, Is Departure, Is In-House, Is No Show, Is Cancelled
- Rate amount, total charges, total payments, balance

### No Show Reservations Tab

Reservations that were marked as no-show during this audit run.

### Revenue Summaries Tab

Revenue breakdown by transaction code:

| Column | Description |
|--------|-------------|
| Transaction Code | Short code and name. |
| Category | Transaction category (e.g. room, F&B, tax). |
| Count | Number of transactions posted. |
| Total Amount | Gross amount. |
| Voided Count / Amount | Voided transactions. |
| Net Amount | Total minus voided. |

### Payment Summaries Tab

Payment breakdown by payment code:

| Column | Description |
|--------|-------------|
| Payment Code | Short code and name. |
| Count | Number of payments. |
| Total Amount | Gross payments. |
| Voided Count / Amount | Voided payments. |
| Net Amount | Total minus voided. |

### Guest Ledgers Tab

Full guest ledger for the audit run — every debit and credit entry per reservation, showing transaction code, description, debit, credit, running balance, folio number, and reference.

### Trial Balance Snapshot

Each completed audit run also produces a **trial balance snapshot** — a point-in-time rollup of the day's transactions, grouped into the standard Revenue, Paid-out, Non-Revenue, and Payment sections, plus the guest ledger balance brought forward and carried forward. This snapshot is generated by the audit run itself (not a separately-run report), and is what the [Trial Balance report](/operations/reports/trial-balance) displays for that audit date.

## Night Audit Exceptions

During an audit run, the system automatically records **exceptions** — issues found while checking data that may need staff attention. Each exception has:

| Field | Description |
|-------|-------------|
| Exception Type | The kind of issue found (see table below). |
| Severity | LOW, MEDIUM, HIGH, or CRITICAL. |
| Reservation / Room | The reservation or room the exception relates to, if applicable. |
| Description | Details of what was found. |
| Expected Value / Actual Value | What the system expected vs. what it actually found. |

### Exception Types

| Type | Meaning |
|------|---------|
| Balance Mismatch | A folio or ledger balance does not match expected totals. |
| Missing Room Charge | A room charge that should have been posted was not found. |
| Unpaid Reservation | A reservation has outstanding balance with no payment. |
| Overpayment | A reservation was paid more than its balance. |
| Missing Payment | An expected payment was not recorded. |
| Room Status Mismatch | A room's status does not match its reservation state. |
| Reservation Status Error | A reservation is in an unexpected status. |
| Transaction Error | An error occurred posting a transaction. |
| Payment Error | An error occurred posting a payment. |
| Room Discrepancy | Room data does not match expected values. |
| Departure Not Checked Out | An in-house reservation with today's departure date was not checked out. |
| Arrival Not Checked In | A reservation with today's arrival date was not checked in. |
| Missing Post Room Charge | Room charge posting was expected but did not happen. |
| Cashier Account Error | An issue was found with a cashier account/register. |
| Other | Any issue not covered by the above types. |

### Resolving Exceptions

Exceptions are not automatically fixed — they must be reviewed and resolved by staff:

1. Open the exception and review its description, expected value, and actual value.
2. Investigate and correct the underlying data (e.g. post the missing charge, fix the room status, record the missing payment).
3. Mark the exception as **resolved**. The system records who resolved it and when (resolved by, resolved at), along with any resolution notes you enter.

Unresolved exceptions remain visible so they are not forgotten on future reviews. High and Critical severity exceptions should be investigated first, as they typically indicate financial or data-integrity problems.

## Post Room Charge

**Post Room Charge** posts room revenue for a specific reservation and date without running the full night audit. Use it to:
- Post a missed room charge for a past date.
- Manually post charges for a specific reservation.

Post Room Charge is available from:
- **Night Audit** page (via the Post Room Charge button if visible)
- **Cashiering → Transaction** (Post Room Charge button in the transaction history card)

## Business Date

The **business date** is the date the system treats as "today" for:
- New reservations and availability
- Rate calculations
- Reporting defaults
- Cashier sessions

The current business date is shown in the sidebar and dashboard.

Normally the business date advances automatically as part of a successful night audit run (the "Change Hotel Date" audit step). However, the business date is also its own record that administrators can manage directly, separately from running an audit — it can be created, viewed, updated, or deleted, each requiring its own permission (create/view/update/delete business date). Business dates can also be scoped to a specific hotel, or left blank to apply to all hotels. Only change the business date manually for setup or correction purposes — changing it outside of night audit does not post room charges or perform the other end-of-day processing an audit run does.

## Best Practices

- Run night audit **once per day** after all front-office and cashier activity is complete.
- **Close all cashier shifts** before running — the system will block the audit if open shifts exist.
- **Check in or resolve all arrivals** — pending arrivals block the audit.
- **Check out or resolve all departures** — pending departures block the audit.
- **Review the audit run status** after completion — PARTIAL or FAILED runs need investigation.

## Common FAQs

**Why don't I see the Night Audit menu?**
Your user does not have night audit permission. Ask your administrator to grant `add_nightauditrun` or `view_nightauditrun` permission.

**The audit is blocked by open cashier shifts — what do I do?**
The Cashier Shift Not Closed modal shows which registers are open. Click **Shift Drop** for each one, review the totals, and click **Shift Close**. Then run night audit again.

**The audit is blocked by today's arrivals — what do I do?**
Click **Manage** on each arrival to either change the arrival date (guest arriving tomorrow) or cancel the reservation. Or click **Continue & Mark as No Show** to mark all remaining arrivals as no-shows and proceed.

**What is the Force Logout Wait?**
When night audit runs, it force-logs out users who do not have night audit permission after the wait period (default 30 seconds). This prevents users from posting transactions while the audit is running. Increase the wait time if your staff need more time to save their work.

**Can I run night audit more than once for the same date?**
No — one audit run per business date is the norm. If a run failed, check the error message and fix the issue, then run again. The system will not allow a second completed run for the same date.

**The audit completed but the business date did not advance.**
Check the audit run status. If it shows FAILED or PARTIAL, the date may not have advanced. Review the error message and re-run if needed.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Audit blocked by open cashier shifts** | One or more cash registers have not been shift-dropped. | Use the Cashier Shift Not Closed modal to shift-drop each open register, then run again. |
| **Audit blocked by today's arrivals** | Reservations with today's arrival date are not checked in. | Manage each arrival (change date, cancel, or mark as no-show) then run again. |
| **Audit blocked by today's departures** | In-house reservations with today's departure are not checked out. | Check out or change departure date for each, then run again. |
| **Audit status is FAILED** | An error occurred during the run (e.g. missing rate, database issue). | Check the error message on the audit run row. Fix the underlying issue and re-run. |
| **Room charges not posted** | Audit failed before posting, reservations had no rate/room assigned, or a Missing Room Charge / Missing Post Room Charge exception was raised. | Review the audit's exceptions, resolve the underlying issue, and re-run; or use Post Room Charge for individual reservations. |
| **Business date did not advance** | Audit failed or was partial. | Check audit run status and error message. Re-run after fixing the issue. |
| **Cannot view past audit runs** | Missing view permission. | Ask your administrator to grant `view_nightauditrun` permission. |
| **Revenue or payment totals look wrong** | Wrong audit run selected, or voided transactions included. | Check the Revenue and Payment Summaries tabs. Voided amounts are shown separately from net amounts. |

## See also

- [Cashiering → Cashier Shift](/operations/cashiering/cashier-shift) — Close cashier shifts before running night audit.
- [Cashiering → Transaction](/operations/cashiering/transaction) — Post Room Charge from the transaction screen.
- [Reservations → Arrivals](/operations/reservations/arrivals) — Resolve pending arrivals before night audit.
- [Reservations → Departures](/operations/reservations/departures) — Resolve pending departures before night audit.
- [Reports → Night Audit](/operations/reports/night-audit) — Night audit reports (daily summary, revenue, guest ledger).
- [Reports → Trial Balance](/operations/reports/trial-balance) — Debit/credit balance per transaction code for an audit run.
- [Reports → Manager Report](/operations/reports/manager-report) — Consolidated daily management summary from an audit run.
