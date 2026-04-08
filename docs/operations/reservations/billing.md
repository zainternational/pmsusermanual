---
sidebar_position: 8
---

# Billing (Guest Folio)

The **Billing** module is the full folio management workspace for a reservation. It shows all charges, payments, and folio details for a selected reservation, and lets you post charges, take payments, split or transfer items, adjust amounts, void transactions, and print folios.

:::tip **Having a problem?**
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For cashiering-related issues, see [Cashiering Overview](/docs/operations/cashiering/overview).
:::

## Access

Billing can be opened from:
- **Reservation** list or detail — click the **Billing** button on a reservation row or the billing action in the reservation detail.
- **Front Desk → In-House** — click the folio/billing action on an in-house guest row.
- **Cashiering → Transaction** — the Transaction screen links to the same folio data.

You must complete **Cash Register Login** before posting charges or payments.

## Layout

The Billing screen is split into panels:

- **Billing Header** — reservation summary (guest name, room, arrival/departure, rate, balance).
- **Folio Panel** — list of folios for the reservation; select a folio to view its transactions.
- **Folio Summary Panel** — totals for the selected folio (charges, payments, balance).
- **Folio Management Section** — the transaction table with all charges and payments for the selected folio.
- **Payment Methods Card** — summary of payment methods used on the folio.

## Folios

A reservation can have multiple folios (e.g. Folio 1 for room charges, Folio 2 for incidentals). Each folio has its own balance.

Use the **Folio Panel** to switch between folios. The folio summary shows:

| Field | Description |
|-------|-------------|
| Folio Number | Sequential folio number within the reservation. |
| Total Charges | Sum of all non-voided charge items. |
| Total Payments | Sum of all non-voided payments. |
| Balance | Charges minus payments. Positive = guest owes; negative = overpayment/credit. |

## Transaction Table

The transaction table shows all charges and payments on the selected folio.

| Column | Description |
|--------|-------------|
| Type | Charge or Payment. |
| Transaction Code | Short code and name. |
| Description | Item description. |
| Quantity | Number of units (charges only). |
| Unit Price | Price per unit (charges only). |
| Total Amount | Total for the line item. |
| Service Charge | Service charge component (charges only). |
| Tax | Tax component (charges only). |
| Folio No | Folio number. |
| Business Date | Business date the item was posted to. |
| Voided | Whether the item has been voided (greyed out if voided). |

Click a row to select it and enable the action buttons.

## Posting a Charge

1. Click **Charge** (or **Add Item**).
2. Select a **Transaction Code** from the list.
3. Enter **Quantity** and **Unit Price**.
4. Add a **Description** or **Remark** if needed.
5. Click **Add** to post to the folio.

Service charge and tax are calculated automatically based on the transaction code's service charge configuration.

## Posting a Payment

1. Click **Payment**.
2. Select a **Payment Type** (cash, card, bank transfer, etc.).
3. Enter the **Amount**.
4. If paying in a foreign currency, the exchange rate is applied automatically.
5. Optionally enter a **Reference** or **Remark**.
6. Click **Save**. The payment reduces the folio balance.

## Folio Actions

### Split

Split a single charge into two separate line items (e.g. split a room charge between two folios or guests).

1. Select a charge row.
2. Click **Split**.
3. Enter the amounts for each split portion.
4. Confirm. Two new items replace the original.

### Transfer

Move one or more transactions to another reservation or folio.

1. Select one or more rows.
2. Click **Transfer**.
3. Search for the target reservation.
4. Confirm. The selected items move to the target folio.

### Adjust Amount

Change the amount of an existing charge or payment without voiding it.

1. Select a row.
2. Click **Adjust Amount**.
3. Enter the new amount.
4. Confirm. The item is updated and the balance recalculates.

### Void

Remove a charge or payment from the folio balance. Voided items remain visible for audit purposes.

1. Select a row.
2. Click **Void**.
3. Enter a **Void Reason** if required.
4. Confirm. The item is marked voided and no longer counts toward the balance.

### Edit

Edit the quantity, unit price, or description of a charge.

1. Select a charge row.
2. Click **Edit**.
3. Modify the fields.
4. Save.

## Print Folio

Click **Print Folio** to open the folio print modal.

1. Select the **Folio Number** to print.
2. A print preview opens showing all charges and payments.
3. Click **Print** or save as PDF.

The printed folio is typically given to the guest at checkout as their invoice.

## Folio Preview

Click **Preview** (or the preview icon) to see a formatted folio preview without printing. Useful for reviewing the folio before presenting it to the guest.

## Routing

Click **Routing** to set up charge routing for the reservation. Routing sends specific transaction codes to another room, company profile, or travel agent profile automatically when charges are posted.

See [Room Routing](/docs/operations/cashiering/room-routing) for the property-wide routing view.

## Checkout from Billing

If the reservation is In-House and you have checkout permission, a **Checkout** button is available in the billing header.

1. Click **Checkout**.
2. If the folio balance is not zero, the Payment modal opens — post the final payment.
3. Once all folio balances reach zero, checkout completes automatically.
4. The reservation status changes to **Checked Out**.

## Reservation Confirmation Letter

From the billing header or reservation actions, click **Confirmation Letter** to generate a printable confirmation letter for the guest. This shows reservation details, room type, dates, and rate.

## Reservation Registration Form

Click **Registration Form** to generate the guest registration card — a printable form with guest details, stay information, and signature line. Used at check-in for guest sign-off.

## Common FAQs

**What is the difference between Billing and Cashiering → Transaction?**
Both access the same folio data. **Billing** is the full folio management view (split, transfer, adjust, multiple folios). **Cashiering → Transaction** is the cashier workspace that also shows the in-house reservation list on the left. Use whichever is more convenient for your workflow.

**Why can't I post a charge?**
You must be logged in to a cash register. The reservation must be In-House. The transaction code must be active.

**Why does the balance not change after a payment?**
Check that you are viewing the correct folio. A reservation can have multiple folios — each has its own balance. Also check that the payment was not voided.

**Can I transfer a charge to a company or travel agent folio?**
Yes — use **Transfer** and search for the company or travel agent reservation/profile. Routing can also be set up to do this automatically.

**How do I handle an overpayment?**
If the balance is negative (overpayment), add a negative payment (refund) to bring it to zero before checkout.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Charge fails to post** | Transaction code inactive, or reservation not In-House, or not logged in to cash register. | Log in to cash register. Ensure transaction code is active. Reservation must be In-House. |
| **Payment fails** | Payment type inactive or amount issue. | Ensure payment type is active in Configuration → Cashiering. |
| **Cannot void** | Item locked after night audit, or missing void permission. | Ask your administrator to grant void permission. For post-audit corrections, follow your property's policy. |
| **Split/Transfer not available** | You may lack the required permission, or the item is voided. | Ask your administrator to grant the split/transfer permission. Voided items cannot be split or transferred. |
| **Print Folio shows blank** | No transactions on the selected folio, or folio number not selected. | Ensure the correct folio is selected and has transactions. |
| **Checkout button disabled** | Reservation not In-House, or missing checkout permission. | Confirm reservation status is In-House. Ask your administrator to grant checkout permission. |

## See also

- [Cashiering → Transaction](/docs/operations/cashiering/transaction) — Cashier workspace with in-house list.
- [Cashiering → Room Routing](/docs/operations/cashiering/room-routing) — Property-wide routing rules.
- [Night Audit](/docs/operations/night-audit) — Post room charges and close the business date.
- [Reports → Billing](/docs/operations/reports/billing) — Revenue and payment reports.
- [Reservations](/docs/operations/reservations/overview) — Reservation management.
