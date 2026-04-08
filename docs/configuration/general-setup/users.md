---
sidebar_position: 3
---

# Users

**Users** are the staff accounts that log in to the PMS. Each user has a username, password, assigned permissions (directly or via a user group), and optional profile details.

## Access

**Configuration → General Configuration → Users**

## Fields

| Field | Description |
|-------|-------------|
| Username | Login name (minimum 3 characters). Must be unique. |
| Email | User's email address. |
| Password | Set or reset the user's password (minimum 6 characters). |
| First Name / Last Name | Display name shown in the system. |
| Job Title | From [Job Titles](/docs/configuration/general-setup/job-titles) setup. |
| Department | From [Departments](/docs/configuration/general-setup/departments) setup. Used to filter staff in Housekeeping Tasks (Housekeeping dept) and Maintenance (Engineering dept). |
| Profile Picture | Optional photo shown in the user profile. |
| User Groups | Assign one or more user groups to inherit their permissions. |
| Direct Permissions | Assign specific permissions directly to the user (in addition to group permissions). |
| Hotel / Property | Assign the user to one or more hotels in multi-property setups. |
| Active | Whether the user can log in. Deactivate instead of deleting to preserve audit history. |

## Department Assignment

The **Department** field is critical for two features:
- **Housekeeping Tasks** — Only users in the **Housekeeping** department appear in the Assign To dropdown when creating tasks.
- **Maintenance** — Only users in the **Engineering (ENG)** department appear in the Assigned To dropdown when creating maintenance records.

Ensure the correct department short code is set: `ENG` for engineering staff.

## Permissions

Permissions control what each user can see and do. They are assigned via:
- **User Groups** — Assign a group; the user inherits all permissions in that group.
- **Direct permissions** — Add specific permissions on top of group permissions.

See [User Groups](/docs/configuration/general-setup/user-groups) and [Roles and Permissions](/docs/general/roles-and-permissions) for the full list of permission areas.

## Common FAQs

**A user can't see a menu — what do I do?**
Check their user group and direct permissions. The required permission for each menu is listed in [Roles and Permissions](/docs/general/roles-and-permissions).

**Why doesn't a staff member appear in the Housekeeping Task Assign To dropdown?**
Their Department must be set to **Housekeeping**. Edit the user and assign the correct department.

**Why doesn't a staff member appear in the Maintenance Assigned To dropdown?**
Their Department must be set to a department with short code **ENG** (Engineering). Edit the user and assign the correct department.

## See also

- [User Groups](/docs/configuration/general-setup/user-groups)
- [Departments](/docs/configuration/general-setup/departments)
- [Job Titles](/docs/configuration/general-setup/job-titles)
- [Roles and Permissions](/docs/general/roles-and-permissions)
