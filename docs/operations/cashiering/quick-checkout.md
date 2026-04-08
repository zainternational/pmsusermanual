---
sidebar_position: 3
---

# Quick Checkout

**Quick Checkout** speeds up the departure process by letting you process multiple reservations in sequence — auto-posting room charges, taking payment, and checking out — without opening each folio individually.

:::tip **Having a problem?**
See [Cashiering Overview](/docs/operations/cashiering/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Cashiering** → **Quick Checkout**. You must complete **Cash Register Login** first if prompted.

## What It Shows

The Quick Checkout list shows only reservations whose **departure date equals the current business date**. This keeps the list focused on today's departures.

Reservations are split into two sections:
- **FIT** — Individual (non-group) reservations.
- **Party / Group** — Group reservations, shown under their Group No header.

Columns: Group No, Reservation No, Guest Name, Room No, Balance, Arrival Date, Departure Date.

Balance is colour-coded: red = positive (owes money), green = negative (credit/overpayment).

## Filters

Use the same filters as the Transaction screen to narrow the list:
- Search by guest name, room number, or reservation number.
- Status filter (default: In-House).

## Checkout Actions

Three checkout buttons at the top:

| Button | Description |
|--------|-------------|
| Checkout (Selected) | Process only the reservations you have checked (selected via checkboxes). |
| Checkout Balance 0 (N) | Process all reservations with a zero balance — no payment needed, checkout immediately. The count N shows how many qualify. |
| Checkout All | Process every reservation in the list, one by one. |

## How Quick Checkout Works

Quick Checkout processes reservations **one at a time** in sequence:

1. **Auto-post room charges** — For each reservation, the system checks if room charges are posted up to the departure date. If not, it posts them automatically.
2. **Confirm auto-post** — If room charges were just posted, a confirmation modal appears: "Room charges have been posted for Room X. Click OK to open payment."
3. **Payment modal** — The Payment modal opens showing the current folio balance.
   - If balance > 0: add a payment to bring it to zero.
   - If balance = 0: checkout triggers automatically after a short delay.
   - If balance < 0 (overpayment): add a negative payment (refund) to bring it to zero.
4. **Auto-checkout** — Once all folio balances reach zero, checkout completes automatically. The reservation is removed from the list.
5. **Next reservation** — The system moves to the next reservation in the queue.

Use **Skip** in the payment modal to skip the current reservation and move to the next one.

## Selecting Reservations

Use the checkboxes on each row to select specific reservations. Selection works across both FIT and Party sections — you can mix individual and group reservations in the same checkout run.

## Zero-Balance Checkout

Reservations with balance = 0 (within 0.01 threshold) are eligible for **Checkout Balance 0**. These are processed without opening the payment modal — room charges are verified and checkout completes automatically.

## Common FAQs

**Why is a reservation not showing in Quick Checkout?**
Quick Checkout only shows reservations with departure date = today's business date. If the departure date is different, use the Transaction screen instead.

**What if room charges fail to post?**
If auto-posting fails, an error message appears and the system skips to the next reservation. Use the Transaction screen to post room charges manually for that reservation.

**Can I checkout a reservation with a negative balance?**
Yes — add a negative payment (refund) in the payment modal to bring the balance to zero, then checkout proceeds.

**What happens if I close the payment modal without paying?**
Click **Skip** to skip the current reservation and continue with the next one. The skipped reservation remains in the list.

## See also

- [Transaction](/docs/operations/cashiering/transaction) — Full folio access for individual reservations.
- [Cashier Shift](/docs/operations/cashiering/cashier-shift) — Close the shift after all checkouts.
- [Front Desk → In-House](/docs/operations/front-desk/in-house) — Alternative checkout from the in-house list.
- [Reservations → Departures](/docs/operations/reservations/departures) — Today's expected departures.
- [Night Audit](/docs/operations/night-audit) — Run after all checkouts and cashier activity.
