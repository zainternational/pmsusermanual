---
sidebar_position: 0
---

# Cash Register Login

**Cash Register Login** is required before using any cashiering function (Transaction, Cashier Shift, Quick Checkout). It links your user session to a specific cash register so all transactions are tracked per register.

:::tip **Having a problem?**
See [Cashiering Overview](/docs/operations/cashiering/overview) for common FAQs and troubleshooting.
:::

## When It Appears

You are taken to Cash Register Login automatically when you navigate to any cashiering screen (Transaction, Cashier Shift, Quick Checkout) and you are not yet logged in to a register for the current session.

You can also access it directly from the sidebar: **Cashiering** → **Cash Register Login** (if shown).

## Login Steps

1. The login screen shows a list of available **cash registers** for your property.
2. Select your **cash register** from the list.
3. If required, enter your **PIN** or confirm your identity.
4. Click **Login** (or **Open Register**).
5. You are now logged in to that register and can use all cashiering screens.

## What Gets Linked

Once logged in to a cash register:
- All charges and payments you post are recorded under that register.
- Your **Cashier Shift** tracks all activity from this login until you close the shift.
- The register name appears in cashier reports and the journal by transaction.

## Logging Out of a Register

To log out of a cash register:
- Go to **Cashiering → Cashier Shift** → **Cashier Close** → close the shift → click **Logout**.
- Or use the logout option in the cashier menu if available.

Logging out of the PMS does not automatically close your cashier shift. Always close the shift before logging out at end of day.

## Multiple Registers

If your property has multiple cash registers, each cashier logs in to their own register. Transactions are separated by register in reports and the journal.

## Common FAQs

**Why am I redirected to Cash Register Login when I click Transaction?**
You are not yet logged in to a cash register for this session. Complete the login to proceed.

**My register is not in the list.**
Cash registers are configured in **Configuration → General Configuration → Cash Register Setup**. Ask your administrator to add or activate your register.

**I logged in but still cannot post transactions.**
Your user must be linked to a cashier in **Configuration → Cashiering → Cashiers**. Ask your administrator to link your user account to a cashier.

**Can I be logged in to two registers at once?**
No — each user session is linked to one register at a time. Log out of the current register before logging in to another.

## See also

- [Cashiering Overview](/docs/operations/cashiering/overview) — Overview of all cashiering screens.
- [Transaction](/docs/operations/cashiering/transaction) — Post charges and payments after logging in.
- [Cashier Shift](/docs/operations/cashiering/cashier-shift) — Close the shift at end of day.
- [Configuration → Cash Register Setup](/docs/configuration/general-setup/cash-register-setup) — Set up cash registers.
- [Configuration → Cashiering → Cashiers](/docs/configuration/cashiering-setup/cashiers) — Link users to cashiers.
