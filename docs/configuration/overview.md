---
sidebar_position: 1
---

# Configuration Overview

**Configuration** is where you set up all reference data and options used across the PMS: rooms, rates, cashiering, profiles, housekeeping, and general settings. Access and visibility depend on **user permissions**.

:::tip **Having a problem?**  
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules (reservations, front desk, cashiering, housekeeping, night audit, dashboard, profiles), see the main [Troubleshooting](/docs/general/troubleshooting) page — it links to module-specific FAQs and troubleshooting sections.
:::

## Accessing Configuration

From the sidebar, go to **Configuration**. The PMS shows these top-level menus (names and order may match the application):

| Menu | Sub-items (screens you can open) |
|------|----------------------------------|
| **Reservation Setup** | [Room Classes](/docs/configuration/reservation-setup/room-classes), [Room Types](/docs/configuration/reservation-setup/room-types), [Rooms](/docs/configuration/reservation-setup/rooms), [Reservation Types](/docs/configuration/reservation-setup/reservation-types), [Reservation Methods](/docs/configuration/reservation-setup/reservation-methods), [Booking Types](/docs/configuration/reservation-setup/booking-types), [Business Segments](/docs/configuration/reservation-setup/business-segments), [Floor Plans](/docs/configuration/reservation-setup/floor-plans), [Special Requests](/docs/configuration/reservation-setup/special-requests), [Room Status](/docs/configuration/reservation-setup/room-status), [Room Move](/docs/configuration/reservation-setup/room-move), [Trace Codes](/docs/configuration/reservation-setup/trace-codes), [Origin Codes](/docs/configuration/reservation-setup/origin-codes), [Alert Codes](/docs/configuration/reservation-setup/alert-codes), [Discount Reasons](/docs/configuration/reservation-setup/discount-reasons), [Cancellation Reasons](/docs/configuration/reservation-setup/cancellation-reasons), [Waitlist Reasons](/docs/configuration/reservation-setup/waitlist-reasons), [Lost Reasons](/docs/configuration/reservation-setup/lost-reasons), [Refused Reasons](/docs/configuration/reservation-setup/refused-reasons), [Inactive Reasons](/docs/configuration/reservation-setup/inactive-reasons) |
| **Profile Setup** | [Preferences](/docs/configuration/profile-setup/preferences), [VIP Levels](/docs/configuration/profile-setup/vip-levels), [Loyalty Tiers](/docs/configuration/profile-setup/loyalty-tiers), [Titles](/docs/configuration/profile-setup/titles), [Languages](/docs/configuration/profile-setup/languages), [Nationalities](/docs/configuration/profile-setup/nationalities), [Regions](/docs/configuration/profile-setup/regions), [Countries](/docs/configuration/profile-setup/countries), [Territories](/docs/configuration/profile-setup/territories), [States](/docs/configuration/profile-setup/states), [Districts](/docs/configuration/profile-setup/districts), [Cities](/docs/configuration/profile-setup/cities), [Postal Codes](/docs/configuration/profile-setup/postal-codes), [Inactive Reason](/docs/configuration/profile-setup/inactive-reason) |
| **Rate Setup** | [Rate Setup](/docs/configuration/rate-setup/rate-setup), [Rate Classes](/docs/configuration/rate-setup/rate-classes), [Rate Categories](/docs/configuration/rate-setup/rate-categories), [Rates](/docs/configuration/rate-setup/rates), [Markets](/docs/configuration/rate-setup/markets), [Sources](/docs/configuration/rate-setup/sources), [Packages](/docs/configuration/rate-setup/packages), [Currencies](/docs/configuration/rate-setup/currencies), [Exchange Rates](/docs/configuration/rate-setup/exchange-rates) |
| **Cashiering Setup** | [Transaction Codes](/docs/configuration/cashiering-setup/transaction-codes), [Transaction Code Groups](/docs/configuration/cashiering-setup/transaction-code-groups), [Transaction Code Sub-Groups](/docs/configuration/cashiering-setup/transaction-code-sub-groups), [Payment Types](/docs/configuration/cashiering-setup/payment-types), [Routing Codes](/docs/configuration/cashiering-setup/routing-codes), [Cashiers](/docs/configuration/cashiering-setup/cashiers), [Articles](/docs/configuration/cashiering-setup/articles), [Exchange Rates](/docs/configuration/cashiering-setup/exchange-rates), [Service Charges](/docs/configuration/cashiering-setup/service-charges) |
| **Housekeeping Setup** | [Out of Order/Service Reason](/docs/configuration/housekeeping-setup/out-of-order-reasons), [HK Sections](/docs/configuration/housekeeping-setup/sections), [HK Attendants](/docs/configuration/housekeeping-setup/attendances), [HK Task](/docs/configuration/housekeeping-setup/tasks), [Room Maintenance Reason](/docs/configuration/housekeeping-setup/room-management), [Lost & Found Reason](/docs/configuration/housekeeping-setup/lost-and-found-reasons), [Maintenance Type](/docs/configuration/housekeeping-setup/management-types) |
| **General Setup** | [License](/docs/configuration/general-setup/license), [Hotel Information](/docs/configuration/general-setup/hotel-information), [Job Titles](/docs/configuration/general-setup/job-titles), [Departments](/docs/configuration/general-setup/departments), [User Groups](/docs/configuration/general-setup/user-groups), [Users](/docs/configuration/general-setup/users), [Cash Register Setup](/docs/configuration/general-setup/cash-register-setup), [Transportation Type](/docs/configuration/general-setup/transportation-types), [System Date Setup](/docs/configuration/general-setup/system-date), [Track It](/docs/configuration/general-setup/trackit) |

