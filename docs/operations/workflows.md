---
sidebar_position: 1
---

# End-to-End Workflows

This page describes two common **end-to-end workflows**: **check-in** (from reservation to in-house) and **end-of-day cashier and night audit**. Use them as reference when training staff or writing local procedures.

## Check-In Flow

From a confirmed reservation to an in-house guest with a ready room and open folio.

### 1. Have a reservation

- Guest has a **confirmed** (or equivalent) reservation for today’s arrival.
- Reservation shows correct **guest**, **room type** (or room), **dates**, and **rate**.

See [Reservations](/docs/operations/reservations/overview) to create or edit reservations.

### 2. Confirm room readiness

- In **Housekeeping**, ensure the assigned (or to-be-assigned) room is **Vacant Clean** or **Ready**.
- If the room is dirty or under maintenance, change status or assign another room.

See [Housekeeping](/docs/operations/housekeeping/overview).

### 3. Assign or confirm room (if needed)

- In **Reservation** or **Front Desk → Room plan**, assign a specific **room number** if the reservation only had a room type.
- Or use **Room plan** to see which room is allocated and that it is available.

See [Front Desk](/docs/operations/front-desk/overview).

### 4. Check in the guest

- Open the reservation (from **Reservation** list or **Front Desk → Room plan** or **In-house**).
- Use **Check in** (or equivalent). The reservation status becomes **In-house** (or **Checked in**).
- The guest is now **in-house** and room charges can post to the folio.

### 5. Open or confirm folio

- Go to **Cashiering → Transaction** (after cash register login if required).
- Select the reservation. The **folio** is used for all charges and payments during the stay.
- Post **room** and **tax** as per your property (e.g. at check-in or via night audit). Add any **deposit** or **advance payment** if required.

See [Cashiering](/docs/operations/cashiering/overview).

### Summary

```
Reservation (confirmed) → Room ready (Housekeeping) → Assign room → Check in → Folio open for charges/payments
```

---

## End-of-Day Cashier and Night Audit Flow

Closing the business day: cashier reconciliation, then night audit.

### 1. Close cashier activity

- Finish posting all **charges** and **payments** for the day.
- In **Cashiering → Cashier shift**, **close** the shift (or equivalent):
  - Declare **expected** vs **actual** cash (and other payment types if required).
  - Resolve any variance per your property’s policy.
  - Ensure all folios that should be settled for that day are handled.

See [Cashiering](/docs/operations/cashiering/overview).

### 2. Resolve exceptions (if any)

- In **Night Audit**, open the last run or **prepare** a new run.
- Review **exceptions** (e.g. open balances, high balance, missing data).
- Resolve critical exceptions before running the final audit (e.g. post missing room charges, correct rates, or document variances).

See [Night Audit](/docs/operations/night-audit).

### 3. Run night audit

- In **Night Audit**, start **Run night audit** (or equivalent).
- Confirm the **business date** to close (usually today).
- Start the run. The system will:
  - **Post room charges** for all in-house guests for that night.
  - **Advance the system (business) date** to the next day (if configured).
  - Generate **audit reports** and update statistics.

See [Night Audit](/docs/operations/night-audit).

### 4. Review audit results

- Open the **completed** audit run.
- Check **Overview**, **Revenue**, **Payments**, **Room status**, and **Exceptions**.
- Use **Reports** or **Guest ledger** for that date if you need to file or reconcile with accounting.

See [Reports](/docs/operations/reports/overview).

### 5. Back up or export (if required)

- Per your property’s policy, **back up** the database or **export** key reports (e.g. night audit summary, revenue, guest ledger) for the closed date.

### Summary

```
All charges/payments done → Close cashier shift → Fix critical exceptions → Run night audit → Review reports / backup
```

---

## See also

- [Reservations](/docs/operations/reservations/overview) — Creating and managing reservations
- [Front Desk](/docs/operations/front-desk/overview) — Room plan, in-house, checked-out
- [Cashiering](/docs/operations/cashiering/overview) — Transactions, shift, quick checkout
- [Housekeeping](/docs/operations/housekeeping/overview) — Room status and tasks
- [Night Audit](/docs/operations/night-audit) — Running audit and reviewing runs
- [Reports](/docs/operations/reports/overview) — Running and exporting reports
