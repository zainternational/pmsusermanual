---
sidebar_position: 6
---

# Post Room Charge

**Post Room Charge** manually posts room revenue for a specific reservation and date. Use it when room charges were not posted automatically by night audit, or to post charges for a specific past date.

:::tip **Having a problem?**
See [Cashiering Overview](/docs/operations/cashiering/overview) for common FAQs and troubleshooting.
:::

## Access

Post Room Charge is available from:
- **Cashiering → Transaction** — click **Post Room Charge** in the transaction history card.
- **Billing** — click **Post Room Charge** in the folio management section.
- **Night Audit** page — via the Post Room Charge button (if visible).

You must be logged in to a cash register and the reservation must be In-House.

## When to Use

- A night audit ran but room charges were not posted for a specific reservation (e.g. the reservation had no room assigned at audit time).
- You need to post a room charge for a past date that was missed.
- You want to manually post room charges before running night audit.

## How It Works

1. Open the reservation in **Cashiering → Transaction** or **Billing**.
2. Click **Post Room Charge**.
3. The Post Room Charge modal opens showing:
   - The reservation details (guest name, room, rate).
   - A list of dates with their posting status — which dates already have room charges posted and which are missing.
4. Select the **date** to post charges for (or select multiple dates if available).
5. Confirm the **rate** and **transaction code** for the room charge.
6. Click **Post**. The room charge is added to the folio for the selected date.

## What Gets Posted

When you post a room charge:
- A **BillingItem** is created on the reservation's folio with the room rate transaction code.
- Service charge and tax are calculated automatically based on the transaction code configuration.
- The `posted_date` is set to the selected date.
- The folio balance updates immediately.

## Already-Posted Dates

The modal shows which dates already have room charges. You cannot post a duplicate room charge for a date that already has one — the system prevents double-posting.

## Common FAQs

**Why is Post Room Charge greyed out?**
You must be logged in to a cash register. The reservation must be In-House. You also need the `post_room_charge` permission — ask your administrator to grant it.

**Night audit already ran but room charges are missing for some reservations.**
This can happen if the reservation had no room or rate assigned at audit time. Assign the room and rate, then use Post Room Charge to post the missing charges.

**Can I post room charges for a checked-out reservation?**
Post Room Charge is typically available for In-House reservations. For checked-out reservations with missing charges, contact your administrator — corrections may need to be made via a manual adjustment.

**The rate shown is wrong.**
The rate comes from the reservation's daily rate setup. If the rate is incorrect, edit the reservation's rate first, then post the room charge.

## See also

- [Cashiering → Transaction](/docs/operations/cashiering/transaction) — Full folio management; Post Room Charge is available here.
- [Billing (Guest Folio)](/docs/operations/reservations/billing) — Folio management with Post Room Charge.
- [Night Audit](/docs/operations/night-audit) — Automatic room charge posting during night audit.
- [Configuration → Cashiering → Transaction Codes](/docs/configuration/cashiering-setup/transaction-codes) — Room charge transaction code setup.
