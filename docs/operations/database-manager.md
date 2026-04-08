---
sidebar_position: 10
---

# Database Manager

The **Database Manager** allows administrators to manage multiple hotel databases (tenants) from a single PMS installation. It is used to create, back up, restore, and delete property databases, and to switch between properties at login.

:::warning **Administrator only**
Database management is a sensitive operation. Only system administrators should use this screen. Incorrect use can result in data loss.
:::

## Access

From the sidebar or login screen: **Web → Database** (or the database selector at login).

This screen is only visible to users with database management permissions.

## Multi-Tenant Architecture

The PMS supports multiple hotel properties on a single installation. Each property has its own isolated database. When you log in, you select which property (database) to work in.

The database name is embedded in your login session — all data you see and create belongs to the selected property.

## Database Selector (at Login)

At the login screen, a **database selector** lets you choose which property to log in to. The list shows all available databases for your installation.

If you only have one property, the selector may be hidden or pre-selected.

## Database Manager Screen

The Database Manager screen (accessible to administrators) shows all databases with:

| Column | Description |
|--------|-------------|
| Database Name | The internal name of the database (e.g. `pms_live`, `pms_hotel2`). |
| Status | Whether the database is active and accessible. |
| Actions | Create, backup, restore, delete. |

## Creating a New Database

1. Click **Create Database**.
2. Enter a **database name** (lowercase, no spaces — e.g. `pms_hotel2`).
3. Confirm. The system creates a new isolated database for the new property.
4. Log in to the new database and complete the initial setup (hotel information, rooms, rates, users).

## Backing Up a Database

1. Click **Backup** on the database row.
2. The system creates a backup file (`.dump` or `.sql.gz`).
3. The backup is stored on the server. Download it for off-site storage.

Backups are also run automatically by the backup scripts (`backup-pms.sh`) on a schedule.

## Restoring a Database

1. Click **Restore** on the database row.
2. Select the backup file to restore from.
3. Confirm. The database is restored to the state of the backup.

:::danger
Restoring overwrites the current database. All data since the backup will be lost. Only restore when necessary and ensure you have a current backup first.
:::

## Deleting a Database

1. Click **Delete** on the database row.
2. Confirm. The database and all its data are permanently deleted.

:::danger
Deletion is irreversible. Ensure you have a backup before deleting.
:::

## Switching Between Properties

To switch to a different property:
1. Log out of the current session.
2. At the login screen, select the other property from the database selector.
3. Log in with credentials for that property.

Each property has its own users, rooms, rates, and data.

## Common FAQs

**I don't see the Database Manager in the sidebar.**
This screen requires database management permission. It is typically only available to system administrators.

**How many properties can I manage?**
There is no hard limit. Each property is a separate database. Performance depends on your server resources.

**Can users from one property access another property's data?**
No — each database is isolated. A user must have an account in each property's database to access it.

## See also

- [Hotel Information](/docs/configuration/general-setup/hotel-information) — Configure property details after creating a new database.
- [Users](/docs/configuration/general-setup/users) — Set up user accounts for each property.
- [License](/docs/configuration/general-setup/license) — License management per property.
