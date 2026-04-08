---
sidebar_position: 1
---

# All Reservations

The **All Reservations** list shows every booking. Use it to search, filter, create, edit, and manage reservations.

## Access

From the sidebar: **Reservation**. The main list opens by default.

## List Columns

Typical columns include: Reservation ID, Guest Name, Room Type, Room Number, Arrival Date, Departure Date, Nights, Status, Rate Amount, Reservation Type, Source, Market.

Use the **search bar** and **filters** to narrow results by guest name, confirmation number, dates, status, room type, source, market, and more.

## Creating a New Reservation

Click **New Reservation**. The form has three steps:

### Step 1 — Guest Info

Search for an existing individual profile or enter guest details manually.

| Field | Required | Description |
|-------|----------|-------------|
| Guest Search | — | Search existing individual profiles by name. Selecting a profile auto-fills the fields below. |
| Title | No | Salutation (Mr, Mrs, Ms, Dr, etc.). |
| First Name | No | Guest's first name. |
| Middle Name | No | Guest's middle name. |
| Last Name | Yes | Guest's last name. |
| Email | No | Guest's email. |
| Phone | Conditional | Required if the selected reservation type has **Phone Required** enabled. |
| NRC | No | National Registration Card number. |
| Nationality | No | From Nationalities setup. |
| Country | No | From Countries setup. |
| VIP Status | No | From VIP Levels setup. |

**Additional Guests** — Click **Add Another Guest** to add more guests to the same reservation. Each additional guest can be linked to an existing profile or entered manually. Use the action menu on each guest row to **Make Primary Guest** (swap with the primary) or **Remove Guest**.

**Travel Agent / Company** — Below the guest fields, assign a Travel Agent profile and/or Company Profile as payer or organiser.

### Step 2 — Booking Info

Two sections: Stay Information and Geographical Data.

**Stay Information:**

| Field | Required | Description |
|-------|----------|-------------|
| Arrival Date | Yes | Check-in date. Defaults to the current business date. Cannot be before the business date. |
| Number of Nights | No | Auto-calculates departure date. |
| Departure Date | Yes | Check-out date. Auto-calculated from arrival + nights. |
| Room Type | No | Select the room type. Filters available rooms and rate codes. |
| Rate Code | No | Rate plan for the stay. Options depend on the selected room type and arrival date. |
| Room Number | No | Specific room. Disabled when Number of Rooms > 1. |
| Number of Rooms | No | For multi-room bookings. When > 1, room number is not assigned individually. |
| No. of Adults | No | Number of adults. Affects rate calculation if rate has per-adult pricing. |
| Rate Amount | No | Nightly rate. Auto-filled from rate code selection. |
| Total Amount | No | Calculated: rate × nights. |
| Daily Rate | No | Click **View Daily Rate** to set a custom rate per night (overrides the flat rate). |
| Package | No | Package selection (currently read-only; set via rate code). |
| Reservation Type | Yes | Type of reservation (e.g. Regular, Walk-In, Group). Controls required fields (phone, credit card, deposit, arrival time). |
| Deposit Amount | Conditional | Required if reservation type has **Deposit Required** enabled. |
| Payment Type | No | How the guest will pay (cash, card, etc.). May trigger credit card requirement. |
| Credit Card Number | Conditional | Required if reservation type or payment type requires it. Masked by default. |
| ETA (Estimated Arrival Time) | Conditional | Required if reservation type has **Arrival Time Required** enabled. |
| ETD (Estimated Departure Time) | No | Expected departure time. |

**Geographical Data:**

| Field | Description |
|-------|-------------|
| Market | Market segment for the booking — from [Markets](/docs/configuration/rate-setup/markets) setup. |
| Source | Booking source (e.g. Direct, OTA, Travel Agent) — from [Sources](/docs/configuration/rate-setup/sources) setup. |
| Purpose of Stay | Reason for the visit — from [Purpose of Stay](/docs/configuration/reservation-setup/purpose-of-stay) setup. |

**Transportation** — Click **Add Transportation Info** to expand the transportation step (optional).

### Step 3 — Transportation Info (Optional)

Only shown if you clicked **Add Transportation Info** in Step 2.

| Field | Description |
|-------|-------------|
| Pick Up Required | Yes/No toggle. Enables pickup detail fields. |
| Pickup Location | Where to pick up the guest. |
| Pick Up Time | Time of pickup. |
| Pickup Transportation Type | Vehicle/transport type — from [Transportation Types](/docs/configuration/general-setup/transportation-types) setup. |
| Pickup Transport Number | Flight number, train number, etc. |
| Drop Off Required | Yes/No toggle. Enables drop-off detail fields. |
| Drop-off Location | Where to drop off the guest. |
| Drop Off Time | Time of drop-off. |
| Dropoff Transportation Type | Vehicle/transport type. |
| Dropoff Transport Number | Flight number, train number, etc. |

## Editing a Reservation

Open a reservation from the list (click the row). The detail page shows the same three-step form in view mode. Click **Edit** to make changes.

**Note for in-house reservations:** Arrival date and room type are locked while the guest is checked in. To move the guest to another room, use **Room Move** from the In-House list. Nights, departure date, and rate amount remain editable.

## Reservation Detail — Activity Panel

On the Booking Info step of an existing reservation, an **Activity** card shows:

| Button | Description |
|--------|-------------|
| Alerts | View and manage reservation alerts (shown as warning banners at the top of the reservation). |
| Comments | Internal comments/notes on the reservation. |
| Messages | Guest-facing messages linked to the reservation. |

Each button shows a count badge when items exist.

## Reservation Actions

From the reservation detail header, available actions depend on the current status and your permissions:

| Action | When Available | Description |
|--------|---------------|-------------|
| Check In | Status: Reserved/Confirmed | Moves the reservation to In-House. Room must be Vacant Clean. |
| Check Out | Status: In-House | Moves the reservation to Checked Out. Folio balance should be settled first. |
| Cancel | Status: Reserved/Confirmed | Cancels the reservation. Requires a cancellation reason. |
| Waitlist | — | Moves to waitlist status. |
| Print Registration Form | Any | Prints the guest registration form. |
| Print Confirmation Letter | Any | Prints the booking confirmation letter. |
| Open Billing | In-House | Opens the folio in Cashiering → Transaction. |

## Confirmation Letter and Registration Form

From the reservation detail, you can print:
- **Confirmation Letter** — Sent to the guest to confirm the booking.
- **Registration Form** — Signed by the guest at check-in.

## Group Reservations

Reservations can belong to a **Group**. Group reservations share a group ID and group name. The first reservation in the group holds the deposit; subsequent group members do not require a separate deposit. Group management is available from the reservation list.

## Daily Rate Override

On the Booking Info step, click **View Daily Rate** to open the Daily Rate modal. This lets you set a custom rate for each individual night of the stay, overriding the flat rate code amount. The total is recalculated automatically.

## See also

- [Arrivals](/docs/operations/reservations/arrivals)
- [Departures](/docs/operations/reservations/departures)
- [Waitlist](/docs/operations/reservations/waitlist)
- [Cancellations](/docs/operations/reservations/cancellations)
- [Front Desk → Room Plan](/docs/operations/front-desk/room-plan)
- [Cashiering → Transaction](/docs/operations/cashiering/transaction)
- [Housekeeping → Room Chart](/docs/operations/housekeeping/room-chart)
