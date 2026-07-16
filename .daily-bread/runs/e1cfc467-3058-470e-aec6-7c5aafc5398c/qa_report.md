# Daily Bread QA Report

| Field | Value |
|-------|-------|
| Run ID | `e1cfc467-3058-470e-aec6-7c5aafc5398c` |
| Client | fixture-test |
| Agency | aipilots |
| Domain | fixture-test.com |
| Cluster | core-services |
| Base SHA | `52f0f60188c63a0af6e7dbd7d73dbf7890967518` |
| Base Branch | main |
| Staging Branch | `staging/fixture-test/core-services/2026-07-16T17-50-51-e1cfc467` |
| Timestamp | 2026-07-16T17:51:27.155Z |
| Manifest Hash | `f798b4b1159444feff70ef86f9b5e41624f6613c96b5d613297d7ffee3bf0905` |
| Vector Namespace | `fixture-test__daily_bread__e1cfc467-3058-470e-aec6-7c5aafc5398c` |
| Vector Promotion | pending_external_approval |

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | 5 |
| ✅ Passed | 0 |
| ⚠️ Review Required | 2 |
| ❌ Excluded | 3 |
| Avg Word Count | 2045 |
| Sitemap Candidates | 2 |

## ❌ Excluded Pages

| Page | Reason | Action |
|------|--------|--------|
| out/about.html | Placeholder leak: src=["']PLACEHOLDER["'] | restored_from_base |
| out/index.html | Placeholder leak: src=["']PLACEHOLDER["'] | restored_from_base |
| out/locations/fake-city.html | Placeholder leak: \[(?:City|Service|INSERT|undefined)\] | restored_from_base |

## ⚠️ Review Required Pages

These pages are staged in the PR but require manual review before approval.

| Page | Warnings | Word Count |
|------|----------|------------|
| out/services/consulting.html | No relevant schema for page type "other"; Broken internal links (3): /about/, /services/professional/, /about/ | 2041 |
| out/services/professional.html | Possible city-swap: only 32 unique non-proper-noun words; No relevant schema for page type "other"; Broken internal links (1): /services/professional/ | 2333 |

## Social Proof

- Status: skipped
- Reason: No verified review data
- Data Source: none

## Sitemap Candidates (2)

- /out/services/consulting.html
- /out/services/professional.html

---
**STOP — AWAITING EXTERNAL HUMAN-CONTROLLED REVIEW**