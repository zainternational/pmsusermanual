---
sidebar_position: 0
---

# Cashiering Overview

**Cashiering** handles guest **folio** billing, payments, and cashier sessions. Access usually requires **Cash Register Login** before using Transaction, Cashier Shift, or Quick Checkout.

:::tip **Having a problem?**  
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules, see the main [Troubleshooting](/general/troubleshooting) page — it links to module-specific FAQs and troubleshooting sections.
:::

In the app, **Cashiering** is a menu with these screens:

| Screen | Purpose |
|--------|---------|
| [Cash Register Login](/operations/cashiering/cash-register-login) | Log in to a cash register before using cashiering functions. |
| [Transaction](/operations/cashiering/transaction) | Work on a specific reservation's folio (charges, payments, adjustments). |
| [Cashier Shift](/operations/cashiering/cashier-shift) | Open/close cashier shifts and view shift summary. |
| [Quick Checkout](/operations/cashiering/quick-checkout) | Speed up checkout for selected reservations. |
| [Post Room Charge](/operations/cashiering/post-room-charge) | Manually post room charges for a specific reservation and date. |
| [Journal by Transaction](/operations/cashiering/journal-by-transaction) | Detailed view of all items and payments across reservations, filterable by cashier, room, and date. |
| [Room Routing](/operations/cashiering/room-routing) | Property-wide view of all routing rules set up across reservations. |

## Cash Register Login

Before using cashier functions:

1. Go to **Cashiering** in the sidebar (or a sub-item such as **Transaction**).
2. If prompted, you are taken to **Cash Register Login**.
3. Select (or enter) your **cash register** and complete the login.
4. After that, you can use **Transaction**, **Cashier Shift**, and **Quick Checkout** as permitted.

## Deposit Ledger

Deposits taken against a reservation are tracked separately from the regular folio transaction list, in a **Deposit Ledger**. It is not a Cashiering menu screen — it is opened from the reservation itself, via **Front Desk → In-House → Deposit Ledger** (requires the Deposit Ledger permission). See [In-House](/operations/front-desk/in-house) for how to open it.

## Common FAQs

**Why can't I open Cashiering or the Transaction screen?**  
You must log in to a **cash register** first. Go to Cashiering, use **Cash Register Login**, select your register, and complete login. Your user must be linked to a cashier and cash register in configuration.

**What is the difference between Transaction and Quick Checkout?**  
**Transaction** is for working on one reservation's folio (charges, payments, adjustments). **Quick Checkout** speeds up departure by selecting one or more reservations, applying standard charges if needed, taking payment, and marking them checked out in fewer steps.

**Where do I see my cashier shift summary?**  
Go to **Cashiering** → **Cashier Shift**. There is no separate open-shift/starting-float step — a "shift" is simply everything you post between shift drops. Use **Cashier Close** to perform a shift drop (a snapshot of totals since your last drop) and **View Reports** to review past drops. Shift reports help reconcile daily activity.

For more FAQs and troubleshooting, see [Transaction](/operations/cashiering/transaction) or the troubleshooting table below. For general issues, see [Troubleshooting](/general/troubleshooting).

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Cannot open Cashiering / Transaction** | Not logged in to a cash register, or user not linked to a cashier/register. | Log in at **Cash Register Login**. Ask your administrator to link your user to a cashier and cash register in Configuration → Cashiering. |
| **Charge or payment fails to post** | Transaction code or payment type inactive; reservation not in a status that allows posting. | Ensure the transaction code and payment type are active. For charges/payments, the reservation usually must be checked in. |
| **Cannot void** | Void rules require a reason or approval; or item is locked after night audit. | Enter the required void reason or request approval per configuration. If locked, follow your property's policy for corrections. |

For general issues, see [Troubleshooting](/general/troubleshooting).

## See also

- [Night Audit](/operations/night-audit) — Post room charges, close business date, view audit reports and guest ledger. Close cashier shifts before running night audit.
- [Reports](/operations/reports/overview) — Billing and [Night Audit reports](/operations/reports/night-audit) for folio summary, revenue, and guest ledger.
- [Reservations](/operations/reservations/overview) — Guest and stay data; open folio from reservation or Front Desk.
- [Front Desk](/operations/front-desk/overview) — In-house and checked-out lists; quick access to folio and checkout.
- [Configuration overview](/configuration/overview) — Transaction codes, payment types, cashiers and cash register under Configuration → Cashiering.
