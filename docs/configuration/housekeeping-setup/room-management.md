---
sidebar_position: 4
---

# Room Maintenance Reasons

**Room Maintenance Reasons** are the reasons used when logging a maintenance issue for a room. They appear in the Maintenance tab of Housekeeping Management.

## Access

**Configuration → Housekeeping Setup → Room Maintenance Reason**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. PLUMB, ELEC, AC). |
| Name | Yes | Reason name (e.g. Plumbing Issue, Electrical Fault, Air Conditioning). |
| Sequence | No | Display order in dropdowns. |
| Active | Yes | Whether this reason is available for selection. |

## Common Maintenance Reasons

| Short Code | Name |
|-----------|------|
| PLUMB | Plumbing Issue |
| ELEC | Electrical Fault |
| AC | Air Conditioning |
| FURN | Furniture Damage |
| PAINT | Painting / Wall Damage |
| DOOR | Door / Lock Issue |
| TV | TV / Electronics |
| CLEAN | Deep Cleaning Required |

## Usage

When a housekeeper or engineer logs a maintenance issue in **Housekeeping → Maintenance**, they select a reason from this list. The reason appears in maintenance reports and helps track recurring issues by type.

## See also

- [Housekeeping → Maintenance](/docs/operations/housekeeping/maintenance) — Log and track maintenance issues.
- [Management Types](/docs/configuration/housekeeping-setup/management-types) — Classification types for maintenance records.
- [Housekeeping Setup Overview](/docs/configuration/housekeeping-setup/overview)
