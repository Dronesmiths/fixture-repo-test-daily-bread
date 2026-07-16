> **DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**

## Daily Bread Run Summary

| Field | Value |
|-------|-------|
| Run ID | `f42d9ff1-8d41-49f9-8e8b-b5d02b3680ee` |
| Client | fixture-test |
| Cluster | core-services |
| Base SHA | `adfd91f061d58c0712d9fdc4f3810a7d54a5f35d` |
| Manifest Hash | `c3f10c752374faee51039fda421a5aeb7ef2fdc8a5759ab564ad13c397c113b5` |
| Vector Promotion | `pending_external_approval` |

### Results

| Status | Count |
|--------|-------|
| ✅ Passed | 0 |
| ⚠️ Review Required | 1 |
| ❌ Excluded | 3 |
| Total | 4 |

### ⚠️ Pages Requiring Review

- `out/services/professional.html`: High repetition detected: 28/66 unique sentences; No relevant schema for page type "other"; Broken internal links (12): /services/professional/, /about/, /services/professional/, /services/professional/, /services/professional/ (+7 more)

### ❌ Excluded Pages (not in this PR)

- `out/about.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/index.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/locations/fake-city.html`: Placeholder leak: \[(?:City|Service|INSERT|undefined)\]

### Staged Files (8)

<details><summary>Click to expand</summary>

- `out/services/professional.html` (modified)
- `.daily-bread/runs/f42d9ff1-8d41-49f9-8e8b-b5d02b3680ee/run_manifest.json` (created)
- `.daily-bread/runs/f42d9ff1-8d41-49f9-8e8b-b5d02b3680ee/run_manifest.sha256` (created)
- `.daily-bread/runs/f42d9ff1-8d41-49f9-8e8b-b5d02b3680ee/qa_report.json` (created)
- `.daily-bread/runs/f42d9ff1-8d41-49f9-8e8b-b5d02b3680ee/qa_report.md` (created)
- `.daily-bread/runs/f42d9ff1-8d41-49f9-8e8b-b5d02b3680ee/pr_body.md` (created)
- `.daily-bread/runs/f42d9ff1-8d41-49f9-8e8b-b5d02b3680ee/sitemap_candidates.json` (created)
- `.daily-bread/runs/f42d9ff1-8d41-49f9-8e8b-b5d02b3680ee/excluded_report.json` (created)

</details>

### Rollback

- **Unmerged:** Close this PR → delete staging branch → remove worktree
- **Merged:** `git revert <merge-sha>` → remove URLs from sitemap → resubmit in GSC
- **Internal links:** Re-run link engine excluding reverted paths

---
**DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**