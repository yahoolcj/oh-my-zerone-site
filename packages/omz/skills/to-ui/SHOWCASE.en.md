## Use Scenarios

After the PRD is ready, when you want to preview the page's visual design and interaction prototype before coding, use `/to-ui` to generate a standalone HTML prototype from the PRD and open it in the browser. It uses z1-design palette, Tailwind CSS layout, and GSAP animation.

## Example Effects

```terminal
$ /to-ui .PRD/2.1.0.md

> Parsing PRD data model and interaction rules...
> Generating UI prototype: .UI/2.1.0-skills-showcase.html
>
> Layout preview:
> ┌─────────────────────────────────────┐
> │ [All] [clarify] [plan] [develop] ... │  ← category filter bar
> ├──────────────────┬──────────────────┤
> │ ╭─ grill-me ────│ ╭─ to-prd ──────│
> │ │ 🔵 clarify     │ │ 🟣 plan        │
> │ │ Relentlessly.. │ │ Turn context.. │
> │ │ ┌─terminal──┐ │ │ ┌─terminal──┐ │
> │ │ │ $ /grill.. │ │ │ │ $ /to-prd │ │
> │ │ └───────────┘ │ │ └───────────┘ │
> │ ╰───────────────│ ╰───────────────│
> └──────────────────┴──────────────────┘
>
> Prototype opened. Confirm and proceed to /to-coding.
```
