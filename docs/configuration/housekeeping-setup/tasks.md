---
sidebar_position: 3
---

# Housekeeping Tasks (Setup)

**Housekeeping Tasks** define the types of work that can be assigned and tracked in the Housekeeping module — for example Clean, Deep Clean, Turndown, or VIP Setup. This setup list standardizes what task types are available for assignment and reporting.

## Access

**Configuration → Housekeeping Setup → HK Task**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. CLN, DPCLN, VIP). |
| Name | Yes | Task type name (e.g. Clean, Deep Clean, VIP Setup). |
| Sequence | No | Display order in dropdowns. |
| Allowed Hotel | No | Restricts the task type to a specific property. Left empty, it is available to all hotels. |

## Common Task Types

| Short Code | Name |
|-----------|------|
| CLN | Clean |
| DPCLN | Deep Clean |
| TURN | Turndown |
| VIP | VIP Setup |
| INSP | Inspection |

## Usage

When creating or assigning housekeeping work, staff select a task type from this list. Task types feed housekeeping assignment boards and reporting, letting management track how much of each kind of work is being performed and by whom (in combination with [Housekeeping Attendances](/configuration/housekeeping-setup/attendances) and [Housekeeping Sections](/configuration/housekeeping-setup/sections)).

## FAQ

**Can I create custom task types beyond the standard cleaning tasks?**
Yes — add any short code and name that reflects a distinct type of housekeeping work performed at your property.

**Do task types affect room status automatically?**
Task type setup only defines the list of selectable task types; how a completed task affects room status is handled by the housekeeping workflow itself, not by this configuration.

## See also

- [Housekeeping Sections](/configuration/housekeeping-setup/sections) — Areas tasks are performed in.
- [Housekeeping Attendances](/configuration/housekeeping-setup/attendances) — Attendants who perform tasks.
- [Housekeeping Setup Overview](/configuration/housekeeping-setup/overview)
