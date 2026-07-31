---
sidebar_position: 6
---

# Cashiers

**Cashiers** is a simple reference/label list (code + name) used elsewhere in cashiering configuration. It is **not** how a user logs in to a cash register — that login credential (Register ID + password) is created separately in [Cash Register Setup](/configuration/general-setup/cash-register-setup), which is not linked to this list.

## Access

**Configuration → Cashiering → Cashier**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Cashier identifier (e.g. CSH01). |
| Name | Cashier name/label (e.g. Front Desk Cashier). |
| Sequence | Display order. |

## Common FAQs

**A user gets "not linked to a cashier" or "No cash register session" when trying to log in.**
This is not about the Cashiers list — go to [Cash Register Setup](/configuration/general-setup/cash-register-setup) and confirm the user has an active Register ID + password credential there.

## See also

- [Cash Register Setup](/configuration/general-setup/cash-register-setup) — Where the actual login credential (Register ID + password) is created.
- [Cashiering Overview](/operations/cashiering/overview)
- [Cashier Shift](/operations/cashiering/cashier-shift)
