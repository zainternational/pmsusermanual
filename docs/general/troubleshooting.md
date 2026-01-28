---
sidebar_position: 2
---

# Troubleshooting

Common issues and what to do when something goes wrong.

:::tip **Module-specific help**  
Many modules have their own **Common FAQs** and **Troubleshooting** sections: [Reservations](/docs/operations/reservations/overview#troubleshooting), [Front Desk](/docs/operations/front-desk/overview), [Cashiering](/docs/operations/cashiering/overview), [Housekeeping](/docs/operations/housekeeping/overview), [Night Audit](/docs/operations/night-audit#troubleshooting), [Dashboard](/docs/operations/dashboard#troubleshooting), [Configuration](/docs/configuration/overview#troubleshooting), [Profiles](/docs/operations/profiles/overview#troubleshooting). Check those pages first for issues in that area.
:::

## Login

| Problem | What to try |
|--------|-------------|
| **“Login failed” or invalid credentials** | Check username and password (username ≥ 3 chars, password ≥ 6). Ask your admin to confirm your account is active. |
| **Redirected to login after logging in** | Clear browser cache/cookies or try another browser. Ensure cookies are allowed for the PMS URL. |
| **Forgot password** | Contact your administrator; password reset is typically done via admin or IT. |

## Cashiering

| Problem | What to try |
|--------|-------------|
| **Cannot open Cashiering** | Log in to a **cash register** first (Cash Register Login). Ensure your user is linked to a cashier and cash register. |
| **Charge or payment fails** | Check transaction code and payment type are active. Ensure reservation is in a status that allows posting (e.g. checked in). |
| **Cannot void** | Void rules may require a reason or approval; check configuration. Some items may be locked after night audit. |

## Reservations

| Problem | What to try |
|--------|-------------|
| **Room type not available** | Check dates and room status (e.g. out of order). Confirm rate/availability setup for that room type and date. |
| **Cannot check in** | Reservation must be in a status that allows check-in (e.g. confirmed). Room may need to be clean/ready in housekeeping. |
| **Cannot change room** | Verify room move reasons and permissions. Target room must be available and in a sellable status. |

## Housekeeping

| Problem | What to try |
|--------|-------------|
| **Room status not updating** | Refresh the page. Confirm you have permission to change that room’s status. |
| **Lost & found / maintenance not saving** | Ensure required fields (e.g. reason, location) are filled. Check that related setup (reasons, locations) exists. |

## Night Audit

| Problem | What to try |
|--------|-------------|
| **Night audit fails or shows exceptions** | Resolve listed exceptions (e.g. open balances, invalid data). Ensure room charges are posted and cashier shifts are closed if required. |
| **System date did not advance** | Night audit may have been run in “report only” or dry-run mode, or an error stopped the run. Check audit run status and logs. |

## Reports

| Problem | What to try |
|--------|-------------|
| **Report empty or wrong dates** | Set the correct date range and filters. For night-audit reports, pick the correct audit run or business date. |
| **Report access denied** | Your user may not have permission for that report category. Ask your admin to adjust permissions. |

## General

| Problem | What to try |
|--------|-------------|
| **Menu item missing** | Your permissions may not include that module. Contact your administrator. |
| **Slow or timeout** | Check network and backend status. For heavy reports, narrow date range or filters. |
| **Wrong hotel / property** | Use the **hotel switcher** (if multi-property) to select the correct property. |

---

:::info **Still stuck?**  
Contact your PMS administrator or IT support with: what you were doing, which screen, and the exact message or behaviour you see.
:::
