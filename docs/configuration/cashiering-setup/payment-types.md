---
sidebar_position: 4
---

# Payment Types

**Payment Types** define the methods guests can use to pay their folio balance (e.g. Cash, Credit Card, Bank Transfer). They appear in the Payment modal in Cashiering → Transaction and Quick Checkout.

## Access

**Configuration → Cashiering → Payment Type**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code (e.g. CASH, VISA, BT). |
| Name | Full name (e.g. Cash, Visa Card, Bank Transfer). |
| Sequence | Display order in the payment modal. |
| Active | Whether this payment type is available for selection. |

## Relationship to Transaction Codes

Payment types work alongside transaction codes. When a payment is posted, the system uses the linked transaction code to record it in the guest ledger and reports. Ensure the corresponding transaction code has the appropriate payment flag set (Cash, Credit Card, Bank Transfer, etc.).

## Credit Card Requirement

If a payment type requires a credit card number, ensure the corresponding **Transaction Code** has the **Credit Card** flag enabled. When a reservation uses a payment type linked to a credit card transaction code, the credit card number field becomes required on the reservation form.

## Common FAQs

**A payment type is not appearing in the payment modal.**
Check that the payment type is marked as **Active**. Also ensure the user has permission to post payments.

## See also

- [Transaction Codes](/docs/configuration/cashiering-setup/transaction-codes)
- [Cashiering Setup Overview](/docs/configuration/cashiering-setup/overview)
- [Cashiering → Transaction](/docs/operations/cashiering/transaction)
