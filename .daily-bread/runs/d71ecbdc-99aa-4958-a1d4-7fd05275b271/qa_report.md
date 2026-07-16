# Daily Bread QA Report

| Field | Value |
|-------|-------|
| Run ID | `d71ecbdc-99aa-4958-a1d4-7fd05275b271` |
| Client | fixture-test |
| Agency | aipilots |
| Domain | fixture-test.com |
| Cluster | core-services |
| Base SHA | `0d4302029d5a305612795c2c0da4f258632de42b` |
| Base Branch | main |
| Staging Branch | `staging/fixture-test/core-services/2026-07-16T17-42-23-d71ecbdc` |
| Timestamp | 2026-07-16T17:42:52.593Z |
| Manifest Hash | `823c68c4808f6b68e35048b6835f0df1cb7aa83d16b4df9366ce558ca3af5801` |
| Vector Namespace | `fixture-test__daily_bread__d71ecbdc-99aa-4958-a1d4-7fd05275b271` |
| Vector Promotion | pending_external_approval |

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | 4 |
| ✅ Passed | 0 |
| ⚠️ Review Required | 1 |
| ❌ Excluded | 3 |
| Avg Word Count | 2034 |
| Sitemap Candidates | 1 |

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
| out/services/professional.html | Possible city-swap: only 32 unique non-proper-noun words; No relevant schema for page type "other"; Broken internal links (1): /services/professional/ | 2333 |

## Social Proof

- Status: skipped
- Reason: No verified review data
- Data Source: none

## Sitemap Candidates (1)

- /out/services/professional.html

---
**STOP — AWAITING EXTERNAL HUMAN-CONTROLLED REVIEW**