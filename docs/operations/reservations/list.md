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
| Market | Market segment for the booking — from [Markets](/configuration/rate-setup/markets) setup. |
| Source | Booking source (e.g. Direct, OTA, Travel Agent) — from [Sources](/configuration/rate-setup/sources) setup. |
| Purpose of Stay | Reason for the visit — from [Purpose of Stay](/configuration/reservation-setup/purpose-of-stay) setup. |
| Currency | Currency for the rate/deposit amounts. Auto-set from the hotel's default currency when the reservation is created; not normally changed on the form. |

**Transportation** — Click **Add Transportation Info** to expand the transportation step (optional).

### Step 3 — Transportation Info (Optional)

Only shown if you clicked **Add Transportation Info** in Step 2.

| Field | Description |
|-------|-------------|
| Pick Up Required | Yes/No toggle. Enables pickup detail fields. |
| Pickup Location | Where to pick up the guest. |
| Pick Up Time | Time of pickup. |
| Pickup Transportation Type | Vehicle/transport type — from [Transportation Types](/configuration/general-setup/transportation-types) setup. |
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

On the Booking Info step of an existing reservation, an **Activity** card shows three buttons, each with a count badge when items exist. The buttons are enabled while the reservation is in **Edit** mode.

| Button | Description |
|--------|-------------|
| Alert | View and manage [alert codes](#alerts) attached to the reservation (shown as warning banners at the top of the reservation). |
| Comment | Internal [comments/notes](#comments-and-messages) on the reservation, not visible to the guest. |
| Message | [Guest-facing messages](#comments-and-messages) logged against the reservation, e.g. a phone message taken for the guest. |

### Alerts

Alert codes flag something staff should notice about a reservation (VIP, allergy, do-not-disturb, etc.) — the available codes are set up in [Configuration → Alert Codes](/configuration/reservation-setup/alert-codes). To attach or remove an alert on a reservation:

1. Open the reservation in **Edit** mode and click **Alert** on the Activity card.
2. Select an alert code to attach it, or remove one already attached.
3. Save. Attached alerts appear as banners at the top of the reservation and the Alert count badge updates.

A reservation can carry more than one alert code at a time. Remove an alert once it no longer applies.

### Comments and Messages

**Comments** are internal notes about the reservation (e.g. billing instructions, housekeeping notes) that guests never see. **Messages** record guest-facing communication, such as a phone message taken for the guest while they were out — messages can be printed for the guest (see [Message and Deposit Print](#message-and-deposit-print)).

To add a comment or message:

1. Open the reservation in **Edit** mode and click **Comment** or **Message** on the Activity card.
2. For a message, enter who it's from, a phone number (if applicable), and the message content. For a comment, enter the note content.
3. Save. The entry is added to the list and the count badge updates.

To remove an entry, open the Comment or Message panel and delete it.

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
| Move Back | In-House or Checked Out | Requires the **Move Back** permission. Reverts a checked-in reservation to Reserved/Due In, or a checked-out reservation back to In-House. Use to correct a mistaken check-in/check-out. |
| Open Billing | In-House | Opens the folio in Cashiering → Transaction. |

## Confirmation Letter, Registration Form, and Registration Card

From the reservation detail, you can print:
- **Confirmation Letter** — Sent to the guest to confirm the booking.
- **Registration Form** — A pre-filled (or blank) check-in document; see [Registration Form](/operations/reservations/registration-form).
- **Registration Card** — The editable, signed check-in card stored against the reservation, captured with an on-screen signature pad; see [Registration Card](/operations/reservations/registration-card).

## Message and Deposit Print

From the reservation detail, two additional documents can be printed:

| Document | Contents | When to Use |
|----------|----------|--------------|
| Message Print | A printable list of all guest messages logged on the reservation (from, phone, date/time, content). | Hand a printed copy of phone/guest messages to the guest, e.g. at check-in or when they return to the front desk. |
| Deposit Print (Payment Receipt) | A receipt of payments recorded against the reservation, with a guest-signature line. | Print a receipt for the guest after taking a deposit or other payment on the reservation. |

Both are generated from the reservation detail page and open as a printable PDF.

## Guest Record

From the reservation list, use the guest record action on a row (subject to permission) to open the **Guest Record** modal — a summary of the guest's profile details plus their stay history (past and current reservations at the property). Use **Print** in the modal to print the guest record.

## Group Reservations

Reservations can belong to a **Group**. Group reservations share a group ID and group name, and each member has a sequence number within the group. The first reservation in the group holds the deposit; subsequent group members do not require a separate deposit.

Group records are managed on their own screen — see [Reservation Groups](/operations/reservations/groups) for creating, editing, and deleting groups, and for adding reservations to a group.

## Room Type Detach

**Room Type Detach** permanently removes rooms from sellable inventory for a room type over a date range, without creating a normal guest reservation. It applies only when the selected **Reservation Type** has inventory detachment enabled in Configuration — for example, to block rooms for maintenance or long-term out-of-order use directly from the reservation flow. If the reservation type does not require detachment, no inventory change happens. Because the effect is a permanent inventory reduction (not a room block that clears when a reservation is cancelled), use it only for cases that should not free up automatically.

## Daily Rate Override

On the Booking Info step, click **View Daily Rate** to open the Daily Rate modal. This lets you set a custom rate for each individual night of the stay, overriding the flat rate code amount. The total is recalculated automatically.

Daily rates are stored **per night** of the stay. When custom daily rates are set, the reservation's overall **Rate Amount** is derived from the first night's per-adult rate, and each night keeps its own amount. During Night Audit, room charges are posted to the folio using each night's stored daily rate (rather than a single flat rate repeated every night), so a change made in the Daily Rate modal directly affects what is billed for that specific night. Clearing the daily rates removes the per-night overrides and the reservation reverts to billing at the flat rate/rate code amount.

## See also

- [Arrivals](/operations/reservations/arrivals)
- [Departures](/operations/reservations/departures)
- [Waitlist](/operations/reservations/waitlist)
- [Cancellations](/operations/reservations/cancellations)
- [Reservation Groups](/operations/reservations/groups)
- [Registration Form](/operations/reservations/registration-form)
- [Registration Card](/operations/reservations/registration-card)
- [Front Desk → Room Plan](/operations/front-desk/room-plan)
- [Cashiering → Transaction](/operations/cashiering/transaction)
- [Housekeeping → Room Chart](/operations/housekeeping/room-chart)
- [Configuration → Alert Codes](/configuration/reservation-setup/alert-codes)
