---
sidebar_position: 0
---

# User Activity Logs

**User Activity Logs** record actions performed by users in the PMS — logins, reservation changes, payments, configuration changes, and more. Use them for auditing, troubleshooting, and compliance.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues.
:::

## Access

From the sidebar: **Operations → General → User Activity Logs**.

Requires the **View User Activity Log** permission (`view_useractivitylog`). Admins and super-admins can always access this screen.

## Filters

| Filter | Description |
|--------|-------------|
| Search | Free-text search across user name, activity text, and related fields. |
| From Date | Filter logs from this date (inclusive). |
| To Date | Filter logs up to this date (inclusive). |

Filters apply automatically as you type or change dates. Use **Reset** to clear all filters.

## Table Columns

| Column | Description |
|--------|-------------|
| User | The user who performed the action (name and username). |
| Activity Group | The module or area (e.g. Reservation, Billing, Housekeeping, Auth). |
| Action Type | The specific action performed (e.g. Create, Update, Delete, Login). |
| Activity By | The user who triggered the action (may differ from User in some cases). |
| Activity For | The user or object the action was performed on. |
| Text | A human-readable description of the action. |
| Business Date | The business date at the time of the action. |
| Activity Date | The actual date and time the action occurred. |
| IP Address | The IP address of the user's session (if captured). |

Click any row to open the **Activity Log Detail Modal**, which shows the full log entry including raw details, changed fields, and any additional context captured by the system.

## Export

Users with the **Export User Activity Log** permission can export the current filtered results:

- **Excel** — Downloads as `.xlsx` for spreadsheet analysis.
- **PDF** — Downloads as a formatted PDF for printing or archiving.

## Delete

Users with the **Delete User Activity Log** permission can delete individual log entries. A confirmation dialog shows the activity text, user, and date before deletion. Deletion cannot be undone.

## Use Cases

- **Auditing** — Who did what and when (e.g. who changed a rate, who cancelled a reservation).
- **Troubleshooting** — Trace back a change to find when and by whom it was made.
- **Security** — Detect unusual or unauthorized activity patterns.
- **Compliance** — Retain evidence of user actions for regulatory requirements.

## Common FAQs

**Why don't I see the User Activity Logs menu?**
Your user does not have the `view_useractivitylog` permission. Ask your administrator to grant access.

**Can I search by a specific reservation or room?**
Use the Search field to enter a reservation ID, room number, or any text that appears in the activity description.

**How far back do logs go?**
Log retention depends on your system configuration. Contact your administrator if you need logs older than what is visible.

## See also

- [Roles and permissions](/docs/general/roles-and-permissions) — Permission requirements for this screen.
- [Configuration → Users](/docs/configuration/general-setup/users) — Manage user accounts and permissions.
