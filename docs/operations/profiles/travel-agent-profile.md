---
sidebar_position: 3
---

# Travel Agent Profile

**Travel Agent Profile** stores data for travel agents and agencies, linkable to a reservation. There is no commission-tracking field on this profile — see the note under [IATA Number](#iata-number) — and no folio-routing feature targets it directly — see the note under [Using in Reservations and Billing](#using-in-reservations-and-billing).

:::tip **Having a problem?**
See [Profiles Overview](/operations/profiles/overview) for common FAQs and troubleshooting.
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
| Country | No | From [Countries](/configuration/profile-setup/countries) setup. Selecting country filters the State dropdown. |
| State/Division/Region | No | From [States](/configuration/profile-setup/states) setup, filtered by country. |
| City | No | From [Cities](/configuration/profile-setup/cities) setup, filtered by state. |
| Postal Code | No | From [Postal Codes](/configuration/profile-setup/postal-codes) setup, filtered by city. |
| Note | No | Internal notes about the agent or agency. |

:::note
The travel agent profile record also stores **Territory** and **Region** (parent levels above Country in the address hierarchy), but the current Travel Agent Profile form does not display Territory or Region selectors — they are not editable from the UI.
:::

## Editing a Profile

Open a profile from the list (click the row or name). The detail page shows all fields. Click **Edit** to modify, then **Save**.

## Using in Reservations and Billing

When creating or editing a reservation, you can link a travel agent profile to it. The reservation's **Source** field (linked to source code in rate setup) is separate from the travel agent link — set both if you want the booking channel tracked as well as the agent.

:::caution
There is no folio routing feature that targets a travel agent profile directly. [Room Routing](/operations/cashiering/room-routing) only routes charges from one **room** to another room — it has no concept of routing to a travel agent. If the agent pays room charges while the guest pays incidentals, handle that split manually on the folio (e.g. via Split/Transfer between folios) rather than expecting an automatic agent-routing option.
:::

## AR Number

The travel agent profile record has an `ar_number` field in the database, but **this field is not currently exposed anywhere in the Travel Agent Profile UI** — it does not appear on the create/edit form or the list/detail view, and it is not read by any AR aging or statement report. Treat AR Number as not yet usable for this profile type.

## IATA Number

The IATA number is the standard identifier for travel agencies worldwide, used here for agency identification/verification. Enter it exactly as provided by the agency.

:::note
The Travel Agent Profile has no commission rate or commission-tracking field. Commission arrangements must be handled outside the PMS (e.g. via routed billing and the property's own agreement with the agency), not calculated automatically from the IATA number or any other profile field.
:::

## Common FAQs

**The country/state/city dropdowns are empty.**
Address options depend on setup. Select Country first — it filters the State dropdown. If options are missing, check Configuration → Profile Setup → Countries / States / Cities.

**I don't see the Travel Agent Profile menu.**
Your user may not have travel agent profile permission. Ask your administrator to grant `view_travelagentprofile` access.

**How do I link a travel agent to a reservation source?**
In the reservation form, select the travel agent in the Travel Agent field. The source code (e.g. "Travel Agent" or the specific agency's source) is set separately in the Source field. Both are used in reservation reports for segmentation.

**Where do I see all charges billed to a travel agent?**
Use the [Billing Reports](/operations/reports/billing) filtered by travel agent profile. Since there is no agent-targeted routing, check each linked reservation's folio in Cashiering → Transaction individually.

**Can I delete a travel agent profile?**
A travel agent profile that is linked to one or more reservations cannot be deleted — the system blocks the deletion to protect reservation and billing history. Remove the agent from those reservations first, or ask an administrator if it's no longer needed.

## See also

- [Profiles Overview](/operations/profiles/overview)
- [Company Profile](/operations/profiles/company-profile) — Similar structure for companies.
- [Cashiering → Transaction](/operations/cashiering/transaction) — Open the folio for a reservation linked to a travel agent profile.
- [Room Routing](/operations/cashiering/room-routing) — Room-to-room routing rules (does not route to a travel agent profile).
- [Configuration → Rate Setup → Sources](/configuration/rate-setup/sources) — Source codes used to link reservations to travel agents.
- [Configuration → Profile Setup](/configuration/profile-setup/overview) — Countries, states, cities, postal codes.
