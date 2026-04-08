---
sidebar_position: 6
---

# Cashiers

**Cashiers** link user accounts to cash registers, enabling those users to log in to a cash register and use cashiering screens.

## Access

**Configuration → Cashiering → Cashier**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Cashier identifier (e.g. CSH01, JOHN). |
| Name | Cashier name (e.g. John Smith - Front Desk). |
| Sequence | Display order. |
| User | The user account linked to this cashier. |
| Hotel / Property | The hotel this cashier belongs to (multi-property). |

## How It Works

1. Create a **Cash Register** in [Cash Register Setup](/docs/configuration/general-setup/cash-register-setup).
2. Create a **Cashier** here and link it to a user account.
3. The user can now log in to the cash register and use cashiering screens.

When a cashier logs in, their session is recorded. All transactions posted during that session are attributed to their cashier/register in the Journal by Transaction and shift reports.

## Common FAQs

**A user gets "not linked to a cashier" when trying to log in to a cash register.**
Create a Cashier record for that user here and link it to their user account.

**Can one user be linked to multiple cashiers?**
Typically one user maps to one cashier. If your property needs a user to work at multiple registers, check with your administrator.

## See also

- [Cash Register Setup](/docs/configuration/general-setup/cash-register-setup)
- [Cashiering Overview](/docs/operations/cashiering/overview)
- [Cashier Shift](/docs/operations/cashiering/cashier-shift)
