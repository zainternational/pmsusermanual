---
sidebar_position: 3
---

# Travel Agent Profile

**Travel Agent Profile** stores data for travel agents and agencies used in reservations and commission or billing routing.

## Accessing Travel Agent Profiles

From the sidebar: **Profile → Travel Agent Profile**.

## Travel Agent Profile List

The list shows travel agents with typical columns:

- Agent or agency name
- Code (if used)
- Contact (phone, email)
- Commission or rate (if used)
- Last stay or last activity (if available)

Use **search** and **filters** (e.g. name, code) to find profiles.

## Creating a Travel Agent Profile

1. Click **Add** or **New Travel Agent Profile**.
2. Fill in at least the required fields, for example:
   - **Agent / agency name**
   - **Code** (if your property uses it)
   - **Contact** — Phone, email
   - **Address** — Country, city, etc. (from setup where applicable)
   - **Commission** or **rate** if used
   - **IATA** or **agency number** if used
3. Save. The profile can then be used in reservations.

## Editing a Travel Agent Profile

1. Open the profile from the list (click row or name).
2. Change any allowed fields.
3. Save. Changes apply to future reservations; existing reservations may keep the data they had at creation.

## Using in Reservations

When creating or editing a reservation:

- **Source** — Choose the travel agent as source (from reservation source setup).
- **Payer / routing** — Route all or part of the bill to the travel agent (e.g. agent pays room, guest pays incidentals).
- **Commission** — If the system supports it, commission may be calculated from the agent's profile or rate.

In **Cashiering**, use **routing** or **split folio** to send charges to the travel agent profile.

## Configuration

Source codes and billing/routing rules are defined under **Configuration** (e.g. reservation setup, cashiering). Set those up so travel agent profiles are linked correctly to sources and revenue/commission logic.
