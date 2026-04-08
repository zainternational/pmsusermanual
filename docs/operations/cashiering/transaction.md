---
sidebar_position: 1
---

# Transaction (Guest Folio)

The **Transaction** screen is the main cashiering workspace. It shows all in-house reservations on the left and the selected reservation's folio detail on the right. Use it to post charges, take payments, void transactions, print folios, and check out guests.

:::tip **Having a problem?**
See [Cashiering Overview](/docs/operations/cashiering/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Cashiering** → **Transaction**. You must complete **Cash Register Login** first if prompted.

## Layout

The screen is split into two panels:

- **Left panel** — Transaction list: all in-house reservations with room number, reservation number, guest name, balance, arrival, and departure. FIT (individual) reservations and Group (Party) reservations are shown in separate sections. Group reservations are grouped under a Group No header.
- **Right panel** — Reservation detail: shows the selected reservation's summary and full transaction history.

Click any row in the left panel to load that reservation's detail in the right panel.

## Left Panel — Transaction List

### Filters

| Filter | Description |
|--------|-------------|
| Search | Filter by guest name, room number, or reservation number. |
| Status | Filter by reservation status (default: In-House). |
| Date Range | Filter by arrival or departure date. |

Use **Clear Filters** to reset.

### Balance Column

The balance is colour-coded:
- Red — positive balance (guest owes money)
- Green — negative balance (overpayment / credit)

## Right Panel — Reservation Detail

### Reservation Summary Card

Shows the selected reservation's key details: guest name, room number, arrival/departure, rate, reservation type, and current balance.

**Activity buttons** (with count badges):

| Button | Description |
|--------|-------------|
| Routing | Open the routing modal to set up charge routing to another room, company, or travel agent. |
| Alert | View and manage reservation alerts (Reservation display type). |
| Comment | View and add internal comments. |
| Message | View and add guest-facing messages. |
| Proforma | Generate a proforma invoice (draft folio before finalising). |
| Checkout | Check out the guest (see [Checkout](#checkout) below). |

### Transaction History Card

Shows all charges and payments on the folio, with columns for type, transaction code, description, quantity, unit price, total amount, folio number, business date, and voided status.

Select a transaction row to enable the action buttons below the table.

**Transaction action buttons** (permission-controlled):

| Button | Applies To | Description |
|--------|-----------|-------------|
| Post Room Charge | — | Post room charges for the reservation for a specific date. Opens the Post Room Charge modal. |
| Edit | Single charge | Edit the quantity, unit price, or description of a charge. |
| Transfer | One or more | Transfer selected transaction(s) to another reservation or folio. |
| Split | Single charge | Split a charge into two separate line items. |
| Adjust Amount | Single item | Adjust the amount of a charge or payment. |
| Void | Single item | Void a charge or payment. Voided items remain visible in the history (greyed out) for audit purposes. |
| Charge | — | Add a new charge. Opens the Add Item modal. |
| Payment | — | Add a new payment. Opens the Payment modal. |

**Print Folio** button (top right of transaction card) — opens the Print Folio modal to select a folio and generate a printable folio PDF.

## Adding a Charge

1. Click **Charge**.
2. Select a **Transaction Code** (e.g. room, minibar, laundry, F&B).
3. Enter quantity, unit price, and description if needed.
4. Click **Add** to post directly to the folio.

The charge appears immediately in the transaction history and the balance updates.

## Posting a Payment

1. Click **Payment**.
2. Select a **Payment Type** (cash, card, bank transfer, etc.).
3. Enter the amount. The folio balance updates in real time.
4. Optionally toggle **Print after payment** to print the folio automatically.
5. Save. The payment reduces the balance.

Exchange rate conversion is applied automatically if the payment is in a foreign currency.

## Post Room Charge

Click **Post Room Charge** to post room revenue for a specific night to the guest's folio. This is used when room charges were not posted automatically by night audit, or to post charges for a specific date manually.

## Routing

Click **Routing** to open the routing modal. Routing sends specific transaction codes to another room, company profile, or travel agent profile. For example, route room charges to a company and incidentals to the guest.

Routing rules set here are also visible in [Room Routing](/docs/operations/cashiering/room-routing).

## Checkout

The **Checkout** button is available when the reservation is In-House and you have checkout permission.

Checkout flow:
1. Click **Checkout**.
2. If the folio balance is not zero, the Payment modal opens automatically — post the final payment.
3. Once all folio balances reach zero, checkout triggers automatically (after a short delay).
4. The reservation status changes to **Checked Out**, the room status updates to **Vacant Dirty**, and the reservation is removed from the transaction list.

If the balance is negative (overpayment), add a negative payment (refund) to bring it to zero before checkout.

## Proforma Invoice

Click **Proforma** to generate a draft invoice showing current charges and payments. This is typically given to the guest before final checkout for review.

## Print Folio

Click **Print Folio** to open the folio selector. Choose the folio number, then click **Print** to open a print preview. The folio can be printed or saved as PDF.

## Void

To void a transaction:
1. Select the transaction row in the history table.
2. Click **Void**.
3. Confirm. The item is marked as voided and no longer counts toward the balance.

Voided items remain visible in the history for audit purposes.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Charge fails to post** | Transaction code inactive or reservation not in a postable status. | Ensure the transaction code is active in Configuration → Cashiering. The reservation must be In-House. |
| **Payment fails** | Payment type inactive or amount exceeds limit. | Ensure the payment type is active. Check for any amount limits in configuration. |
| **Cannot void** | Item may be locked after night audit, or you lack void permission. | Ask your administrator to grant void permission. If locked after audit, follow your property's correction policy. |
| **Checkout button disabled** | Reservation not In-House, or you lack checkout permission. | Confirm the reservation status is In-House. Ask your administrator to grant `check_out` permission. |
| **Balance not zero after payment** | Exchange rate rounding or multiple folios. | Check each folio balance individually. Adjust the payment amount to match exactly. |

## See also

- [Cashier Shift](/docs/operations/cashiering/cashier-shift) — Open/close shifts; reconcile before night audit.
- [Quick Checkout](/docs/operations/cashiering/quick-checkout) — Batch checkout for multiple departures.
- [Journal by Transaction](/docs/operations/cashiering/journal-by-transaction) — Audit all posted items and payments across cashiers.
- [Room Routing](/docs/operations/cashiering/room-routing) — Property-wide view of all routing rules.
- [Night Audit](/docs/operations/night-audit) — Post room charges and close the business date.
- [Billing Reports](/docs/operations/reports/billing) — Revenue and payment reports.