What you see depends on **user permissions**. If a menu or sub-item is missing, your account may not have access.

## Reservation Setup

Reference data for reservations and front desk: room types, room classes, rooms, reservation types, reservation methods, booking types, business segments, floor plans, special requests, room move reasons, trace/origin/alert codes, discount/cancel/waitlist/lost/refused reasons. See [Reservation Setup](/docs/configuration/reservation-setup/overview).

## Profile Setup

Reference data for individual, company, and travel agent profiles: countries, states, territories, districts, regions, cities, postal codes, titles, languages, nationalities, VIP levels, preferences, loyalty tiers, inactive reason. See [Profile Setup](/docs/configuration/profile-setup/overview).

## Rate Setup

Rates and pricing: market groups, market codes, source groups, source codes, rate codes, rate classes, rate categories, packages, currency, exchange rates. See [Rate Setup](/docs/configuration/rate-setup/overview).

## Cashiering Setup

Billing and payments: transaction code groups/subgroups, transaction codes, service charges, articles, cashiers, routing codes, payment types. See [Cashiering Setup](/docs/configuration/cashiering-setup/overview).

## Housekeeping Setup

Housekeeping setup: out-of-order/service reasons, HK sections, HK attendants, HK tasks, room maintenance reason, lost & found reason, maintenance type. See [Housekeeping Setup](/docs/configuration/housekeeping-setup/overview).

## General Setup

Hotel info, system date, users, user groups, departments, job titles, license, cash register setup, transportation types, Track It (groups, locations, actions, types). See [General Setup](/docs/configuration/general-setup/overview).

## Typical Workflow

1. Set **general** and **hotel** data first (hotel info, system date, users).
2. Define **profile** and **reservation** reference data (countries, room types, rooms, reservation types, sources, etc.).
3. Configure **rates** and **packages**.
4. Configure **cashiering** (transaction codes, payment types, cashiers, service charges).
5. Configure **housekeeping** (sections, tasks, reasons).

Order may vary; some items depend on others (e.g. rooms need room types, rates may need rate categories).

## Common FAQs

**Why don't I see Configuration at all?**  
Your user may not have any setup permission. Access is per area (e.g. rooms, rates, users). Ask your administrator to grant the permissions you need (e.g. view/edit reservation setup, rate management, users).

**Where do I add a new room type or room?**  
Go to **Configuration → Reservation** → **Room Class** / **Room Types** / **Rooms**. Define room classes and room types first, then add rooms. See [Reservation Setup](/docs/configuration/reservation-setup/overview).

**Where do I add a new transaction code or payment type?**  
Go to **Configuration → Cashiering** → **Transaction Codes** or **Payment Types**. See [Cashiering Setup](/docs/configuration/cashiering-setup/overview).

**What order should I set up configuration in?**  
Start with **General Configuration** (hotel info, system date, users). Then **Profile** and **Reservation** reference data (countries, room types, rooms, reservation types). Then **Rate Management**, **Cashiering**, and **HouseKeeping & Maintenance**. Some items depend on others (e.g. rooms need room types).

**Can I change the system date manually?**  
Usually only before night audit has been run for that date, and only if your role allows it. Go to **Configuration → General Configuration** → **System Date Setup**. Night audit advances the date; avoid changing it without following your property’s procedure.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Configuration menu or category missing** | Your user lacks permission for that setup area. | Ask your administrator to grant access to the relevant category (e.g. Reservation, Cashiering, General Configuration). |
| **Cannot save a new room / rate / code** | A required parent or field is missing (e.g. room type, rate category). | Create the parent first (e.g. room type before rooms, rate category before rates). Check mandatory fields. |
| **Change does not appear in reservations or folios** | Some data is copied at reservation creation; or cache. | New reservations use updated setup. Existing reservations may keep the value they had at creation. Refresh or reopen the screen if needed. |
| **User or cash register not in list** | User/cashier not created or not linked to the right property or register. | In General Configurations, create or edit the user and assign permissions/cash register. Ensure the cash register exists in cash register setup. |
| **Lost & found reason or cancellation reason required but not in list** | Reason not yet created in setup. | Add the reason in the relevant setup (e.g. Housekeeping → Lost & found reasons, Reservation Setup → Cancel reasons). |

For login, permissions, wrong property, and other general issues, see [Troubleshooting](/docs/general/troubleshooting).

## Next Steps

- [Reservation Setup](/docs/configuration/reservation-setup/overview) — Rooms, room types, reservation types, reasons, codes
- [Profile Setup](/docs/configuration/profile-setup/overview) — Countries, titles, VIP levels, preferences, etc.
- [Rate Setup](/docs/configuration/rate-setup/overview) — Rates, markets, sources, packages, currency
- [Cashiering Setup](/docs/configuration/cashiering-setup/overview) — Transaction codes, payment types, cashiers, service charges
- [Housekeeping Setup](/docs/configuration/housekeeping-setup/overview) — HK sections, attendants, tasks, lost & found, out-of-order
- [General Setup](/docs/configuration/general-setup/overview) — Hotel info, users, system date, cash register, Track It

## See also

- [Reservations](/docs/operations/reservations/overview) — Uses room types, rooms, rates, reservation types, cancellation reasons, etc.
- [Profiles](/docs/operations/profiles/overview) — Uses countries, titles, VIP levels, and other profile setup.
- [Cashiering](/docs/operations/cashiering/overview) — Uses transaction codes, payment types, cashiers, service charges.
- [Housekeeping](/docs/operations/housekeeping/overview) — Uses sections, tasks, attendances, lost & found reasons, out-of-order rules.
- [Night Audit](/docs/operations/night-audit) — Uses system date, transaction codes, and audit settings.
