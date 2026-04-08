---
sidebar_position: 0
---

# Reservations Overview

The **Reservation** module is used to create, view, edit, and manage guest reservations. It connects to guest profiles, rooms, rates, billing, and housekeeping.

:::tip **Having a problem?**
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules, see the main [Troubleshooting](/docs/general/troubleshooting) page.
:::

## Views

| View | Purpose |
|------|---------|
| [All Reservations](/docs/operations/reservations/list) | Full list — search, filter, create, edit, check in/out. |
| [Arrivals](/docs/operations/reservations/arrivals) | Guests arriving on a selected date. |
| [Departures](/docs/operations/reservations/departures) | Guests departing on a selected date. |
| [Waitlist](/docs/operations/reservations/waitlist) | Requests held when no room or rate is available. |
| [Cancellations](/docs/operations/reservations/cancellations) | Cancelled reservations with reasons. |
| [Confirmation Letter](/docs/operations/reservations/confirmation-letter) | Printable booking confirmation for the guest. |
| [Registration Form](/docs/operations/reservations/registration-form) | Guest registration card for check-in signature. |

## Reservation Statuses

| Status | Meaning |
|--------|---------|
| Reserved / Confirmed | Booking is held; guest not yet arrived. |
| In-House | Guest has checked in; charges post to folio. |
| Checked Out | Stay is complete; balance should be settled. |
| Cancelled | Booking is no longer active. |
| Waitlist | Request held pending availability. |
| No Show | Guest did not arrive on the arrival date. |

## Workflow

1. **Create** a reservation (from the list, Room Plan, or Room Chart).
2. **Assign** a room when available.
3. **Check in** the guest on arrival — status moves to In-House.
4. Charges post to the **folio** during the stay.
5. **Check out** the guest on departure — settle the folio balance.
6. Night audit closes the business date and posts room charges.

Check-in and check-out can be done from the reservation detail, **Front Desk → In-House**, or **Front Desk → Room Plan**.

## Common FAQs

**Why don't I see the Reservation menu?**
Your user may not have reservation permission. Ask your administrator to grant access.

**How do I check in a guest?**
Open the reservation, ensure the room is Vacant Clean in Housekeeping, then use the **Check In** action. The guest appears in Front Desk → In-House.

**How do I add additional guests to a reservation?**
On the reservation form, Step 1 (Guest Info), click **Add Another Guest**. Each additional guest can be linked to an existing individual profile or entered manually.

**Where is the waitlist?**
The **Waitlist** tab appears on the Reservation screen. Use it when no suitable room or rate is available; convert to a full reservation when space opens.

**Can I cancel and recreate instead of editing dates?**
Prefer editing the reservation when only dates or room change. Use cancellation when the stay is truly cancelled — cancellation creates a record with a reason and cannot be undone.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Room type not available** | Dates fully booked, room out of order, or rate not set for those dates. | Check room status in Housekeeping. Confirm rate/availability in Configuration for that room type and date. |
| **Cannot check in** | Reservation not in a check-in-allowed status, or room not ready. | Ensure status is Reserved/Confirmed. Set the room to Vacant Clean in Housekeeping before check-in. |
| **Cannot change room** | Target room occupied or not sellable; missing room-move permission or reason. | Verify target room is available. Check permissions and that a room-move reason exists in Configuration. |
| **Guest or payer not in list** | Profile may not exist or wrong type searched. | Search in the correct profile type (individual/company/travel agent), or create a new profile. |
| **Cancellation reason required** | Configuration requires a reason when cancelling. | Select a cancellation reason from the list; add new reasons in Configuration → Reservation Setup. |
| **Deposit amount required** | Reservation type is configured to require a deposit. | Enter a deposit amount in the Booking Info step. |
| **Phone number required** | Reservation type is configured to require a phone number. | Enter the guest's phone number in the Guest Info step. |
| **Credit card required** | Reservation type or payment type requires a credit card. | Enter the credit card number in the Booking Info step. |

## See also

- [Profiles](/docs/operations/profiles/overview) — Individual, company, and travel agent profiles.
- [Front Desk](/docs/operations/front-desk/overview) — Room plan, in-house list, checked-out list.
- [Cashiering](/docs/operations/cashiering/overview) — Post charges, take payments, view folios.
- [Housekeeping](/docs/operations/housekeeping/overview) — Room status before check-in.
- [Night Audit](/docs/operations/night-audit) — Close the business date and post room charges.
- [Configuration](/docs/configuration/overview) — Reservation types, sources, room types, rates, cancellation reasons.
