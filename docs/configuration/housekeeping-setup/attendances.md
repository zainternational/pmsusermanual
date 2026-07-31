---
sidebar_position: 2
---

# Housekeeping Attendances

**Housekeeping Attendances** is the lookup list of housekeeping attendants (or attendant categories) that can be assigned to rooms and tasks. It is used to identify who is responsible for a given housekeeping task and to report on work performed.

## Access

**Configuration → Housekeeping Setup → HK Attendance**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code for the attendant/entry (e.g. ATD1). |
| Name | Yes | Attendant or attendance entry name. |
| Sequence | No | Display order in dropdowns and lists. |
| Allowed Hotel | No | Restricts the entry to a specific property. Left empty, it is available to all hotels. |

## Usage

Attendance entries are selected when assigning housekeeping work — for example, tagging which attendant is responsible for cleaning a room or completing a task. This assignment is later used for reporting on room status and staff workload across sections.

## FAQ

**Is this the same as a staff/employee record?**
No — attendances is a setup lookup table used to tag housekeeping work with an attendant identifier; it is not a full HR or staff management record.

**Can I deactivate an attendant no longer working at the property?**
Remove or stop referencing the entry in new assignments; historical task/room records that already reference it keep their existing value.

## See also

- [Housekeeping Sections](/configuration/housekeeping-setup/sections) — Areas attendants are assigned to.
- [Housekeeping Tasks](/configuration/housekeeping-setup/tasks) — Task types attendants perform.
- [Housekeeping Setup Overview](/configuration/housekeeping-setup/overview)
