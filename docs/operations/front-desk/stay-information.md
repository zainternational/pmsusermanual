---
sidebar_position: 4
---

# Room & Stay Information

These are not separate screens — they are two field groups on the **reservation form** (Room Plan cell click, Room Chart, or Reservations → New): **Room Information** (room, dates, rate) and **Stay Information** (market, source, purpose of stay, transportation). This page explains both. For the guest lists (currently in-house, departed), see [Room Plan](/operations/front-desk/room-plan), [In-House](/operations/front-desk/in-house), and [Checked-Out](/operations/front-desk/checked-out).

:::tip **Having a problem?**
See [Troubleshooting](#troubleshooting) below or the main [Troubleshooting](/general/troubleshooting) page.
:::

## Where it appears

When creating or editing a reservation, both sections appear in the **Booking Info** step of the reservation form.

## Room Information fields

| Field | Description |
|-------|-------------|
| Arrival Date | Check-in date. Cannot be earlier than the current business date. |
| Number of Nights | Length of stay. Changing this recalculates the departure date automatically. |
| Departure Date | Check-out date. Calculated from arrival date + nights, or can be set directly (recalculates nights). Cannot be earlier than arrival date. |
| Room Type | The type of room being booked (e.g. Standard, Deluxe). Required. Rate codes and rooms shown depend on the selected room type. |
| Rate Code | The rate plan applied to the stay. Options are filtered by the selected room type; select a room type first. |
| Room Number | The specific room assigned. Disabled until a room type is selected, and disabled automatically when Number of Rooms is more than 1. |
| Number of Rooms | How many rooms to book on this reservation. When set above 1, Room Number is cleared and left for later assignment. |
| Total Amount / Daily Rate | The calculated rate for the stay, based on number of adults; can be reviewed and adjusted per night via **View Daily Rate**. |
| Package | Any package bundled with the rate code. Read-only — populated automatically from the selected rate code. |
| Reservation Type | Required. Determines whether a deposit and/or credit card are required (see below). |
| Deposit Amount | Required only when the selected Reservation Type requires a deposit. |
| Payment Type | The payment method for the stay. |
| Credit Card Number | Enabled and required only when the payment type or reservation type requires a credit card. Masked after entry unless the user has permission to view full card numbers. |
| Estimated Time of Arrival (ETA) | Required only for reservation types that require an arrival time. |
| Estimated Time of Departure (ETD) | Optional. |

**In-house editing:** once a guest is checked in, Room Type, Rate Code, Room Number, and Reservation Type become read-only on the reservation form. To move an in-house guest to a different room of the same type, use **Room Move** on the [In-House](/operations/front-desk/in-house) list instead of this form.

## Stay Information fields

| Field | Required | Description |
|-------|----------|-------------|
| Market | No | The market segment for the stay. |
| Source | No | The booking source for the stay. |
| Purpose of Stay | No | Reason for the stay (e.g. Business, Leisure). |
| Transportation | No | Hidden by default. Click **Add Transportation Info** to reveal fields for arrival/departure transportation details for the guest. |

## How it's used

1. Select **Room Type** first — this determines which rate codes and rooms are available.
2. Select a **Rate Code**. If no room type is selected yet, or no rate codes exist for the chosen room type, a banner explains why the field is empty.
3. Choose a **Room Number**, or set **Number of Rooms** greater than 1 to book multiple rooms without assigning specific numbers up front.
4. Review the calculated **Total Amount**; use **View Daily Rate** to see or adjust the rate for each night of the stay.
5. Set **Reservation Type**, and complete **Deposit Amount** / **Credit Card Number** / **ETA** if required by that type.
6. In the Stay Information section, optionally set **Market**, **Source**, and **Purpose of Stay**.
7. Click **Add Transportation Info** if you need to record transportation details for the guest — this is optional and not shown by default.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Rate Code shows "No Room Type Selected"** | Room Type has not been chosen yet. | Select a Room Type first — rate codes are filtered by room type. |
| **Rate Code shows "No Rate Codes Available"** | No rate code is configured for the selected room type. | Set up a rate code for that room type in Configuration, or choose a different room type. |
| **Room Number is disabled** | Either no Room Type is selected yet, or Number of Rooms is set to more than 1. | Select a Room Type first. If booking multiple rooms, room numbers are assigned later rather than picked here. |
| **Package field is empty or not editable** | Package is set automatically based on the selected Rate Code and is not manually selectable. | Change the Rate Code if a different package is required. |
| **Room Type / Rate Code / Room Number are read-only** | The guest is already checked in (in-house). | Use **Room Move** on the In-House list to change rooms of the same type; other changes are not permitted after check-in. |
| **Deposit Amount / Credit Card Number is required and can't be skipped** | The selected Reservation Type or Payment Type requires it. | Provide the required value, or choose a Reservation/Payment Type that doesn't require it. |
| **Transportation fields aren't visible** | Transportation info is hidden by default. | Click **Add Transportation Info (Optional)** below the Stay Information fields to reveal them. |

## See also

- [Reservations Overview](/operations/reservations/overview) — Full reservation workflow, statuses, and other form steps.
- [Room Plan](/operations/front-desk/room-plan) — Create a reservation by clicking an available cell (pre-fills room, room type, and dates).
- [Configuration](/configuration/overview) — Set up room types, rate codes, and packages.
