## Use Scenarios

Split acceptance into two runs: `/to-test red` before coding generates a red-green checklist from issue acceptance criteria and produces failure evidence; `/to-test green` after coding replays the checklist — all-green auto-ticks acceptance items, yellow items go to manual confirmation, red items produce a rework ticket for `/to-coding`. Testing is full browser flow, no manual page-by-page clicking.

## Example Effects

```terminal
$ /to-test red

> Issue: .ISSUE/2.4.0-2-to-test-green-phase-and-auto-tick.md
> Generated 6 cases (covers 4/4 acceptance criteria, 1 main flow)
> Executor: orca-cli (Orca embedded browser)
> App URL: http://127.0.0.1:3339 (reused running instance)

> [Red] RG-01 auto-tick on all-green — expected ticks did not happen (evidence: screenshots/RG-01-1.png)
> [Red] RG-02 yellow manual steps — report missing manual steps
> [Yellow] RG-03 visual assertion — pending manual confirmation
> [Red] RG-04 red rework ticket — ticket missing

> Red evidence: .TEST/2.4.0/2.4.0-2-2026-10-27T09-30-00/
> Next: /to-coding
```
