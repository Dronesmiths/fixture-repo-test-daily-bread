> **DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**

## Daily Bread Run Summary

| Field | Value |
|-------|-------|
| Run ID | `6be8fcf0-0f5f-4530-b91d-f520ffa7df77` |
| Client | fixture-test |
| Cluster | core-services |
| Base SHA | `06cd2a5042d60958ace021bc46ca2b512e6d1e69` |
| Manifest Hash | `fc151b590bb0b588a8321489d9c0602c7386d806e5ab9d4859bed1570da36875` |
| Vector Promotion | `pending_external_approval` |

### Results

| Status | Count |
|--------|-------|
| ✅ Passed | 0 |
| ⚠️ Review Required | 2 |
| ❌ Excluded | 3 |
| Total | 5 |

### ⚠️ Pages Requiring Review

- `out/services/consulting.html`: High repetition detected: 58/84 unique sentences; No relevant schema for page type "other"; Broken internal links (3): /about/, /services/professional/, /about/
- `out/services/professional.html`: Possible city-swap: only 32 unique non-proper-noun words; No relevant schema for page type "other"; Broken internal links (1): /services/professional/

### ❌ Excluded Pages (not in this PR)

- `out/about.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/index.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/locations/fake-city.html`: Placeholder leak: \[(?:City|Service|INSERT|undefined)\]

### Staged Files (9)

<details><summary>Click to expand</summary>

- `out/services/consulting.html` (modified)
- `out/services/professional.html` (modified)
- `.daily-bread/runs/6be8fcf0-0f5f-4530-b91d-f520ffa7df77/run_manifest.json` (created)
- `.daily-bread/runs/6be8fcf0-0f5f-4530-b91d-f520ffa7df77/run_manifest.sha256` (created)
- `.daily-bread/runs/6be8fcf0-0f5f-4530-b91d-f520ffa7df77/qa_report.json` (created)
- `.daily-bread/runs/6be8fcf0-0f5f-4530-b91d-f520ffa7df77/qa_report.md` (created)
- `.daily-bread/runs/6be8fcf0-0f5f-4530-b91d-f520ffa7df77/pr_body.md` (created)
- `.daily-bread/runs/6be8fcf0-0f5f-4530-b91d-f520ffa7df77/sitemap_candidates.json` (created)
- `.daily-bread/runs/6be8fcf0-0f5f-4530-b91d-f520ffa7df77/excluded_report.json` (created)

</details>

### Rollback

- **Unmerged:** Close this PR → delete staging branch → remove worktree
- **Merged:** `git revert <merge-sha>` → remove URLs from sitemap → resubmit in GSC
- **Internal links:** Re-run link engine excluding reverted paths

---
**DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**