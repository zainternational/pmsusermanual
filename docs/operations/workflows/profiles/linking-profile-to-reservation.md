---
sidebar_position: 1
---

# Linking a Profile to a Reservation

This guide explains how to link an **individual**, **company**, or **travel agent** profile to a reservation — either as the primary guest, payer, or additional guest.

## Why Link Profiles

Linking profiles to reservations:
- Populates guest details automatically (name, contact, travel documents).
- Enables routing charges to a company or travel agent folio.
- Feeds the [Guest Information Report](/docs/operations/reports/guest-information) for immigration compliance.
- Builds guest history for loyalty and repeat-guest tracking.

## Linking an Individual Profile as Primary Guest

When creating or editing a reservation:

1. Open the reservation form (new or existing).
2. In **Step 1 — Guest Info**, use the **Guest Search** field.
3. Type the guest's name, email, or phone number.
4. Select the matching profile from the dropdown.
5. The guest fields (name, email, phone, nationality, VIP level, travel documents) populate automatically.
6. If no profile exists, fill in the fields manually — a new profile can be created from the reservation form or separately in **Profile → Individual Profile**.

## Adding Additional Guests

A reservation can have multiple guests (e.g. a couple or family sharing a room).

1. In **Step 1 — Guest Info**, click **Add Another Guest**.
2. Search for and select an existing individual profile, or enter details manually.
3. Repeat for each additional guest.
4. All guests appear in the [Guest Information Report](/docs/operations/reports/guest-information).

## Linking a Company Profile as Payer

To bill charges to a company account:

1. In the reservation form **Step 2 — Booking Info**, find the **Company** or **Payer** field.
2. Search for the company profile by name.
3. Select it. The company is linked as the billing entity.
4. Set up **routing** in Cashiering → Transaction (or Billing) to route room charges or other codes to the company folio automatically.

See [Room Routing](/docs/operations/cashiering/room-routing) for routing setup.

## Linking a Travel Agent Profile

To associate a reservation with a travel agent (for commission tracking or AR billing):

1. In the reservation form **Step 2 — Booking Info**, find the **Travel Agent** field.
2. Search for the travel agent profile by name.
3. Select it. The travel agent is linked to the reservation.
4. Routing can be set up to send charges to the travel agent's AR account.

## Changing a Linked Profile

To change the guest or payer on an existing reservation:

1. Open the reservation detail.
2. Click **Edit**.
3. Clear the current profile in the relevant field and search for the new one.
4. Save.

## Creating a Profile During Reservation

If the guest does not have a profile yet:

1. In the guest search field, type the name and press Enter (or click **Create New**).
2. A quick-create form opens — fill in the required fields (name, email, phone).
3. Save. The new profile is created and linked to the reservation.
4. Complete the full profile later in **Profile → Individual Profile** to add travel documents and address.

## Common FAQs

**The guest profile is not appearing in the search.**
Check that you are searching in the correct profile type (individual for guests, company for corporate accounts, travel agent for agencies). The profile must be active (not inactive/deactivated).

**Can I link both a company and a travel agent to the same reservation?**
Yes — a reservation can have a primary guest (individual), a company payer, and a travel agent all linked at the same time.

**The guest's travel documents are not showing in the Guest Information Report.**
Travel documents are stored on the individual profile (Step 3 — Travel Documents). Open the profile in **Profile → Individual Profile** and fill in the passport and visa fields.

## See also

- [Individual Profile](/docs/operations/profiles/individual-profile) — Create and manage guest profiles.
- [Company Profile](/docs/operations/profiles/company-profile) — Create and manage company profiles.
- [Travel Agent Profile](/docs/operations/profiles/travel-agent-profile) — Create and manage travel agent profiles.
- [Reservations](/docs/operations/reservations/overview) — Full reservation management.
- [Room Routing](/docs/operations/cashiering/room-routing) — Route charges to company or travel agent.
- [Guest Information Report](/docs/operations/reports/guest-information) — In-house guest list with travel document data.
