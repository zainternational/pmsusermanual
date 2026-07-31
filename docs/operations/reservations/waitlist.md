---
sidebar_position: 4
---

# Waitlist

**Waitlist** is not a separate booking queue — it is a **status you place on an existing reservation** when it can't be confirmed yet (no suitable room/rate available). There is no separate "waitlist request" record independent of a reservation; you must create the reservation first, then mark it Waitlist.

## Access

From the sidebar: **Reservation** → **Waitlist** tab. From an individual reservation, the action to place it on the waitlist is available from the reservation's actions.

## When to Use

Mark a reservation as waitlisted when:
- The requested room type is fully booked for the dates.
- The requested rate is closed or unavailable.
- You want to hold the guest's interest without a confirmed room.

## Placing a Reservation on the Waitlist

1. Create the reservation as normal (or open an existing one).
2. Use the waitlist action on that reservation.
3. Select a **Waitlist Reason** (from [Configuration → Reservation Setup → Waitlist Reasons](/configuration/reservation-setup/waitlist-reasons)) and an optional note.
4. Save. The reservation's status becomes **Waitlist** and it now appears on the **Waitlist** tab.

A reservation that is already on the waitlist cannot be waitlisted again.

## Moving Off the Waitlist

There is no dedicated "Convert" button. When a room or rate becomes available, open the reservation from [All Reservations](/operations/reservations/list) and edit it as normal (assign room/rate, change status) the same way you would edit any reservation — this updates its status off Waitlist.

The **Delete** action on the Waitlist tab only removes the waitlist record/reason — it does not change the reservation's status. Use it to clear a stale or mistaken waitlist entry.

## Waitlist List

The waitlist shows all waitlisted reservations with guest name, requested dates, room type, reason, and the date/user that placed it on the waitlist. Filter by reservation ID or active status to manage the queue.

## See also

- [All Reservations](/operations/reservations/list) — Full reservation list; converted waitlist entries appear here.
- [Reservations Overview](/operations/reservations/overview) — Statuses and workflow.
- [Configuration → Waitlist Reasons](/configuration/reservation-setup/waitlist-reasons) — Set up waitlist reason codes.
