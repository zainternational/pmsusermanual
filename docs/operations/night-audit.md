---
sidebar_position: 7
---

# Night Audit

**Night Audit** is the end-of-day process that closes the business date, posts room charges, and produces audit reports. It is run once per property per business day, after all front-office and cashier activity is complete.

:::tip **Having a problem?**
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules, see the main [Troubleshooting](/docs/general/troubleshooting) page.
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

Click **Run Audit** to start. A full-screen overlay appears showing elapsed time while the audit runs.

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

## Post Room Charge

**Post Room Charge** posts room revenue for a specific reservation and date without running the full night audit. Use it to:
- Post a missed room charge for a past date.
- Manually post charges for a specific reservation.

Post Room Charge is available from:
- **Night Audit** page (via the Post Room Charge button if visible)
- **Cashiering → Transaction** (Post Room Charge button in the transaction history card)

## Business Date

After a successful night audit, the **business date** advances to the next day. This date is used as "today" for:
- New reservations and availability
- Rate calculations
- Reporting defaults
- Cashier sessions

The current business date is shown in the sidebar and dashboard.

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
| **Room charges not posted** | Audit failed before posting, or reservations had no rate/room assigned. | Fix exceptions and re-run, or use Post Room Charge for individual reservations. |
| **Business date did not advance** | Audit failed or was partial. | Check audit run status and error message. Re-run after fixing the issue. |
| **Cannot view past audit runs** | Missing view permission. | Ask your administrator to grant `view_nightauditrun` permission. |
| **Revenue or payment totals look wrong** | Wrong audit run selected, or voided transactions included. | Check the Revenue and Payment Summaries tabs. Voided amounts are shown separately from net amounts. |

## See also

- [Cashiering → Cashier Shift](/docs/operations/cashiering/cashier-shift) — Close cashier shifts before running night audit.
- [Cashiering → Transaction](/docs/operations/cashiering/transaction) — Post Room Charge from the transaction screen.
- [Reservations → Arrivals](/docs/operations/reservations/arrivals) — Resolve pending arrivals before night audit.
- [Reservations → Departures](/docs/operations/reservations/departures) — Resolve pending departures before night audit.
- [Reports → Night Audit](/docs/operations/reports/night-audit) — Night audit reports (daily summary, revenue, guest ledger).
- [Reports → Trial Balance](/docs/operations/reports/trial-balance) — Debit/credit balance per transaction code for an audit run.
- [Reports → Manager Report](/docs/operations/reports/manager-report) — Consolidated daily management summary from an audit run.
