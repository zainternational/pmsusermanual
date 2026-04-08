---
sidebar_position: 6
---

# Guest Information Report

The **Guest Information Report** shows all in-house guests for a selected business date, including full profile details for both primary and additional guests on each reservation.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or the [Reports Overview](/docs/operations/reports/overview) for how to run and export reports.
:::

## Access

From the sidebar, click **Report** → **Guest Information**.

## Filter

| Filter | Description |
|--------|-------------|
| Business Date | The date to check in-house guests. Defaults to the current business date. |

## What the Report Shows

Each row represents one guest (person) on an in-house reservation. A reservation with additional guests produces multiple rows — one for the primary guest and one for each additional guest.

**Stay information per row:**
- Reservation ID, room number, room type
- Arrival date, departure date, nights
- Rate amount, reservation status, reservation type
- Guest comment, special request, ETA, ETD
- Number of adults

**Guest profile per row:**
- Title, first name, middle name, last name
- Phone, email, address
- Country, state, city, postal code, region, nationality
- Gender, date of birth, NRC, father name, occupation
- VIP level, loyalty tier, language
- Passport number, issue date, expiry date
- Visa type, visa number, visa issue date, visa expiry date
- Arrival country date, AR number, guest note
- Guest role: **Primary** or **Additional**

## Summary

The summary at the top shows:
- Business date
- Total in-house guest count (all rows, including additional guests)

## Export

Use the export button (if available) to download the report as Excel or PDF for immigration records, management review, or compliance.

## Common FAQs

**Why are there multiple rows for the same reservation?**
Each person on the reservation gets their own row. The primary guest and any additional guests linked to the reservation each appear separately, with their individual profile data.

**Why is a guest missing from the report?**
The report only shows reservations with status **IN_HOUSE** for the selected business date. Guests who have not yet checked in (status: Reserved) or have already checked out will not appear.

**The guest profile fields are empty — why?**
The guest profile may not have been fully filled in at the time of reservation. Update the individual profile with the missing details.

## See also

- [Individual Profiles](/docs/operations/profiles/individual-profile) — Where guest profile data is stored and edited.
- [Reservations](/docs/operations/reservations/overview) — Source of stay and reservation data.
- [Reports Overview](/docs/operations/reports/overview) — How to run and export reports.
