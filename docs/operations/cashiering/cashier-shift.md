---
sidebar_position: 2
---

# Cashier Shift

**Cashier Shift** is used to manage cash register sessions — view shift history, close a shift (shift drop), and run cashier reports. It is the reconciliation hub before night audit.

:::tip **Having a problem?**
See [Cashiering Overview](/docs/operations/cashiering/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Cashiering** → **Cashier Shift**. You must complete **Cash Register Login** first if prompted.

## Dashboard

The Cashier Shift dashboard has three sections:

### Cashier Info Card

Shows the currently logged-in cashier's name, email, and register ID. Use the **Cashier** dropdown to switch to a different cashier (if you have permission to view other cashiers' shifts).

Two action buttons:
- **Cashier Close** — Navigate to the Cashier Close screen to perform a shift drop.
- **View Reports** — Navigate to the Cashier Reports screen.

### Business Date Filter

Filter the shift history table by business date. Defaults to the current business date.

### Cashier History Table

Shows all shift drops (closures) for the selected cashier and business date.

| Column | Description |
|--------|-------------|
| Shift Count | Sequential number of the shift drop for this cashier. |
| Shift-Drop Time | Date and time the shift was closed. |
| Transaction | Count and total amount of charges posted in this shift. |
| Payment | Count and total amount of payments received in this shift. |
| Actions | **View** — Opens the Cashier Summary Modal for that shift. |

Click **View** on any row to open the **Cashier Summary Modal**, which shows a detailed breakdown of all transactions and payments in that shift.

## Cashier Close (Shift Drop)

Navigate to **Cashier Close** from the dashboard. This screen shows:

**Left panel — Cashier Closure Summary:**
- Summary rows grouped by transaction/payment code showing count and total amount for the current session.
- **Shift Drop** section showing categorised totals (e.g. cash received, card received, paid out, internal deposits).
- A **Close Shift** button to perform the shift drop.

**Right panel — Transaction Details:**
- When you click a summary row on the left, the right panel shows the individual transactions for that code.

### Closing a Shift

1. Review the summary rows to confirm all transactions are accounted for.
2. Click **Close Shift** (or equivalent).
3. Confirm. The shift is recorded with a timestamp.
4. After closing, a success banner appears and a **Logout** button is shown — use it to log out of the cash register session.

:::note
Only transactions from the current session (since the last login) are shown in the closure summary. Previous sessions are in the Cashier History table.
:::

## Cashier Reports

Navigate to **View Reports** from the dashboard. This screen lets you generate and print cashier reports.

### Filters

| Filter | Description |
|--------|-------------|
| Cashier | Select the cashier to report on. |
| Business Date | The date to report on. Defaults to the current business date. |
| Report Type | Select the type of cashier report to generate. |

### Report Preview

After selecting filters, a preview of the report appears. Click **View** to open the full report in a modal for printing or review.

Available report types depend on your configuration. Typical reports include:
- Cashier Summary — totals by transaction/payment code for the selected cashier and date.
- Shift Drop Report — detailed shift closure summary.

## Common FAQs

**Why is the Cashier History table empty?**
No shifts have been closed for the selected cashier and business date. If the cashier has not done a shift drop yet today, the table will be empty.

**Can I view another cashier's shift history?**
Yes, if you have permission. Use the Cashier dropdown on the dashboard to select a different cashier.

**What happens if I close a shift and then post more transactions?**
New transactions after a shift close will appear in the next shift. Each shift drop captures only the transactions since the previous close.

## See also

- [Transaction](/docs/operations/cashiering/transaction) — Post charges and payments during the shift.
- [Quick Checkout](/docs/operations/cashiering/quick-checkout) — Batch checkout before closing the shift.
- [Night Audit](/docs/operations/night-audit) — Close cashier shifts before running night audit.
- [Journal by Transaction](/docs/operations/cashiering/journal-by-transaction) — Detailed audit of all posted items across cashiers.
- [Billing Reports](/docs/operations/reports/billing) — Revenue and payment reports by date range.
