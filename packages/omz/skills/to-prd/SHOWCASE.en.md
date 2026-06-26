## Use Scenarios

After rounds of discussion with the Agent, when requirements are clear but scattered across the conversation, use `/to-prd` to converge them into a structured PRD document. It extracts version, module name, TODOQ checklist, data models, and interaction rules into a standard `.PRD/<version>.md` file.

## Example Effects

```terminal
$ /to-prd

> Synthesizing conversation context...
> Module: Skills page showcase revamp
> Version: 2.1.0 (enhancement)
> Extracted 6 TODOQ items
> Extracted SkillEntry data model extension
> Generated .PRD/2.1.0.md
> Review the content, then proceed with /to-coding.
```
