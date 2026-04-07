---
type: cluster
pillar: accounts-payable-automation
keyword: duplicate invoice detection
intent: commercial
volume: M
difficulty: low
priority: p1
status: published
url: /accounts-payable-automation/duplicate-invoice-detection
word_count_current: 950
---

# Duplicate Invoice Detection & Sanity Checks

> **Parent pillar:** [[Accounts Payable Automation]]
> **Primary keyword:** `duplicate invoice detection`
> **URL:** `/accounts-payable-automation/duplicate-invoice-detection`

## Page intent
Replaces the generic "fraud-detection" cluster from the previous refocus. Honest scope: SHA-256 dedup + 10 rule-based sanity checks (no ML-based anomaly detection yet). Captures buyers searching for duplicate invoice prevention specifically.

## Real product specifics
- **SHA-256 fingerprinting** on every uploaded invoice
- **Duplicates blocked at the door** before any processing happens
- **10 rule-based sanity checks** as second line of defense:
  1. Date sanity (plausible range)
  2. Amount sanity (within historical norms for vendor)
  3. Vendor verification (in master, valid TIN)
  4. Line-item totals (sum to invoice total)
  5. Tax math (rate × base = amount)
  6. Currency consistency
  7. PO reference sanity
  8. GRN reference sanity
  9. Near-duplicate detection (almost-matches)
  10. Bank detail change detection (BEC red flag)

## What's NOT in scope today (honest)
- ML-based anomaly detection — on roadmap, not in production
- Vendor risk scoring — not in current implementation
- Network-based fraud detection — not in current implementation

The deterministic checks above handle the highest-impact fraud categories (duplicates, BEC, impersonation, math errors, inflated invoices) without overpromising ML capabilities the product doesn't ship.

## Sibling clusters
- [[invoice-processing-automation]] — Stage 2 (dedup) + Stage 5 (sanity) of the pipeline
- [[ai-invoice-extraction]] — what the sanity checks catch when AI is slightly off
- [[ap-approval-workflows]] — what flagged invoices route to

## Status: Published
