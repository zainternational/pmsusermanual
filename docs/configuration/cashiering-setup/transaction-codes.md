---
sidebar_position: 1
---

# Transaction Codes

**Transaction Codes** define every type of charge, payment, and adjustment that can be posted to a guest folio. Each code has a short code, name, group, and a set of flags that control how it behaves.

## Access

**Configuration → Cashiering → Transaction Code**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code used in reports and folios (e.g. ROOM, TAX, CASH). |
| Name | Full name of the transaction code (e.g. Room Charge, Service Tax, Cash Payment). |
| Sequence | Display order in lists and folios. |
| Transaction Code Group | The group this code belongs to — from [Transaction Code Groups](/docs/configuration/cashiering-setup/transaction-code-groups). |
| Transaction Code Sub-Group | Optional finer grouping — from [Transaction Code Sub-Groups](/docs/configuration/cashiering-setup/transaction-code-sub-groups). |
| Transaction Type | Category: Others, Telephone Charges, Lodging, Minibar, Food & Beverage, Tax, Non Revenue. |
| Default Currency | The default currency for this code (if different from the property default). |
| Inactive | Mark the code as inactive so it no longer appears in posting screens. |

## Payment Flags

These flags determine how the code behaves in payment scenarios:

| Flag | Meaning |
|------|---------|
| Cash | This code is used for cash payments. |
| Credit Card | This code is used for credit card payments. |
| Bank Transfer | This code is used for bank transfer payments. |
| Mobile Payment | This code is used for mobile payment methods. |
| Other | This code is used for other payment types. |
| Manual | This code can be posted manually by a cashier. |
| Cashier Payment | This code appears in the cashier payment screen. |
| Deposit Payment | This code is used for deposit payments. |
| AR Payment | This code is used for accounts receivable payments. |
| Paid Out | This code represents a paid-out (cash disbursement to a guest). |

## Revenue and Tax Flags

| Flag | Meaning |
|------|---------|
| Revenue Group | This code contributes to revenue totals in reports. |
| Generate Exclusive | Tax is calculated on top of the posted amount (exclusive tax). |
| Generate Inclusive | The posted amount already includes tax; tax is extracted from it (inclusive tax). |
| Check No Mandatory | A reference/check number is required when posting this code. |

## Internal Flags

| Flag | Meaning |
|------|---------|
| Internal Transaction Rate Code | Only one code per hotel can have this flag. Used internally for rate posting. |
| Internal Deposit | Only one code per hotel can have this flag. Used as the GL target for deposit journal entries. |
| Internal Deposit Code | Links this code to the internal deposit GL code for journal posting. |

## Usage

Transaction codes are used in:
- **Cashiering → Transaction** — Post charges and payments to folios.
- **Billing Report** — Revenue and payment breakdown by transaction code.
- **Night Audit** — Revenue and payment summaries grouped by transaction code.
- **Trial Balance** — Debit/credit balance per transaction code.
- **Routing Codes** — Specify which transaction codes are routed to another payer.
- **Service Charges** — Link service charge rules to transaction codes.

## Common FAQs

**Why can't I post a charge with a certain code?**
The code may be marked **Inactive**. Check the Inactive flag and reactivate if needed.

**Can I have two internal deposit codes?**
No — only one transaction code per hotel can have the **Internal Deposit** flag. The system will block saving a second one.

## See also

- [Transaction Code Groups](/docs/configuration/cashiering-setup/transaction-code-groups)
- [Transaction Code Sub-Groups](/docs/configuration/cashiering-setup/transaction-code-sub-groups)
- [Service Charges](/docs/configuration/cashiering-setup/service-charges)
- [Routing Codes](/docs/configuration/cashiering-setup/routing-codes)
- [Cashiering → Transaction](/docs/operations/cashiering/transaction)
