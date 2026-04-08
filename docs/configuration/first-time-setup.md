---
sidebar_position: 0
---

# First-Time Property Setup

Use this checklist when setting up a **new property** (new database) in Hotelium PMS. Follow the steps in order — some items depend on others being created first.

:::tip
Complete each section before moving to the next. You can always come back to add more data later, but the items marked **required** must exist before you can create reservations or post charges.
:::

---

## Step 1 — General Configuration

Start here. Everything else depends on these basics.

| Task | Where | Required |
|------|-------|----------|
| Enter hotel name, address, phone, email, logo | [Hotel Information](/docs/configuration/general-setup/hotel-information) | Yes |
| Set the opening business date | [System Date](/docs/configuration/general-setup/system-date) | Yes |
| Create departments (Front Desk, Housekeeping, Engineering, etc.) | [Departments](/docs/configuration/general-setup/departments) | Yes |
| Create job titles | [Job Titles](/docs/configuration/general-setup/job-titles) | No |
| Create user groups with correct permissions | [User Groups](/docs/configuration/general-setup/user-groups) | Yes |
| Create user accounts and assign to groups | [Users](/docs/configuration/general-setup/users) | Yes |
| Activate the license | [License](/docs/configuration/general-setup/license) | Yes |
| Set up cash registers (one per cashier station) | [Cash Register Setup](/docs/configuration/general-setup/cash-register-setup) | Yes |
| Add transportation types (if used) | [Transportation Types](/docs/configuration/general-setup/transportation-types) | No |
| Add services (if used) | [Services](/docs/configuration/general-setup/services) | No |
| Set up Track It groups, types, actions, locations (for Lost & Found) | [Track It](/docs/configuration/general-setup/trackit) | No |

---

## Step 2 — Profile Setup

Reference data used on guest, company, and travel agent profiles.

| Task | Where | Required |
|------|-------|----------|
| Add regions and countries | [Regions](/docs/configuration/profile-setup/regions), [Countries](/docs/configuration/profile-setup/countries) | Yes |
| Add states, districts, cities, postal codes | [States](/docs/configuration/profile-setup/states), [Districts](/docs/configuration/profile-setup/districts), [Cities](/docs/configuration/profile-setup/cities), [Postal Codes](/docs/configuration/profile-setup/postal-codes) | No |
| Add nationalities | [Nationalities](/docs/configuration/profile-setup/nationalities) | Yes |
| Add titles (Mr, Mrs, Ms, Dr, etc.) | [Titles](/docs/configuration/profile-setup/titles) | Yes |
| Add languages | [Languages](/docs/configuration/profile-setup/languages) | No |
| Add VIP levels | [VIP Levels](/docs/configuration/profile-setup/vip-levels) | No |
| Add loyalty tiers | [Loyalty Tiers](/docs/configuration/profile-setup/loyalty-tiers) | No |
| Add visa types | [Visa Types](/docs/configuration/profile-setup/visa-type) | No |
| Add preferences | [Preferences](/docs/configuration/profile-setup/preferences) | No |
| Add inactive reasons | [Inactive Reason](/docs/configuration/profile-setup/inactive-reason) | No |

---

## Step 3 — Reservation Setup

Rooms and all reference data needed to create reservations.

| Task | Where | Required |
|------|-------|----------|
| Create room classes | [Room Classes](/docs/configuration/reservation-setup/room-classes) | Yes |
| Create room types | [Room Types](/docs/configuration/reservation-setup/room-types) | Yes |
| Create rooms (assign to room type and floor) | [Rooms](/docs/configuration/reservation-setup/rooms) | Yes |
| Create reservation types | [Reservation Types](/docs/configuration/reservation-setup/reservation-types) | Yes |
| Create reservation methods | [Reservation Methods](/docs/configuration/reservation-setup/reservation-methods) | Yes |
| Create booking types | [Booking Types](/docs/configuration/reservation-setup/booking-types) | No |
| Create business segments | [Business Segments](/docs/configuration/reservation-setup/business-segments) | No |
| Add floor plans (if using visual floor plan) | [Floor Plans](/docs/configuration/reservation-setup/floor-plans) | No |
| Add special requests | [Special Requests](/docs/configuration/reservation-setup/special-requests) | No |
| Add room status types | [Room Status](/docs/configuration/reservation-setup/room-status) | Yes |
| Add room move reasons | [Room Move](/docs/configuration/reservation-setup/room-move) | No |
| Add trace codes, origin codes, alert codes | [Trace Codes](/docs/configuration/reservation-setup/trace-codes), [Origin Codes](/docs/configuration/reservation-setup/origin-codes), [Alert Codes](/docs/configuration/reservation-setup/alert-codes) | No |
| Add cancellation, waitlist, lost, refused reasons | [Cancellation Reasons](/docs/configuration/reservation-setup/cancellation-reasons), [Waitlist Reasons](/docs/configuration/reservation-setup/waitlist-reasons), [Lost Reasons](/docs/configuration/reservation-setup/lost-reasons), [Refused Reasons](/docs/configuration/reservation-setup/refused-reasons) | Yes |
| Add purpose of stay codes | [Purpose of Stay](/docs/configuration/reservation-setup/purpose-of-stay) | No |
| Add discount types | [Discount Reasons](/docs/configuration/reservation-setup/discount-reasons) | No |

---

## Step 4 — Rate Setup

Rates and pricing. Rooms must exist before you can attach rates to room types.

