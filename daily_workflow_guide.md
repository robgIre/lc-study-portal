# Daily Workflow Guide — Claude Code + Study Portal

## Understanding Your Two Environments

You have two places you can run Claude Code:

| | Your Mac | OD (Dev Server) |
|---|---|---|
| How to open | Terminal or VS Code on your laptop | SSH into OD, or VS Code remote |
| Google Drive path | `~/Google Drive/My Drive/claude/` | `~/gdrive/` (mounted via mclone) |
| Claude memory path | `~/.claude/projects/.../memory/` on your Mac | `~/.claude/projects/.../memory/` on the OD |
| Persists across resets? | Yes (it's your Mac) | OD resets wipe everything except Google Drive |

**Why you've lost work before:** Claude's memory files are local to whichever machine you're on. If you work on your Mac one day and the OD the next, the memory doesn't carry over. Your Google Drive syncs between both, but Claude's memory files are NOT on Google Drive.

## Where To Run Claude Code

**Use your Mac for personal projects like the study portal.** Your Google Drive is natively mounted, Claude memory persists, and you don't need Meta's dev infrastructure.

**Use the OD only for Meta work** (code that needs the monorepo, internal tools, etc.)

**Terminal vs VS Code:** Terminal is simpler and more reliable. Open Terminal, type `claude`, and you're in. Use VS Code or Finder to preview HTML files in a browser.

## Morning Checklist

1. Open **Terminal** on your Mac
2. Navigate to your workspace:
   ```
   cd ~/Google\ Drive/My\ Drive/claude
   ```
3. Launch Claude Code:
   ```
   claude
   ```
4. Say: **"Good morning — what do you remember?"** — Claude will read the memory file and recap where things are
5. Tell Claude your plan — e.g. "today I want to build the biology study aid"

## Before Logging Off Checklist

1. Say: **"Save what we did today to memory"** — Claude will update MEMORY.md with progress, decisions, anything unfinished
2. Flag anything specific — e.g. "remember that I want flashcards added to all subjects"
3. Say what's next — e.g. "tomorrow I want to do maths" — Claude will save it
4. Verify your files are on Google Drive:
   ```
   ls ~/Google\ Drive/My\ Drive/claude/01_projects/12_RG\ Private/lc_study_portal/
   ```
   If you can see your files there, they're synced and safe.

## If You Must Use the OD

1. Make sure Google Drive is mounted (`ls ~/gdrive/`)
2. If not mounted, run `/gdrive-setup`
3. Work on files in `~/gdrive/01_projects/12_RG Private/lc_study_portal/`
4. Claude's memory won't be there — tell Claude the context again, or say "read the CLAUDE.md in my workspace"

## Study Portal Status

| Subject | Status |
|---------|--------|
| Chemistry | Done |
| Accounting | Done |
| Biology | To do |
| Maths | To do |
| English | To do |
| Spanish | To do |
| Economics | To do |

Files location: `~/Google Drive/My Drive/claude/01_projects/12_RG Private/lc_study_portal/`
