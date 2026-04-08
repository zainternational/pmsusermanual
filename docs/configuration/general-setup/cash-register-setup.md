---
sidebar_position: 8
---

# Cash Register Setup

**Cash Registers** are the logical registers used for cashier login. Each cashier session is tied to a register. Before using any cashiering screen (Transaction, Cashier Shift, Quick Checkout), a user must log in to a cash register.

## Access

**Configuration → General Configuration → Cash Register Setup**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Register identifier (e.g. REG01, FRONT-DESK). |
| Name | Full name of the register (e.g. Front Desk Register 1). |
| Sequence | Display order. |
| Hotel / Property | The hotel this register belongs to (multi-property). |

## Linking Cashiers to Registers

After creating a cash register, link it to cashier users in **Configuration → Cashiering → Cashiers**. A user must be linked to a cashier and that cashier must be linked to a register before they can log in.

## Cash Register Login

When a user navigates to a cashiering screen, they are prompted to log in to a cash register if they have not already done so. The login screen shows available registers for their account.

After logging in, the session is stored locally. The session is used for:
- Tracking which register posted each transaction (visible in Journal by Transaction)
- Shift drop / cashier close (the shift is tied to the register)

## Common FAQs

**A user gets "No cash register session" when trying to close a shift.**
They must log in to a cash register first. Go to Cashiering → Transaction (or any cashiering screen) and complete Cash Register Login.

**Why doesn't a register appear in the login screen?**
The user may not be linked to a cashier that is linked to that register. Check Configuration → Cashiering → Cashiers.

## See also

- [Cashiering Setup → Cashiers](/docs/configuration/cashiering-setup/cashiers)
- [Cashiering Overview](/docs/operations/cashiering/overview)
- [Cashier Shift](/docs/operations/cashiering/cashier-shift)
