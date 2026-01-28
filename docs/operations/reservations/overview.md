---
sidebar_position: 0
---

# Reservations Overview

The **Reservation** module is used to create, view, edit, and manage guest reservations. It is linked to profiles (individual, company, travel agent), rooms, rates, and billing.

:::tip **Having a problem?**  
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules, see the main [Troubleshooting](/docs/general/troubleshooting) page — it links to module-specific FAQs and troubleshooting sections.
:::

In the app, **Reservation** has views or tabs such as:

| View / Tab | Purpose |
|------------|---------|
| [All Reservations](/docs/operations/reservations/list) | Full reservation list; search, filters, create, edit, check in/out. |
| [Arrivals](/docs/operations/reservations/arrivals) | Guests arriving on a selected date. |
| [Departures](/docs/operations/reservations/departures) | Guests departing on a selected date. |
| [Waitlist](/docs/operations/reservations/waitlist) | Requests when no suitable room or rate is available; convert to reservation when space opens. |
| [Cancellations](/docs/operations/reservations/cancellations) | List and filter cancelled reservations; cancellation reasons. |

## Access

From the sidebar, click **Reservation**. You see the reservation list and optionally tabs or links for **Waitlist** and **Cancellations**. What you see depends on **configuration** and **user permissions**.

## Statuses and Workflow

Reservations move through statuses such as:

- **Reserved / Confirmed** — Booking is held.
- **Checked In** — Guest is in-house; charges post to folio.
- **Checked Out** — Stay is complete; balance should be settled.
- **Cancelled** — Booking is no longer active.

Check-in and check-out are often done from **Front Desk** (In-House, Room Plan, Checked-Out) or from the reservation detail actions.

## Common FAQs

**Why don't I see the Reservation menu?**  
Your user may not have reservation permission. Ask your administrator to grant access or add you to a group that can view reservations.

**How do I check in a guest from the reservation?**  
Open the reservation, ensure the room is ready in Housekeeping (e.g. Vacant Clean) and the status allows check-in, then use **Check in** (or equivalent). The guest will appear in Front Desk → In-House.

**Where is the waitlist?**  
If your property uses waitlist, a **Waitlist** tab or link appears on the Reservation screen. Use it when no suitable room or rate is available; you can convert an entry to a full reservation when space opens.

**Can I cancel and recreate a reservation instead of editing dates?**  
You can, but you may lose history and create a new confirmation number. Prefer editing the reservation when only dates or room change; use cancellation when the stay is truly cancelled.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Room type not available** | Dates fully booked, room out of order, or rate/availability not set for that date. | Check dates and room status (e.g. out of order). Confirm rate/availability in Configuration for that room type and date. |
| **Cannot check in** | Reservation not in a check-in-allowed status, or room not ready. | Ensure status is confirmed (or equivalent). In Housekeeping, set the room to Vacant Clean / Ready before check-in. |
| **Cannot change room** | Target room occupied or not sellable; missing room-move permission or reason. | Verify target room is available and sellable. Check permissions and that a room-move reason exists in configuration. |
| **Guest or payer not in list** | Profile may not exist or you are searching the wrong type (individual vs company). | Search in the correct profile type, or create a new profile from the reservation form. |
| **Cancellation reason required** | Configuration requires a reason when cancelling. | Select a cancellation reason from the list provided; add new reasons in Configuration if needed. |

For general issues, see [Troubleshooting](/docs/general/troubleshooting).

## See also

- [Profiles](/docs/operations/profiles/overview) — Individual, company, and travel agent profiles used as guests or payers.
- [Front Desk](/docs/operations/front-desk/overview) — Room plan, in-house list, checked-out list.
- [Cashiering](/docs/operations/cashiering/overview) — Post charges, take payments, view folios.
- [Configuration overview](/docs/configuration/overview) — Reservation types, sources, room types, rates, cancellation reasons, etc.
