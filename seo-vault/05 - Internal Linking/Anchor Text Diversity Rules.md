---
type: linking-rule
---

# 🏷️ Anchor Text Diversity Rules

> Google penalizes over-optimized exact-match anchor text. Vary your anchors deliberately.

## The 60/20/20 Rule (technically 60/20/15/5)

For each target page, distribute anchor text across all incoming internal links roughly like this:

| Anchor Type | Share | Example (target = `/ai-fraud-detection`) |
|---|---|---|
| **Exact match** | 20% | "AI fraud detection" |
| **Partial match / variation** | 60% | "AI-powered fraud detection", "machine learning fraud detection", "intelligent fraud detection" |
| **Branded + descriptive** | 15% | "FinMark.ai's fraud detection platform" |
| **Generic / contextual** | 5% | "see how it works", "learn more here" |

## Anchor text examples per pillar

### P1 — `/ai-financial-automation`
| Anchor type | Examples |
|---|---|
| Exact | "AI financial automation" |
| Variation | "AI-powered financial automation", "intelligent finance automation", "the FinMark.ai platform", "AI-native finance automation" |
| Branded | "FinMark.ai's automation platform", "the FinMark.ai stack" |
| Generic | "learn how it works", "see the platform" |

### P2 — `/compliance-automation`
| Anchor type | Examples |
|---|---|
| Exact | "compliance automation software" |
| Variation | "automated compliance", "RegTech platform", "regulatory compliance automation", "compliance-as-a-service" |
| Branded | "FinMark.ai's compliance suite" |
| Generic | "explore compliance features" |

### P3 — `/ai-fraud-detection`
| Anchor type | Examples |
|---|---|
| Exact | "AI fraud detection" |
| Variation | "machine learning fraud detection", "AI-powered fraud prevention", "intelligent fraud detection" |
| Branded | "FinMark.ai's fraud platform" |
| Generic | "fraud detection in action" |

(Apply the same pattern to all pillars and clusters.)

## Rules to avoid Google penalties

1. **Never use the same exact-match anchor twice on the same page** — Google sees this as manipulative
2. **Never use 100% exact-match anchors across the site** — natural distribution is mixed
3. **Vary case slightly** — "AI fraud detection" vs "AI Fraud Detection" doesn't matter to Google but shows editorial care
4. **Match anchor to surrounding context** — the sentence around the link should support the anchor
5. **Use descriptive anchors, never "click here"** — wastes equity
6. **Avoid keyword stuffing in anchors** — "best AI financial automation software for finance teams 2026" is spammy

## Auditing anchor text diversity

After Phase 1, run this check (Screaming Frog or manual):
- Count all anchors pointing to each page
- Group by anchor text
- Verify no single exact-match exceeds 30% of inbound anchors

If a target page has 80% exact-match anchors → vary the text on 5+ pages immediately.
