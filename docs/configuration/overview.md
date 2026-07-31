---
sidebar_position: 1
---

# Configuration Overview

**Configuration** is where you set up all reference data and options used across the PMS: rooms, rates, cashiering, profiles, housekeeping, and general settings. Access and visibility depend on **user permissions**.

:::tip **Having a problem?**  
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules (reservations, front desk, cashiering, housekeeping, night audit, dashboard, profiles), see the main [Troubleshooting](/general/troubleshooting) page — it links to module-specific FAQs and troubleshooting sections.
:::

## Accessing Configuration

From the sidebar, go to **Configuration**. The PMS shows these top-level menus (names and order may match the application):

| Menu | Sub-items (screens you can open) |
|------|----------------------------------|
| **Reservation Setup** | [Room Classes](/configuration/reservation-setup/room-classes), [Room Types](/configuration/reservation-setup/room-types), [Rooms](/configuration/reservation-setup/rooms), [Reservation Types](/configuration/reservation-setup/reservation-types), [Reservation Methods](/configuration/reservation-setup/reservation-methods), [Booking Types](/configuration/reservation-setup/booking-types), [Business Segments](/configuration/reservation-setup/business-segments), [Floor Plans](/configuration/reservation-setup/floor-plans), [Special Requests](/configuration/reservation-setup/special-requests), [Room Status](/configuration/reservation-setup/room-status), [Room Move](/configuration/reservation-setup/room-move), [Trace Codes](/configuration/reservation-setup/trace-codes), [Origin Codes](/configuration/reservation-setup/origin-codes), [Alert Codes](/configuration/reservation-setup/alert-codes), [Discount Reasons](/configuration/reservation-setup/discount-reasons), [Cancellation Reasons](/configuration/reservation-setup/cancellation-reasons), [Waitlist Reasons](/configuration/reservation-setup/waitlist-reasons), [Lost Reasons](/configuration/reservation-setup/lost-reasons), [Refused Reasons](/configuration/reservation-setup/refused-reasons), [Inactive Reasons](/configuration/reservation-setup/inactive-reasons), [Purpose of Stay](/configuration/reservation-setup/purpose-of-stay) |
| **Profile Setup** | [Preferences](/configuration/profile-setup/preferences), [VIP Levels](/configuration/profile-setup/vip-levels), [Loyalty Tiers](/configuration/profile-setup/loyalty-tiers), [Titles](/configuration/profile-setup/titles), [Languages](/configuration/profile-setup/languages), [Nationalities](/configuration/profile-setup/nationalities), [Regions](/configuration/profile-setup/regions), [Countries](/configuration/profile-setup/countries), [Territories](/configuration/profile-setup/territories), [States](/configuration/profile-setup/states), [Districts](/configuration/profile-setup/districts), [Cities](/configuration/profile-setup/cities), [Postal Codes](/configuration/profile-setup/postal-codes), [Inactive Reason](/configuration/profile-setup/inactive-reason), [Visa Types](/configuration/profile-setup/visa-type) |
| **Rate Setup** | [Rate Classes](/configuration/rate-setup/rate-classes), [Rate Categories](/configuration/rate-setup/rate-categories), [Rates](/configuration/rate-setup/rates), [Market Groups](/configuration/rate-setup/market-groups), [Markets](/configuration/rate-setup/markets), [Source Groups](/configuration/rate-setup/source-groups), [Sources](/configuration/rate-setup/sources), [Packages](/configuration/rate-setup/packages), [Currencies](/configuration/rate-setup/currencies), [Exchange Rates](/configuration/rate-setup/exchange-rates) |
| **Cashiering Setup** | [Transaction Codes](/configuration/cashiering-setup/transaction-codes), [Transaction Code Groups](/configuration/cashiering-setup/transaction-code-groups), [Transaction Code Sub-Groups](/configuration/cashiering-setup/transaction-code-sub-groups), [Payment Types](/configuration/cashiering-setup/payment-types), [Routing Codes](/configuration/cashiering-setup/routing-codes), [Cashiers](/configuration/cashiering-setup/cashiers), [Articles](/configuration/cashiering-setup/articles), [Exchange Rates](/configuration/cashiering-setup/exchange-rates), [Service Charges](/configuration/cashiering-setup/service-charges) |
| **Housekeeping Setup** | [Out of Order/Service Reason](/configuration/housekeeping-setup/out-of-order-reasons), [HK Sections](/configuration/housekeeping-setup/sections), [HK Attendants](/configuration/housekeeping-setup/attendances), [HK Task](/configuration/housekeeping-setup/tasks), [Room Maintenance Reason](/configuration/housekeeping-setup/room-management), [Lost & Found Reason](/configuration/housekeeping-setup/lost-and-found-reasons), [Maintenance Type](/configuration/housekeeping-setup/management-types) |
| **General Setup** | [License](/configuration/general-setup/license), [Hotel Information](/configuration/general-setup/hotel-information), [Job Titles](/configuration/general-setup/job-titles), [Departments](/configuration/general-setup/departments), [User Groups](/configuration/general-setup/user-groups), [Users](/configuration/general-setup/users), [Cash Register Setup](/configuration/general-setup/cash-register-setup), [Transportation Type](/configuration/general-setup/transportation-types), [System Date Setup](/configuration/general-setup/system-date), [Track It](/configuration/general-setup/trackit) |

