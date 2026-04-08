---
sidebar_position: 2
---

# Company Profile

**Company Profile** stores data for companies used as payers, group organisers, or corporate guests in reservations and billing.

:::tip **Having a problem?**
See [Profiles Overview](/docs/operations/profiles/overview) for common FAQs and troubleshooting.
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
| Country | No | From [Countries](/docs/configuration/profile-setup/countries) setup. Selecting country filters the State dropdown. |
| State/Division/Region | No | From [States](/docs/configuration/profile-setup/states) setup, filtered by country. |
| City | No | From [Cities](/docs/configuration/profile-setup/cities) setup, filtered by state. |
| Postal Code | No | From [Postal Codes](/docs/configuration/profile-setup/postal-codes) setup, filtered by city. |
| Note | No | Internal notes about the company. |
| AR Number | No | Links the company to an accounts receivable account for direct billing. |

## Editing a Profile

Open a profile from the list (click the row or name). The detail page shows all fields. Click **Edit** to modify, then **Save**.

## Using in Reservations and Billing

When creating or editing a reservation, you can assign a company profile as:
- **Payer** — the company pays all or part of the bill (use routing in the folio)
- **Group organiser** — the company is the master account for a group booking

In **Cashiering → Transaction**, use the routing/split folio feature to direct charges to the company profile. The company's AR number is used for direct billing and accounts receivable reporting.

## AR Number

The `ar_number` field links the company to an accounts receivable account. When set, charges routed to this company can be tracked in AR aging and statement reports. AR account types and aging levels are configured under [Configuration → Account Receivables Setup](/docs/configuration/account-receivables-setup/overview).

## Common FAQs

**The country/state/city dropdowns are empty.**
Address options depend on setup. Select Country first — it filters the State dropdown. If options are missing, the parent data may not be configured. Check Configuration → Profile Setup → Countries / States / Cities.

**Can I use a company as the primary guest on a reservation?**
Typically the primary guest is an individual (the person staying). The company is assigned as the payer. Some properties allow a company name on the reservation for corporate bookings — follow your property's practice.

**Where do I see all charges billed to a company?**
Use the [Billing Reports](/docs/operations/reports/billing) filtered by company profile, or check the folio routing in Cashiering → Transaction for individual reservations.

## See also

- [Profiles Overview](/docs/operations/profiles/overview)
- [Travel Agent Profile](/docs/operations/profiles/travel-agent-profile) — Similar structure for travel agencies.
- [Cashiering → Transaction](/docs/operations/cashiering/transaction) — Route charges to a company profile.
- [Room Routing](/docs/operations/cashiering/room-routing) — View all routing rules including company-routed charges.
- [Account Receivables Setup](/docs/configuration/account-receivables-setup/overview) — Account types, aging levels, reminder cycles.
- [Configuration → Profile Setup](/docs/configuration/profile-setup/overview) — Countries, states, cities, postal codes.
