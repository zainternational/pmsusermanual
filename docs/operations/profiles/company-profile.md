---
sidebar_position: 2
---

# Company Profile

**Company Profile** stores data for companies linked to reservations (e.g. corporate accounts). A reservation has a single generic Company Profile link — the system does not distinguish "payer" vs. "group organiser" roles for it.

:::tip **Having a problem?**
See [Profiles Overview](/operations/profiles/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Profile → Company Profile**.

## Profile List

The list shows all company profiles with columns for company name, corporate ID, email, phone, and profile display ID. Use the search bar to find by company name or corporate ID.

## Creating a Profile

Click **Add** or **New Company Profile**.

| Field | Required | Description |
|-------|----------|-------------|
| Company Name | Yes | Full legal or trading name of the company. |
| Corporate ID | No | Internal or external corporate identifier / account code. |
| Email | No | Company contact email. |
| Phone | No | Company contact phone. |
| Address | No | Street address. |
| Country | No | From [Countries](/configuration/profile-setup/countries) setup. Selecting country filters the State dropdown. |
| State/Division/Region | No | From [States](/configuration/profile-setup/states) setup, filtered by country. |
| City | No | From [Cities](/configuration/profile-setup/cities) setup, filtered by state. |
| Postal Code | No | From [Postal Codes](/configuration/profile-setup/postal-codes) setup, filtered by city. |
| Note | No | Internal notes about the company. |

:::note
The company profile record also stores **Territory** and **Region** (parent levels above Country in the address hierarchy), but the current Company Profile form does not display Territory or Region selectors — they are not editable from the UI.
:::

## Editing a Profile

Open a profile from the list (click the row or name). The detail page shows all fields. Click **Edit** to modify, then **Save**.

## Using in Reservations and Billing

When creating or editing a reservation, you can link it to a company profile — there is a single Company Profile field on the reservation (no separate "payer" or "group organiser" designation).

:::caution
There is no folio routing feature that targets a company profile directly. [Room Routing](/operations/cashiering/room-routing) only routes charges from one **room** to another room — it has no concept of routing to a company. To bill a company, use the company as the reservation's Company Profile link and handle payment/invoicing for that reservation manually; do not expect an automatic company-routing option in Cashiering → Transaction.
:::

## AR Number

The company profile record has an `ar_number` field in the database, intended to link the company to an accounts receivable account. However, **this field is not currently exposed anywhere in the Company Profile UI** — it does not appear on the create/edit form or the list/detail view, and it is not read by any AR aging or statement report in the system. Treat AR Number as not yet usable for this profile type; do not rely on it for direct billing.

## Common FAQs

**The country/state/city dropdowns are empty.**
Address options depend on setup. Select Country first — it filters the State dropdown. If options are missing, the parent data may not be configured. Check Configuration → Profile Setup → Countries / States / Cities.

**Can I use a company as the primary guest on a reservation?**
Typically the primary guest is an individual (the person staying). The company is assigned as the payer. Some properties allow a company name on the reservation for corporate bookings — follow your property's practice.

**Where do I see all charges billed to a company?**
Use the [Billing Reports](/operations/reports/billing) filtered by company profile. Since there is no company-targeted routing, check each linked reservation's folio in Cashiering → Transaction individually.

**Can I delete a company profile?**
A company profile that is linked to one or more reservations cannot be deleted — the system blocks the deletion to protect reservation and billing history. Remove the company from those reservations first, or ask an administrator if it's no longer needed.

## See also

- [Profiles Overview](/operations/profiles/overview)
- [Travel Agent Profile](/operations/profiles/travel-agent-profile) — Similar structure for travel agencies.
- [Cashiering → Transaction](/operations/cashiering/transaction) — Open the folio for a reservation linked to a company profile.
- [Room Routing](/operations/cashiering/room-routing) — Room-to-room routing rules (does not route to a company profile).
- [Configuration → Profile Setup](/configuration/profile-setup/overview) — Countries, states, cities, postal codes.
