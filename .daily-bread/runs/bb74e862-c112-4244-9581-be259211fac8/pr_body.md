> **DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**

## Daily Bread Run Summary

| Field | Value |
|-------|-------|
| Run ID | `bb74e862-c112-4244-9581-be259211fac8` |
| Client | fixture-test |
| Cluster | core-services |
| Base SHA | `58e5215a0e86590fcbf941536cbc9592b07e4afa` |
| Manifest Hash | `5ee94d1820218b456068eb6db5b185f07de43763ea911cd2b1b4bb3db5080e6d` |
| Vector Promotion | `pending_external_approval` |

### Results

| Status | Count |
|--------|-------|
| ✅ Passed | 1 |
| ⚠️ Review Required | 3 |
| ❌ Excluded | 4 |
| Total | 8 |

### ⚠️ Pages Requiring Review

- `about.html`: Missing <h1>; No relevant schema for page type "about"
- `index.html`: Missing <h1>; No relevant schema for page type "homepage"
- `out/services/professional.html`: Possible city-swap: only 32 unique non-proper-noun words; No relevant schema for page type "other"; Broken internal links (1): /services/professional/

### ❌ Excluded Pages (not in this PR)

- `out/about.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/index.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/locations/fake-city.html`: Placeholder leak: \[(?:City|Service|INSERT|undefined)\]
- `out/out/about.html`: Placeholder leak: src=["']PLACEHOLDER["']

### Staged Files (11)

<details><summary>Click to expand</summary>

- `out/services/consulting.html` (modified)
- `about.html` (modified)
- `index.html` (modified)
- `out/services/professional.html` (modified)
- `.daily-bread/runs/bb74e862-c112-4244-9581-be259211fac8/run_manifest.json` (created)
- `.daily-bread/runs/bb74e862-c112-4244-9581-be259211fac8/run_manifest.sha256` (created)
- `.daily-bread/runs/bb74e862-c112-4244-9581-be259211fac8/qa_report.json` (created)
- `.daily-bread/runs/bb74e862-c112-4244-9581-be259211fac8/qa_report.md` (created)
- `.daily-bread/runs/bb74e862-c112-4244-9581-be259211fac8/pr_body.md` (created)
- `.daily-bread/runs/bb74e862-c112-4244-9581-be259211fac8/sitemap_candidates.json` (created)
- `.daily-bread/runs/bb74e862-c112-4244-9581-be259211fac8/excluded_report.json` (created)

</details>

### Rollback

- **Unmerged:** Close this PR → delete staging branch → remove worktree
- **Merged:** `git revert <merge-sha>` → remove URLs from sitemap → resubmit in GSC
- **Internal links:** Re-run link engine excluding reverted paths

---
**DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**