What you see depends on **user permissions**. If a menu or sub-item is missing, your account may not have access.

## Reservation Setup

Reference data for reservations and front desk: room types, room classes, rooms, reservation types, reservation methods, booking types, business segments, floor plans, special requests, room move reasons, trace/origin/alert codes, discount/cancel/waitlist/lost/refused reasons. See [Reservation Setup](/configuration/reservation-setup/overview).

## Profile Setup

Reference data for individual, company, and travel agent profiles: countries, states, territories, districts, regions, cities, postal codes, titles, languages, nationalities, VIP levels, preferences, loyalty tiers, inactive reason. See [Profile Setup](/configuration/profile-setup/overview).

## Rate Setup

Rates and pricing: market groups, market codes, source groups, source codes, rate codes, rate classes, rate categories, packages, currency, exchange rates. See [Rate Setup](/configuration/rate-setup/overview).

## Cashiering Setup

Billing and payments: transaction code groups/subgroups, transaction codes, service charges, articles, cashiers, routing codes, payment types. See [Cashiering Setup](/configuration/cashiering-setup/overview).

## Housekeeping Setup

Housekeeping setup: out-of-order/service reasons, HK sections, HK attendants, HK tasks, room maintenance reason, lost & found reason, maintenance type. See [Housekeeping Setup](/configuration/housekeeping-setup/overview).

## General Setup

Hotel info, system date, users, user groups, departments, job titles, license, cash register setup, transportation types, Track It (groups, locations, actions, types). See [General Setup](/configuration/general-setup/overview).

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
Go to **Configuration → Reservation** → **Room Class** / **Room Types** / **Rooms**. Define room classes and room types first, then add rooms. See [Reservation Setup](/configuration/reservation-setup/overview).

**Where do I add a new transaction code or payment type?**  
Go to **Configuration → Cashiering** → **Transaction Codes** or **Payment Types**. See [Cashiering Setup](/configuration/cashiering-setup/overview).

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

For login, permissions, wrong property, and other general issues, see [Troubleshooting](/general/troubleshooting).

## Next Steps

- [First-Time Property Setup](/configuration/first-time-setup) — New property onboarding checklist (all 7 setup steps in order)
- [Reservation Setup](/configuration/reservation-setup/overview) — Rooms, room types, reservation types, reasons, codes
- [Profile Setup](/configuration/profile-setup/overview) — Countries, titles, VIP levels, preferences, etc.
- [Rate Setup](/configuration/rate-setup/overview) — Rates, markets, sources, packages, currency
- [Cashiering Setup](/configuration/cashiering-setup/overview) — Transaction codes, payment types, cashiers, service charges
- [Housekeeping Setup](/configuration/housekeeping-setup/overview) — HK sections, attendants, tasks, lost & found, out-of-order
- [General Setup](/configuration/general-setup/overview) — Hotel info, users, system date, cash register, Track It

## See also

- [Reservations](/operations/reservations/overview) — Uses room types, rooms, rates, reservation types, cancellation reasons, etc.
- [Profiles](/operations/profiles/overview) — Uses countries, titles, VIP levels, and other profile setup.
- [Cashiering](/operations/cashiering/overview) — Uses transaction codes, payment types, cashiers, service charges.
- [Housekeeping](/operations/housekeeping/overview) — Uses sections, tasks, attendances, lost & found reasons, out-of-order rules.
- [Night Audit](/operations/night-audit) — Uses system date, transaction codes, and audit settings.
