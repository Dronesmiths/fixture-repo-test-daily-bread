# Daily Bread QA Report

| Field | Value |
|-------|-------|
| Run ID | `e2bf85f7-ff0f-4b72-ac89-0cae0ea788e8` |
| Client | fixture-test |
| Agency | aipilots |
| Domain | fixture-test.com |
| Cluster | core-services |
| Base SHA | `8970d064d8337e73e15b7e50dbb7ad66240d30bf` |
| Base Branch | main |
| Staging Branch | `staging/fixture-test/core-services/2026-07-16T17-48-24-e2bf85f7` |
| Timestamp | 2026-07-16T17:48:59.809Z |
| Manifest Hash | `56a57bb347af563103ae672a1ff21958936426d3b32946bdf4938d374b376883` |
| Vector Namespace | `fixture-test__daily_bread__e2bf85f7-ff0f-4b72-ac89-0cae0ea788e8` |
| Vector Promotion | pending_external_approval |

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | 5 |
| ✅ Passed | 0 |
| ⚠️ Review Required | 1 |
| ❌ Excluded | 4 |
| Avg Word Count | 2133 |
| Sitemap Candidates | 1 |

## ❌ Excluded Pages

| Page | Reason | Action |
|------|--------|--------|
| out/about.html | Placeholder leak: src=["']PLACEHOLDER["'] | restored_from_base |
| out/index.html | Placeholder leak: src=["']PLACEHOLDER["'] | restored_from_base |
| out/locations/fake-city.html | Placeholder leak: \[(?:City|Service|INSERT|undefined)\] | restored_from_base |
| out/services/consulting.html | Placeholder leak: src=["']PLACEHOLDER["'] | restored_from_base |

## ⚠️ Review Required Pages

These pages are staged in the PR but require manual review before approval.

| Page | Warnings | Word Count |
|------|----------|------------|
| out/services/professional.html | Possible city-swap: only 32 unique non-proper-noun words; No relevant schema for page type "other"; Broken internal links (1): /services/professional/ | 2333 |

## Social Proof

- Status: skipped
- Reason: No verified review data
- Data Source: none

## Sitemap Candidates (1)

- /out/services/professional.html

---
**STOP — AWAITING EXTERNAL HUMAN-CONTROLLED REVIEW**