| Task | Where | Required |
|------|-------|----------|
| Add currencies | [Currencies](/docs/configuration/rate-setup/currencies) | Yes |
| Add exchange rates (if accepting foreign currency) | [Exchange Rates](/docs/configuration/rate-setup/exchange-rates) | No |
| Add market groups and market codes | [Market Groups](/docs/configuration/rate-setup/market-groups), [Markets](/docs/configuration/rate-setup/markets) | Yes |
| Add source groups and source codes | [Source Groups](/docs/configuration/rate-setup/source-groups), [Sources](/docs/configuration/rate-setup/sources) | Yes |
| Add rate classes and rate categories | [Rate Classes](/docs/configuration/rate-setup/rate-classes), [Rate Categories](/docs/configuration/rate-setup/rate-categories) | Yes |
| Create rate plans and attach to room types | [Rates](/docs/configuration/rate-setup/rates) | Yes |
| Create packages (if offering room+breakfast, etc.) | [Packages](/docs/configuration/rate-setup/packages) | No |

---

## Step 5 — Cashiering Setup

Transaction codes and payment setup. Must be done before posting any charges.

| Task | Where | Required |
|------|-------|----------|
| Create transaction code groups and sub-groups | [Transaction Code Groups](/docs/configuration/cashiering-setup/transaction-code-groups), [Sub-Groups](/docs/configuration/cashiering-setup/transaction-code-sub-groups) | Yes |
| Create transaction codes (room, tax, F&B, etc.) | [Transaction Codes](/docs/configuration/cashiering-setup/transaction-codes) | Yes |
| Create payment types (cash, card, bank transfer, etc.) | [Payment Types](/docs/configuration/cashiering-setup/payment-types) | Yes |
| Create cashiers and link to user accounts | [Cashiers](/docs/configuration/cashiering-setup/cashiers) | Yes |
| Set up routing codes (if using charge routing) | [Routing Codes](/docs/configuration/cashiering-setup/routing-codes) | No |
| Set up service charges (tax %, service charge %) | [Service Charges](/docs/configuration/cashiering-setup/service-charges) | Yes |
| Add articles (if using article-based billing) | [Articles](/docs/configuration/cashiering-setup/articles) | No |
| Add cashiering exchange rates | [Exchange Rates (Cashiering)](/docs/configuration/cashiering-setup/exchange-rates) | No |

---

## Step 6 — Housekeeping Setup

Required before using the Housekeeping module.

| Task | Where | Required |
|------|-------|----------|
| Create housekeeping sections | [Sections](/docs/configuration/housekeeping-setup/sections) | No |
| Create housekeeping attendants | [Attendances](/docs/configuration/housekeeping-setup/attendances) | No |
| Create housekeeping task types | [Tasks](/docs/configuration/housekeeping-setup/tasks) | No |
| Add out-of-order/service reasons | [Out of Order Reasons](/docs/configuration/housekeeping-setup/out-of-order-reasons) | Yes |
| Add room maintenance reasons | [Room Management](/docs/configuration/housekeeping-setup/room-management) | No |
| Add lost & found reasons | [Lost & Found Reasons](/docs/configuration/housekeeping-setup/lost-and-found-reasons) | No |
| Add maintenance types | [Management Types](/docs/configuration/housekeeping-setup/management-types) | No |

---

## Step 7 — Account Receivables Setup

Only needed if your property uses direct billing to companies or travel agents.

| Task | Where | Required |
|------|-------|----------|
| Add account types | [Account Types](/docs/configuration/account-receivables-setup/account-types) | No |
| Add aging levels | [Aging Levels](/docs/configuration/account-receivables-setup/aging-levels) | No |
| Add reminder cycles | [Reminder Cycles](/docs/configuration/account-receivables-setup/reminder-cycles) | No |
| Add restrict reasons | [Restrict Reasons](/docs/configuration/account-receivables-setup/restrict-reasons) | No |

---

## Step 8 — Verify and Test

Before going live, run through this checklist:

- [ ] Log in as a front desk user — can you see Reservations and Front Desk?
- [ ] Log in as a cashier — can you log in to a cash register and open Transaction?
- [ ] Create a test reservation — does it save with a room and rate?
- [ ] Check in the test reservation — does the status change to In-House?
- [ ] Post a room charge — does it appear on the folio?
- [ ] Post a payment — does the balance reach zero?
- [ ] Check out the test reservation — does the room go Vacant Dirty?
- [ ] Run night audit — does the business date advance?
- [ ] Check a report — does data appear in the Billing or Night Audit report?

---

## Common Setup Mistakes

| Mistake | Fix |
|---------|-----|
| Created rooms before room types | Create room types first, then rooms |
| Created rates before room types exist | Room types must exist before attaching rates |
| Cashier cannot log in to register | Link the user to a cashier in Cashiering Setup → Cashiers, and ensure the cash register exists |
| Transaction code not appearing in folio | Ensure the transaction code is active and not a payment-only code |
| Night audit blocked by open shifts | Close all cashier shifts before running night audit |
| Business date is wrong | Set the correct opening date in System Date before creating any reservations |

## See also

- [Configuration Overview](/docs/configuration/overview) — Full configuration reference.
- [Roles and Permissions](/docs/general/roles-and-permissions) — Setting up user access.
- [Workflows](/docs/operations/workflows) — End-to-end operational flows once setup is complete.
