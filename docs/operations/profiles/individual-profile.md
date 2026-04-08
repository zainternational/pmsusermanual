---
sidebar_position: 1
---

# Individual Profile

**Individual Profile** stores personal data for guests and contacts used in reservations. It is the most detailed profile type, with three sections: Personal Info, Address, and Travel Documents.

:::tip **Having a problem?**
See [Profiles Overview](/docs/operations/profiles/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Profile → Individual Profile**.

## Profile List

The list shows all individual profiles with columns for name, email, phone, nationality, VIP level, and profile display ID. Use the search bar to find by name, email, or phone. Filters narrow by VIP level, nationality, or other criteria.

## Creating a Profile

Click **Add** or **New Individual Profile**. The form is split into three steps:

### Step 1 — Personal Information

| Field | Required | Description |
|-------|----------|-------------|
| Last Name | Yes | Guest's last name. |
| First Name | Yes | Guest's first name. |
| Middle Name | No | Middle name. |
| Title | No | Salutation (Mr, Mrs, Ms, Dr, etc.) — from [Titles](/docs/configuration/profile-setup/titles) setup. |
| Email | Yes | Contact email. |
| Phone | Yes | Contact phone number. |
| Date of Birth | No | Used for guest age and immigration reports. |
| NRC | No | National Registration Card number. |
| Gender | No | Male / Female / Other. |
| Father Name | No | Father's name (used for immigration). |
| Occupation | No | Guest's occupation. |
| Nationality | No | From [Nationalities](/docs/configuration/profile-setup/nationalities) setup. |
| Language | No | Preferred language — from [Languages](/docs/configuration/profile-setup/languages) setup. |
| VIP Status | No | VIP level — from [VIP Levels](/docs/configuration/profile-setup/vip-levels) setup. |
| Note | No | Internal notes about the guest. |

### Step 2 — Address

Address fields cascade: select Region → Country → State/Division → City → Postal Code. Each level filters the options for the next.

| Field | Description |
|-------|-------------|
| Address | Free-text street address. |
| Region | From [Regions](/docs/configuration/profile-setup/regions) setup. |
| Country | From [Countries](/docs/configuration/profile-setup/countries) setup, filtered by region. |
| State/Division/Region | From [States](/docs/configuration/profile-setup/states) setup, filtered by country. |
| City | From [Cities](/docs/configuration/profile-setup/cities) setup, filtered by state. |
| Postal Code | From [Postal Codes](/docs/configuration/profile-setup/postal-codes) setup, filtered by city. |

### Step 3 — Travel Documents

| Field | Description |
|-------|-------------|
| Passport Number | Guest's passport number. |
| Passport Issue Date | Date passport was issued. |
| Passport Expiry Date | Date passport expires. |
| Visa Type | From [Visa Types](/docs/configuration/profile-setup/visa-type) setup. |
| Visa Number | Visa document number. |
| Visa Issue Date | Date visa was issued. |
| Visa Expiry Date | Date visa expires. |
| Arrival to Country Date | Date the guest arrived in the country. |

Travel document data appears in the [Guest Information Report](/docs/operations/reports/guest-information) for immigration compliance.

## Editing a Profile

Open a profile from the list (click the row or name). The detail page shows all three sections. Click **Edit** to modify fields, then **Save**.

## Using in Reservations

When creating or editing a reservation, search for an individual profile to assign as:
- **Primary Guest** — the person staying in the room
- **Additional Guest** — extra guests linked to the same reservation

Both primary and additional guests appear in the [Guest Information Report](/docs/operations/reports/guest-information).

## AR Number

The `ar_number` field links the guest to an accounts receivable account. This is managed by the accounts team and used for direct billing.

## Common FAQs

**Why are some fields greyed out or not visible?**
The list form (quick create) shows fewer fields than the detail page. Open the profile after saving to fill in all sections including travel documents.

**Can I search by passport number?**
Use the search bar on the list page. Search covers name, email, and phone. For passport-specific lookup, use the [Guest Information Report](/docs/operations/reports/guest-information) filtered by business date.

**The address dropdowns are empty.**
Address options depend on setup. Region must be selected before Country appears; Country before State; State before City; City before Postal Code. If a level is empty, the parent setup data may be missing — check Configuration → Profile Setup.

## See also

- [Profiles Overview](/docs/operations/profiles/overview)
- [Guest Information Report](/docs/operations/reports/guest-information) — In-house guest list with full profile and travel document data.
- [Reservations](/docs/operations/reservations/overview) — Assign individual profiles as guests.
- [Configuration → Profile Setup](/docs/configuration/profile-setup/overview) — Titles, nationalities, VIP levels, languages, visa types, address data.
