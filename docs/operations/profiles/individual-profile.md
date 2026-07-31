---
sidebar_position: 1
---

# Individual Profile

**Individual Profile** stores personal data for guests and contacts used in reservations. It is the most detailed profile type, with three sections: Personal Info, Address, and Travel Documents.

:::tip **Having a problem?**
See [Profiles Overview](/operations/profiles/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Profile → Individual Profile**.

## Profile List

The list shows all individual profiles with columns for name, email, phone, nationality, VIP level, and profile display ID (columns can be shown/hidden). Use the search bar to find by name, email, phone, or NRC number — there is no separate dropdown filter for VIP level or nationality; narrow those by typing a matching value in search or sorting the column.

## Creating a Profile

Click **Add** or **New Individual Profile**. The form is split into three steps:

### Step 1 — Personal Information

| Field | Required | Description |
|-------|----------|-------------|
| Last Name | Yes | Guest's last name. The only required field on this step. |
| First Name | No | Guest's first name. |
| Middle Name | No | Middle name. |
| Title | No | Salutation (Mr, Mrs, Ms, Dr, etc.) — from [Titles](/configuration/profile-setup/titles) setup. |
| Email | No | Contact email. |
| Phone | No | Contact phone number. |
| Date of Birth | No | Used for guest age and immigration reports. |
| NRC | No | National Registration Card number. Entered as four linked selectors — State/Region number, Township, Type, and the 6-digit serial number — instead of free text. Choosing a State loads its Townships; Myanmar-language profiles show Myanmar labels automatically. |
| Gender | No | Male / Female / Other. |
| Father Name | No | Father's name (used for immigration). |
| Occupation | No | Guest's occupation. |
| Nationality | No | From [Nationalities](/configuration/profile-setup/nationalities) setup. |
| Language | No | Preferred language — from [Languages](/configuration/profile-setup/languages) setup. |
| VIP Status | No | VIP level — from [VIP Levels](/configuration/profile-setup/vip-levels) setup. |
| Loyalty Tier | No | Loyalty program tier — from [Loyalty Tiers](/configuration/profile-setup/loyalty-tiers) setup. |
| Note | No | Internal notes about the guest. |

### Step 2 — Address

Address fields cascade: select Country → State/Division → City → Postal Code. Each level filters the options for the next.

| Field | Description |
|-------|-------------|
| Address | Free-text street address. |
| Country | From [Countries](/configuration/profile-setup/countries) setup. |
| State/Division/Region | From [States](/configuration/profile-setup/states) setup, filtered by country. |
| City | From [Cities](/configuration/profile-setup/cities) setup, filtered by state. |
| Postal Code | From [Postal Codes](/configuration/profile-setup/postal-codes) setup, filtered by city. |

:::note
The individual profile record also has a **Region** field in the database (a parent level above Country), but the current Individual Profile form does not display a Region selector — it is not editable from the UI.
:::

### Step 3 — Travel Documents

| Field | Description |
|-------|-------------|
| Passport Number | Guest's passport number. |
| Passport Issue Date | Date passport was issued. |
| Passport Expiry Date | Date passport expires. |
| Visa Type | From [Visa Types](/configuration/profile-setup/visa-type) setup. |
| Visa Number | Visa document number. |
| Visa Issue Date | Date visa was issued. |
| Visa Expiry Date | Date visa expires. |
| Arrival to Country Date | Date the guest arrived in the country. |

Travel document data appears in the [Guest Information Report](/operations/reports/guest-information) for immigration compliance.

## Editing a Profile

Open a profile from the list (click the row or name). The detail page shows all three sections. Click **Edit** to modify fields, then **Save**.

## Using in Reservations

When creating or editing a reservation, search for an individual profile to assign as:
- **Primary Guest** — the person staying in the room
- **Additional Guest** — extra guests linked to the same reservation

Both primary and additional guests appear in the [Guest Information Report](/operations/reports/guest-information).

## AR Number

The `ar_number` field links the guest to an accounts receivable account. This is managed by the accounts team and used for direct billing.

## Common FAQs

**Why are some fields greyed out or not visible?**
The list form (quick create) shows fewer fields than the detail page. Open the profile after saving to fill in all sections including travel documents.

**Can I search by passport number?**
Use the search bar on the list page. Search covers name, email, and phone. For passport-specific lookup, use the [Guest Information Report](/operations/reports/guest-information) filtered by business date.

**The address dropdowns are empty.**
Address options depend on setup. Country must be selected before State appears; State before City; City before Postal Code. If a level is empty, the parent setup data may be missing — check Configuration → Profile Setup.

**Can I delete a guest profile?**
A profile that is linked to one or more reservations cannot be deleted — the system blocks the deletion to protect reservation history. Remove or reassign the reservation links first, or ask an administrator if the profile is no longer needed.

**The NRC field shows "No NRC reference data on server" or the dropdowns won't load.**
The NRC State/Township/Type selectors are populated from reference data that must be seeded once per installation. Ask your administrator to run the NRC seed command on the backend, or check your connection if only the network error appears.

## See also

- [Profiles Overview](/operations/profiles/overview)
- [Guest Information Report](/operations/reports/guest-information) — In-house guest list with full profile and travel document data.
- [Reservations](/operations/reservations/overview) — Assign individual profiles as guests.
- [Configuration → Profile Setup](/configuration/profile-setup/overview) — Titles, nationalities, VIP levels, languages, visa types, address data.
