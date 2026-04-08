---
sidebar_position: 2
---

# Guest Checkout Workflow

This guide walks through the full checkout process — from verifying the folio to checking out the guest and updating room status.

## Overview

```
Verify folio → Post missing charges → Take final payment → Checkout → Room goes Vacant Dirty
```

## Step 1 — Open the Folio

Go to one of:
- **Cashiering → Transaction** — select the reservation from the in-house list.
- **Billing** — open from the reservation detail or Front Desk → In-House.
- **Front Desk → In-House** — click the folio/billing action on the guest row.
- **Cashiering → Quick Checkout** — for batch processing of multiple departures.

## Step 2 — Review Charges

Check the transaction table for the selected folio:
- Confirm all room charges are posted (one per night of stay).
- Check for any outstanding incidentals (minibar, F&B, laundry, etc.).
- If room charges are missing, use **Post Room Charge** to post them manually.

## Step 3 — Post Any Missing Charges

If a charge is missing:
1. Click **Charge** (or **Add Item**).
2. Select the transaction code.
3. Enter quantity and unit price.
4. Save. The charge posts to the folio.

For missing room charges specifically, use **Post Room Charge** and select the date.

## Step 4 — Take Final Payment

1. Click **Payment**.
2. Select the payment type (cash, card, bank transfer, etc.).
3. Enter the amount equal to the folio balance.
4. Save. The balance should reach zero.

If the guest is paying in a foreign currency, the exchange rate is applied automatically.

If there is an overpayment (negative balance), add a negative payment (refund) to bring it to zero.

## Step 5 — Checkout

Once all folio balances are zero:
1. Click **Checkout** in the billing header or reservation detail.
2. Confirm. The reservation status changes to **Checked Out**.
3. The room status automatically changes to **Vacant Dirty**.

If using **Quick Checkout**, checkout triggers automatically when the balance reaches zero.

## Step 6 — Print Folio (Optional)

After checkout, print or email the final folio to the guest:
1. Click **Print Folio**.
2. Select the folio number.
3. Print or save as PDF.

## Step 7 — Room Housekeeping

After checkout, the room is automatically set to **Vacant Dirty**. The housekeeping team:
1. Sees the room in **Housekeeping → Room Status** as Vacant Dirty.
2. Cleans the room.
3. Updates the status to **Vacant Clean** (or Inspected).
4. The room is now available for the next guest.

## Common FAQs

**The Checkout button is greyed out.**
The folio balance must be zero before checkout. Check all folios — a reservation can have multiple folios, each needing a zero balance.

**Room charges are missing for some nights.**
Use **Post Room Charge** in the billing/transaction screen to post charges for specific dates. Or check if night audit was run for those dates.

**The guest wants to pay with multiple payment types.**
Post multiple payments (e.g. part cash, part card) until the total equals the balance.

**The guest disputes a charge.**
Void the disputed charge (with a void reason), or adjust the amount. Then take payment for the corrected balance.

## See also

- [Billing (Guest Folio)](/docs/operations/billing) — Full folio management.
- [Cashiering → Transaction](/docs/operations/cashiering/transaction) — Cashier workspace.
- [Cashiering → Quick Checkout](/docs/operations/cashiering/quick-checkout) — Batch checkout for multiple departures.
- [Housekeeping → Room Status](/docs/operations/housekeeping/room-status) — Update room to Vacant Clean after checkout.
- [Night Audit](/docs/operations/night-audit) — Post room charges and close the business date.
