---
sidebar_position: 3
---

# Travel Agent Profile

**Travel Agent Profile** stores data for travel agents and agencies used in reservations for billing routing and commission tracking.

:::tip **Having a problem?**
See [Profiles Overview](/docs/operations/profiles/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Profile → Travel Agent Profile**.

## Profile List

The list shows all travel agent profiles with columns for agent name, IATA number, email, phone, and profile display ID. Use the search bar to find by name or IATA number. Permissions control who can view this list — if it is not visible, ask your administrator.

## Creating a Profile

Click **Add** or **New Travel Agent Profile**.

| Field | Required | Description |
|-------|----------|-------------|
| Travel Agent Name | Yes | Full name of the agent or agency. |
| IATA Number | No | International Air Transport Association number — the standard agency identifier. |
| Email | No | Agency contact email. |
| Phone | No | Agency contact phone. |
| Address | No | Street address. |
| Country | No | From [Countries](/docs/configuration/profile-setup/countries) setup. Selecting country filters the State dropdown. |
| State/Division/Region | No | From [States](/docs/configuration/profile-setup/states) setup, filtered by country. |
| City | No | From [Cities](/docs/configuration/profile-setup/cities) setup, filtered by state. |
| Postal Code | No | From [Postal Codes](/docs/configuration/profile-setup/postal-codes) setup, filtered by city. |
| Note | No | Internal notes about the agent or agency. |
| AR Number | No | Links the travel agent to an accounts receivable account for direct billing. |

## Editing a Profile

Open a profile from the list (click the row or name). The detail page shows all fields. Click **Edit** to modify, then **Save**.

## Using in Reservations and Billing

When creating or editing a reservation, you can assign a travel agent profile as:
- **Source** — the booking came through this agent (links to source code in rate setup)
- **Payer** — the agent pays all or part of the bill (use routing in the folio)

In **Cashiering → Transaction**, use the routing/split folio feature to direct charges to the travel agent profile. This is commonly used when the agent pays room charges and the guest pays incidentals.

## AR Number

The `ar_number` field links the travel agent to an accounts receivable account. When set, charges routed to this agent can be tracked in AR aging and statement reports. AR account types and aging levels are configured under [Configuration → Account Receivables Setup](/docs/configuration/account-receivables-setup/overview).

## IATA Number

The IATA number is the standard identifier for travel agencies worldwide. It is used for commission calculations and agency verification. Enter it exactly as provided by the agency.

## Common FAQs

**The country/state/city dropdowns are empty.**
Address options depend on setup. Select Country first — it filters the State dropdown. If options are missing, check Configuration → Profile Setup → Countries / States / Cities.

**I don't see the Travel Agent Profile menu.**
Your user may not have travel agent profile permission. Ask your administrator to grant `view_travelagentprofile` access.

**How do I link a travel agent to a reservation source?**
In the reservation form, select the travel agent in the Travel Agent field. The source code (e.g. "Travel Agent" or the specific agency's source) is set separately in the Source field. Both are used in reservation reports for segmentation.

**Where do I see all charges billed to a travel agent?**
Use the [Billing Reports](/docs/operations/reports/billing) filtered by travel agent profile, or check the folio routing in Cashiering → Transaction for individual reservations.

## See also

- [Profiles Overview](/docs/operations/profiles/overview)
- [Company Profile](/docs/operations/profiles/company-profile) — Similar structure for companies.
- [Cashiering → Transaction](/docs/operations/cashiering/transaction) — Route charges to a travel agent profile.
- [Room Routing](/docs/operations/cashiering/room-routing) — View all routing rules including agent-routed charges.
- [Account Receivables Setup](/docs/configuration/account-receivables-setup/overview) — Account types, aging levels, reminder cycles.
- [Configuration → Rate Setup → Sources](/docs/configuration/rate-setup/sources) — Source codes used to link reservations to travel agents.
- [Configuration → Profile Setup](/docs/configuration/profile-setup/overview) — Countries, states, cities, postal codes.
