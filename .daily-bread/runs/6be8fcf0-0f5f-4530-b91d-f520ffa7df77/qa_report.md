# Daily Bread QA Report

| Field | Value |
|-------|-------|
| Run ID | `6be8fcf0-0f5f-4530-b91d-f520ffa7df77` |
| Client | fixture-test |
| Agency | aipilots |
| Domain | fixture-test.com |
| Cluster | core-services |
| Base SHA | `06cd2a5042d60958ace021bc46ca2b512e6d1e69` |
| Base Branch | main |
| Staging Branch | `staging/fixture-test/core-services/2026-07-16T17-49-41-6be8fcf0` |
| Timestamp | 2026-07-16T17:50:16.687Z |
| Manifest Hash | `fc151b590bb0b588a8321489d9c0602c7386d806e5ab9d4859bed1570da36875` |
| Vector Namespace | `fixture-test__daily_bread__6be8fcf0-0f5f-4530-b91d-f520ffa7df77` |
| Vector Promotion | pending_external_approval |

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | 5 |
| ✅ Passed | 0 |
| ⚠️ Review Required | 2 |
| ❌ Excluded | 3 |
| Avg Word Count | 1946 |
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
| out/services/consulting.html | High repetition detected: 58/84 unique sentences; No relevant schema for page type "other"; Broken internal links (3): /about/, /services/professional/, /about/ | 1481 |
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