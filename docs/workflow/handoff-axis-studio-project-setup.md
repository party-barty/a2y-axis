# Handoff — Provision the "Axis Studio" GitHub Project

**Audience:** the Claude bot running under the `party-barty` GitHub account.
**Why you got this:** the `a2y-b6t-mini` account can't create a Project v2 owned by `party-barty`, and the `party-barty` token is missing the `project` scope. Only you can unblock it.

This doc is a runbook. Execute the steps in order. Verify after each. Stop and surface to Abby if any step fails.

---

## What you're provisioning

A Project v2 named **Axis Studio**, owned by `party-barty`, public, linked to `party-barty/a2y-axis`. Schema:

| Field | Type | Options |
|---|---|---|
| Status | Single-select | Backlog, Ready, In Progress, In Review, Done |
| Type | Single-select | feature, bug, hotfix, chore, docs |
| Work area | Single-select | design, engineering, marketing, ai-automation, product, account-cs, leadership, operations, research, core |
| Priority | Single-select | P0, P1, P2 |

Once provisioned, the repo's existing GitHub Actions workflows (`.github/workflows/project-status-*.yml`) will auto-update the Status field on branch creation, PR open, and PR merge — but only after you set the `PROJECT_TOKEN` secret and `PROJECT_OWNER` / `PROJECT_NUMBER` repo vars.

---

## Step 1 — Refresh `gh` auth scope

The `party-barty` token currently has `gist, read:org, repo, workflow` but is missing `project`. Without `project`, `gh project create` fails with a permission error.

```bash
gh auth status
# Confirm 'party-barty' is the active account. If not:
gh auth switch --user party-barty

gh auth refresh -h github.com -s project
# Browser opens for OAuth re-consent. Approve the new scope.

gh auth status
# Verify the token now lists 'project' alongside the existing scopes.
```

**Verify:** `gh auth status` output for `party-barty` should include `project` in the scopes line.

---

## Step 2 — Create the project

```bash
gh project create --owner party-barty --title "Axis Studio" --format json
```

Expected output (sample):
```json
{
  "id": "PVT_kwHO...",
  "number": 3,
  "title": "Axis Studio",
  "url": "https://github.com/users/party-barty/projects/3"
}
```

**Save the `number` and `url`.** You'll need both. Set environment variables for the rest of this script:

```bash
export PROJECT_NUMBER=<number from output>
export PROJECT_URL=<url from output>
```

**Verify:** `gh project list --owner party-barty` should now show "Axis Studio".

---

## Step 3 — Make the project public

```bash
gh project edit "$PROJECT_NUMBER" --owner party-barty --visibility PUBLIC
```

**Verify:** open `$PROJECT_URL` in a browser — it should load without auth.

---

## Step 4 — Configure custom fields

The default project has only a Status field with `Todo / In Progress / Done`. Replace it and add the others.

### 4a. Update the Status field options

Get the Status field ID:
```bash
gh project field-list "$PROJECT_NUMBER" --owner party-barty --format json | jq '.fields[] | select(.name=="Status")'
```

Save the `id` from the output (looks like `PVTSSF_...`).

```bash
export STATUS_FIELD_ID=<id from above>
```

GraphQL doesn't let you mutate the option set of an existing single-select field directly; the cleanest path is to use the web UI: open `$PROJECT_URL`, click the Status field header → Edit → set options to **Backlog, Ready, In Progress, In Review, Done** in that order. Save.

(If you prefer CLI, you can delete the default Status field and recreate via `gh project field-create`, but the web UI is faster and less error-prone.)

### 4b. Create the Type field

```bash
gh project field-create "$PROJECT_NUMBER" --owner party-barty \
  --name "Type" \
  --data-type SINGLE_SELECT \
  --single-select-options "feature,bug,hotfix,chore,docs"
```

### 4c. Create the Work area field

```bash
gh project field-create "$PROJECT_NUMBER" --owner party-barty \
  --name "Work area" \
  --data-type SINGLE_SELECT \
  --single-select-options "design,engineering,marketing,ai-automation,product,account-cs,leadership,operations,research,core"
```

### 4d. Create the Priority field

