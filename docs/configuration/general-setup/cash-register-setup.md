---
sidebar_position: 8
---

# Cash Register Setup

**Cash Register Setup** is where cash-register login credentials are created — a Register ID + password pair that a staff member uses to log in to a physical/logical cash register before using any cashiering screen (Transaction, Cashier Shift, Quick Checkout). This screen manages the login credential directly; it is not linked to the separate [Cashiers](/configuration/cashiering-setup/cashiers) reference list.

## Access

**Configuration → General Configuration → Cash Register Setup**

## Fields

| Field | Required | Description |
|-------|----------|--------------|
| Register ID | Yes | The identifier the user types in at [Cash Register Login](/operations/cashiering/cash-register-login) (e.g. REG01, FRONT-DESK-1). Must be unique system-wide. |
| Username | Yes | The existing user account this register login is linked to. |
| First Name / Last Name / Email | No | Reference/contact fields shown alongside the register login. |
| Password | Yes (on create) | The password used together with Register ID at Cash Register Login. Leave blank when editing to keep the current password. |
| Confirm Password | Yes (on create) | Must match Password. |
| Max Shift Drops per Day | No | Maximum number of shift drops this register login is allowed to perform per business date. |
| Hotel | No | Restricts this register login to a specific hotel. |
| Status | Yes | Active/Inactive — inactive register logins cannot be used to log in. |

## Cash Register Login

At any cashiering screen, if not already logged in, the user is prompted for **Register ID** and **Password** — the credential pair created here (this is a separate login from the user's normal PMS username/password). After logging in, the session is used for:
- Tracking which register posted each transaction (visible in Journal by Transaction)
- Shift drop / cashier close (the shift is tied to the register login)
- Enforcing the **Max Shift Drops per Day** limit

## Common FAQs

**A user gets "No cash register session" when trying to close a shift.**
They must complete Cash Register Login first, using the Register ID and password set up here — not their normal PMS login.

**Why doesn't a Register ID work at login?**
Confirm the Register ID and password were entered exactly as created here, and that the register login's **Status** is Active.

## See also

- [Cash Register Login](/operations/cashiering/cash-register-login)
- [Cashiering Overview](/operations/cashiering/overview)
- [Cashier Shift](/operations/cashiering/cashier-shift)
