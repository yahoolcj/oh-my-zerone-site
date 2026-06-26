## Use Scenarios

When your plan needs project-level scrutiny, use `/grill-with-docs` to let the Agent challenge it against the project's CONTEXT.md (domain model) and ADRs (architecture decision records). It stress-tests your ideas using the project's own terminology and recorded decisions, syncing docs when decisions are finalized.

## Example Effects

```terminal
$ /grill-with-docs I want to add a "related skills" section to the skill detail page

> Consulting CONTEXT.md: Skills are independently composable, no hierarchy
> Consulting ADR-003: Detail pages follow minimal information architecture, no sidebars or recommendations
> ⚠️ Your plan conflicts with ADR-003. Suggestions:
>   1. Withdraw this proposal
>   2. Or initiate an ADR amendment justifying the recommendation feature
> Pick a direction.
```
