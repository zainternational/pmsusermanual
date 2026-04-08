---
sidebar_position: 4
---

# User Groups

**User Groups** define reusable permission sets. Assign a group to a user and they inherit all permissions in that group. This is the recommended way to manage permissions for multiple staff with the same role.

## Access

**Configuration → General Configuration → User Groups**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code (e.g. FD, CASH, HK, MGR). |
| Name | Group name (e.g. Front Desk, Cashier, Housekeeping, Manager). |
| Sequence | Display order. |
| Permissions | The list of permissions assigned to this group. |

## How Permission Inheritance Works

```
User Group (permissions) → assigned to → User → inherits all group permissions
                                                + any direct permissions added to the user
```

- A user can belong to **one group**. They inherit all permissions in that group.
- **Direct permissions** can be added on top of the group — useful for one-off exceptions (e.g. a front desk agent who also needs to run reports).
- If a permission is in the group, the user has it. If it is not in the group, the user does not have it — unless it is added directly to their account.
- Removing a permission from a group removes it from **all users** in that group immediately.

## Permission Areas

Permissions are organised by module. Each area has its own set of view / add / change / delete actions:

### Profile Management
| Permission | What it allows |
|-----------|---------------|
| view individualprofile | See the individual profile list and detail |
| add individualprofile | Create new individual profiles |
| change individualprofile | Edit existing individual profiles |
| delete individualprofile | Delete individual profiles |
| view companyprofile | See company profiles |
| add/change/delete companyprofile | Manage company profiles |
| view travelagentprofile | See travel agent profiles |
| add/change/delete travelagentprofile | Manage travel agent profiles |

### Reservation Management
| Permission | What it allows |
|-----------|---------------|
| view reservation | See the reservation list and detail |
| add reservation | Create new reservations |
| change reservation | Edit existing reservations |
| delete reservation | Delete reservations |
| check_in | Check in a reservation |
| check_out | Check out a reservation |
| cancel reservation | Cancel a reservation |
| view waitlist | See the waitlist |
| add/change waitlist | Manage waitlist entries |

### Front Desk / Account Receivable
| Permission | What it allows |
|-----------|---------------|
| view in-house | See the in-house guest list |
| view checked-out | See the checked-out guest list |
| view room plan | See the room plan calendar |
| view account receivable | Access AR billing screens |

### Cashiering / Billing
| Permission | What it allows |
|-----------|---------------|
| view_cashier_transaction | Open the Transaction (folio) screen |
| add billingitem | Post a charge to a folio |
| change billingitem | Edit a charge |
| delete billingitem | Delete a charge |
| void_billing_transaction | Void a charge or payment |
| post_room_charge | Manually post room charges |
| view_folio_print | Print a folio |
| view_proforma_invoice | Generate a proforma invoice |
| view_cashier_shift | Open the Cashier Shift screen |
| view_quick_checkout | Open Quick Checkout |
| view_journals_by_transaction | Open Journal by Transaction |
| manage_room_routing | Manage room routing rules |
| add/change billingpayment | Post payments |

### Housekeeping
| Permission | What it allows |
|-----------|---------------|
| view roomstatus | See room status |
| change roomstatus | Update room status |
| view/add/change/delete housekeepingtask | Manage tasks |
| view/add/change/delete lostfound | Manage lost & found |
| view/add/change/delete maintenance | Manage maintenance records |
| view/add/change/delete outoforder | Manage out-of-order records |

### Night Audit
| Permission | What it allows |
|-----------|---------------|
| add nightauditrun | Run night audit |
| view nightauditrun | View past audit runs and summaries |

### Reports
| Permission | What it allows |
|-----------|---------------|
| view report (per category) | View each report category (reservation, billing, housekeeping, etc.) |

### User Activity Logs
| Permission | What it allows |
|-----------|---------------|
| view useractivitylog | See the activity log list |
| export useractivitylog | Export activity logs |
| delete useractivitylog | Delete activity log entries |

### Configuration (Setup)
Each setup area has its own view / add / change / delete permissions. For example:
- `view room`, `add room`, `change room`, `delete room`
- `view transactioncode`, `add transactioncode`, etc.

## Typical Group Examples

| Group | Key permissions |
|-------|----------------|
| **Front Desk** | view/add/change reservation, check_in, check_out, view in-house, view room plan, view individualprofile |
| **Cashier** | view_cashier_transaction, add billingitem, add billingpayment, void_billing_transaction, post_room_charge, view_cashier_shift, view_quick_checkout, view_folio_print |
| **Housekeeping** | view/change roomstatus, view/add/change housekeepingtask, view/add/change lostfound, view/add/change maintenance, view/add/change outoforder |
| **Night Auditor** | add nightauditrun, view nightauditrun, view report (all categories), view_cashier_shift |
| **Manager** | All of the above + configuration access + view all reports |
| **Receptionist** | view/add/change reservation, check_in, view in-house, view room plan, view individualprofile, view companyprofile |

## Adding a New Group

1. Go to **Configuration → General Configuration → User Groups**.
2. Click **Add**.
3. Enter a **Short Code** and **Name**.
4. Select the permissions to include — check each permission the group needs.
5. Save.
6. Go to **Users** and assign this group to the relevant user accounts.

## Editing a Group

1. Open the group from the list.
2. Add or remove permissions as needed.
3. Save. Changes apply immediately to all users in the group.

:::warning
Removing a permission from a group removes it from every user in that group. Check who is in the group before removing permissions.
:::

## Common FAQs

**A user can see a menu but cannot perform an action (e.g. can view but not edit).**
They have the `view` permission but not the `add` or `change` permission. Add the specific permission to their group or directly to their user account.

**Should I use groups or direct permissions?**
Use groups for roles shared by multiple staff. Use direct permissions for one-off exceptions on top of a group (e.g. a front desk agent who also needs to run night audit reports).

**A user is in a group but still cannot see a menu.**
Check that the group has the correct `view` permission for that module. Some menus require a specific permission name — see the tables above. Also confirm the user is saved with the correct group assigned.

**Can a user be in multiple groups?**
Each user is assigned one group. Use direct permissions to add extra access beyond the group.

## See also

- [Users](/docs/configuration/general-setup/users) — Create user accounts and assign groups.
- [Roles and Permissions](/docs/general/roles-and-permissions) — Overview of which menus require which permissions.