```bash
gh project field-create "$PROJECT_NUMBER" --owner party-barty \
  --name "Priority" \
  --data-type SINGLE_SELECT \
  --single-select-options "P0,P1,P2"
```

**Verify:** `gh project field-list "$PROJECT_NUMBER" --owner party-barty` should list Status, Type, Work area, Priority (plus the default Title, Assignees, etc.).

---

## Step 5 — Enable built-in project workflows

Open `$PROJECT_URL/workflows` in a browser. Toggle ON:

- **Auto-add to project** — filter: `is:issue,pr repo:party-barty/a2y-axis`. Default Status: **Backlog**.
- **Item closed** — set Status to **Done**.
- **Pull request merged** — set Status to **Done**.

These cover most state transitions. The custom GitHub Actions workflows handle the cases not covered (branch-created → In Progress, PR-opened → In Review).

**Verify:** workflows page shows three enabled workflows.

---

## Step 6 — Add the b6t-mini account as a collaborator

So Abby's other Claude bot can also manage the project:

Open `$PROJECT_URL/settings/access` → Invite collaborators → add `a2y-b6t-mini` with **Admin** role.

**Verify:** the access page lists `a2y-b6t-mini` as Admin.

---

## Step 7 — Mint a `PROJECT_TOKEN` for the repo

The default `GITHUB_TOKEN` available to Actions does **not** carry `project` scope. The automation workflows need a fine-grained PAT or a classic PAT with `project` + `repo`.

### Create a classic PAT (simpler):

1. https://github.com/settings/tokens → Generate new token (classic)
2. Note: `Axis Studio project automation`
3. Expiration: 1 year
4. Scopes: `repo`, `project`
5. Copy the token (starts with `ghp_`)

### Add to repo:

```bash
gh secret set PROJECT_TOKEN -R party-barty/a2y-axis --body "<paste token>"
```

### Add the project vars to the repo:

```bash
gh variable set PROJECT_OWNER -R party-barty/a2y-axis --body "party-barty"
gh variable set PROJECT_NUMBER -R party-barty/a2y-axis --body "$PROJECT_NUMBER"
```

**Verify:**
```bash
gh secret list -R party-barty/a2y-axis    # should include PROJECT_TOKEN
gh variable list -R party-barty/a2y-axis  # should include PROJECT_OWNER, PROJECT_NUMBER
```

---

## Step 8 — Sanity check the automation

Trigger one of the automation workflows by opening a test issue and creating a branch named `chore/test-automation-1` (where `1` is the test issue's number). The `Project status — branch → In Progress` workflow should run and move the issue to In Progress on the board.

```bash
# Open a quick test issue:
gh issue create -R party-barty/a2y-axis \
  --title "[chore] Test automation wiring" \
  --body "Delete after automation verified." \
  --label "type:chore,priority:p2,team:engineering"

# Note the issue number from output (call it $N), then:
git checkout -b "chore/test-automation-$N"
git push -u origin "chore/test-automation-$N"
```

Watch `gh run list -R party-barty/a2y-axis --workflow="Project status — branch → In Progress"`. The run should succeed and the issue should appear in the **In Progress** column.

Clean up:
```bash
gh issue close $N -R party-barty/a2y-axis -c "Automation verified."
git push origin --delete "chore/test-automation-$N"
git checkout main
```

---

## Step 9 — Report back

Post a comment on the original tracking issue (or message Abby directly) with:

- The project URL
- The project number
- Confirmation that all 4 fields are configured
- Confirmation that the automation test passed
- Anything that didn't work as documented (so this runbook gets updated)

---

## Common failure modes

| Symptom | Likely cause | Fix |
|---|---|---|
| `gh project create` returns "does not have permission" | `project` scope not refreshed | redo Step 1 |
| `gh project field-create` returns "field already exists" | rerunning step 4 | safe to ignore — already done |
| Automation workflow run fails with "Resource not accessible" | `PROJECT_TOKEN` missing or wrong scope | regenerate PAT with `project` + `repo`, redo Step 7 |
| Issue not added to project on creation | Auto-add workflow filter mismatch | check Step 5 — filter must match repo exactly |
| Status field has wrong column names | Step 4a was skipped | use web UI to rename options |
