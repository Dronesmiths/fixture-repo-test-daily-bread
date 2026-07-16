# Daily Bread QA Report

| Field | Value |
|-------|-------|
| Run ID | `bb74e862-c112-4244-9581-be259211fac8` |
| Client | fixture-test |
| Agency | aipilots |
| Domain | fixture-test.com |
| Cluster | core-services |
| Base SHA | `58e5215a0e86590fcbf941536cbc9592b07e4afa` |
| Base Branch | main |
| Staging Branch | `staging/fixture-test/core-services/2026-07-16T17-53-15-bb74e862` |
| Timestamp | 2026-07-16T17:54:41.689Z |
| Manifest Hash | `5ee94d1820218b456068eb6db5b185f07de43763ea911cd2b1b4bb3db5080e6d` |
| Vector Namespace | `fixture-test__daily_bread__bb74e862-c112-4244-9581-be259211fac8` |
| Vector Promotion | pending_external_approval |

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | 8 |
| ✅ Passed | 1 |
| ⚠️ Review Required | 3 |
| ❌ Excluded | 4 |
| Avg Word Count | 1881 |
| Sitemap Candidates | 4 |

## ❌ Excluded Pages

| Page | Reason | Action |
|------|--------|--------|
| out/about.html | Placeholder leak: src=["']PLACEHOLDER["'] | restored_from_base |
| out/index.html | Placeholder leak: src=["']PLACEHOLDER["'] | restored_from_base |
| out/locations/fake-city.html | Placeholder leak: \[(?:City|Service|INSERT|undefined)\] | restored_from_base |
| out/out/about.html | Placeholder leak: src=["']PLACEHOLDER["'] | deleted |

## ⚠️ Review Required Pages

These pages are staged in the PR but require manual review before approval.

| Page | Warnings | Word Count |
|------|----------|------------|
| about.html | Missing <h1>; No relevant schema for page type "about" | 1363 |
| index.html | Missing <h1>; No relevant schema for page type "homepage" | 1495 |
| out/services/professional.html | Possible city-swap: only 32 unique non-proper-noun words; No relevant schema for page type "other"; Broken internal links (1): /services/professional/ | 2333 |

## ✅ Passed Pages

| Page | Type | Word Count |
|------|------|------------|
| out/services/consulting.html | other | 2041 |

## Post-Exclusion Reconciliation

Files with links to excluded pages cleaned: 1
- out/services/consulting.html

## Social Proof

- Status: skipped
- Reason: No verified review data
- Data Source: none

## Sitemap Candidates (4)

- /about.html
- /
- /out/services/consulting.html
- /out/services/professional.html

---
**STOP — AWAITING EXTERNAL HUMAN-CONTROLLED REVIEW**