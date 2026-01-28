---
sidebar_position: 0
---

# Profiles Overview

Profiles store guest and payer information used in reservations and billing. The PMS supports three profile types:

- **Individual Profile** — Persons (guests, contacts)
- **Company Profile** — Companies (corporate, groups, payers)
- **Travel Agent Profile** — Travel agents and agencies

:::tip **Having a problem?**  
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules, see the main [Troubleshooting](/docs/general/troubleshooting) page — it links to module-specific FAQs and troubleshooting sections.
:::

## Accessing Profiles

From the sidebar, click **Profile**, then choose:

- **Individual Profile**
- **Company Profile**
- **Travel Agent Profile**

Visibility depends on your **user permissions**.

## Common Uses

- **Reservations** — Assign a profile as guest or payer.
- **Billing** — Route charges to a company or travel agent profile; use individual as guest.
- **Search** — Find existing profiles by name, code, or contact before creating duplicates.

## Profile Setup

Many fields (titles, countries, languages, VIP levels, loyalty tiers, etc.) are defined in **Configuration → Profile** (or equivalent). Create and maintain profiles after those codes are set for consistency.

## When to Use Which Profile

| Use case | Profile type |
|----------|---------------|
| **Guest** (person staying) | Individual Profile |
| **Payer** (company paying the bill) | Company Profile |
| **Payer** (travel agent or agency) | Travel Agent Profile |
| **Contact** or **secondary guest** | Individual Profile |
| **Billing routed to company** | Company Profile (assign as payer; use routing in reservation/folio) |
| **Billing routed to travel agent** | Travel Agent Profile (assign as payer; use routing) |

You can combine them: e.g. Individual as guest, Company as payer; or Individual as guest, Travel Agent as payer.

## Common FAQs

**Why don't I see the Profile menu or one of the profile types?**  
Your user may not have permission for that profile type (individual, company, or travel agent). Ask your administrator to grant access to view/add/edit the profile type you need.

**Do I create a new profile for every guest?**  
No. Search first by name, email, or phone. Use an existing profile if it matches to avoid duplicates. Create a new one only when no suitable profile exists.

**What is the difference between Individual, Company, and Travel Agent?**  
**Individual** = persons (guests, contacts). **Company** = companies (corporate, groups) used as payers. **Travel Agent** = travel agents/agencies used as payers or for commission. Use the type that matches how you bill and report.

**Can I use a company as the guest?**  
Typically the **guest** is an Individual (the person staying). The **payer** can be a Company or Travel Agent. Some setups allow a company name on the reservation while the main guest is still an individual; follow your property's practice.

**Where do I set titles, countries, VIP levels?**  
These are in **Configuration → Profile Setup** (or equivalent). Create those codes first so when you add or edit a profile you can select from the list. See [Configuration overview](/docs/configuration/overview).

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Profile not found in reservation search** | Wrong profile type, spelling, or filters. | Search in the correct type (individual/company/travel agent). Try partial name or contact. Clear filters if applied. |
| **Cannot save profile — field invalid** | Required field missing or value not in setup (e.g. country, title). | Fill required fields. Use values from Configuration → Profile Setup (countries, titles, etc.). |
| **Duplicate profiles** | Same guest/company created more than once. | Search before creating. Merge or deactivate duplicates per your property's policy; use one profile for future reservations. |
| **Company or travel agent not in payer list** | You are in Individual Profile or the payer list filters by type. | In the reservation or folio, choose the payer type (company / travel agent) and search. Ensure the profile exists in Company or Travel Agent Profile. |

For login, permissions, wrong property, and other general issues, see [Troubleshooting](/docs/general/troubleshooting).

## Next Steps

- [Individual Profile](/docs/operations/profiles/individual-profile) — Persons and guests
- [Company Profile](/docs/operations/profiles/company-profile) — Companies and corporate
- [Travel Agent Profile](/docs/operations/profiles/travel-agent-profile) — Travel agents

## See also

- [Reservations](/docs/operations/reservations/overview) — Assign profiles as guest or payer.
- [Cashiering](/docs/operations/cashiering/overview) — Route charges to company or travel agent; view folio by guest.
- [Configuration overview](/docs/configuration/overview) — Profile setup (titles, countries, VIP levels, etc.) under Configuration.
