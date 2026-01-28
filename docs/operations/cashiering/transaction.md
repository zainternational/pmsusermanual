---
sidebar_position: 1
---

# Transaction (Guest Folio)

The **Transaction** screen is used to manage one reservation's **guest folio** — charges, payments, adjustments, and printing. It is the main place to work on a **folio** in the **cash register** session.

## Access

From the sidebar: **Cashiering** → **Transaction**. You must complete **Cash Register Login** first if prompted.

## Selecting a Reservation

- Search by guest name, confirmation number, or room.
- Select the reservation to open its **folio**.

## Folio Overview

The folio shows:

- **Charges** — Room, tax, and other items (from transaction codes)
- **Payments** — Payments by type (cash, card, etc.)
- **Balance** — Total charges minus payments

Charges and payments are grouped by **folio number** if your property uses multiple folios per reservation.

## Adding a Charge

1. Use **Add Charge** (or similar).
2. Choose **Transaction Code** (e.g. room, minibar, laundry).
3. Enter **amount**, **quantity**, **description** if needed.
4. Save. The charge appears on the folio.

## Posting a Payment

1. Use **Payment** (or **Add Payment**).
2. Choose **Payment Type** (cash, card, etc.).
3. Enter **amount** and any reference (e.g. last 4 digits of card).
4. Save. The payment reduces the balance.

## Post Room Charge

**Post Room Charge** posts room revenue for a stay (often used in night audit or from cashier). It creates or updates room charges based on the rate and dates. This may be available from the Transaction screen or from Night Audit, depending on configuration.

## Adjustments and Void

- **Edit** — Change amount or details of a charge or payment when allowed.
- **Void** — Void a charge or payment. Void rules (e.g. reason, approval) are set in configuration.

## Split / Routing

If **routing** or **split folio** is available, you can route part of the bill to another profile (e.g. company, travel agent) or split charges across folios or payers.

## Printing

- **Print Folio** — Guest folio for handover or records.
- **Proforma Invoice** — Draft invoice before finalising.

## See also

- [Night Audit](/docs/operations/night-audit) — Post room charge from here or from Night Audit; run night audit after reconciling folios.
- [Reports](/docs/operations/reports/overview) — [Billing](/docs/operations/reports/billing) and [Night Audit reports](/docs/operations/reports/night-audit) for folio summary and guest ledger.
- [Cashier Shift](/docs/operations/cashiering/cashier-shift) — Open/close shifts and reconcile.
- [Quick Checkout](/docs/operations/cashiering/quick-checkout) — Speed up departure.
- [Configuration overview](/docs/configuration/overview) — Transaction codes, payment types under Configuration → Cashiering.
