## Use Scenarios

When you encounter unfamiliar components, hooks, APIs, or business terms while reading a codebase, use `/to-explain` to have the Agent act as a "project translator." It is read-only — collecting code, directory structure, knowledge base, memory, and contextual evidence — then outputting a structured learning guide with facts, inferences, and unknowns clearly separated.

## Example Effects

```terminal
$ /to-explain the stripSkillMetadata function in lib/skills.ts

> Function: stripSkillMetadata(content: string): string
> Location: src/lib/skills.ts:16-23
>
> Purpose: Strips metadata lines from the top of SKILL.md files
>   - @author, @email, @group lines → removed
>   - First # heading and trailing blank lines → removed
>   Returns the remaining body content
>
> Fact: Used in getAllSkills() to exclude metadata from rendered output
> Inference: Designed so rendered HTML starts cleanly from content body
> TBD: Should this function also handle other metadata formats (e.g. YAML frontmatter)?
>
> [Evolution note] If SKILL.md gains more metadata fields, the regex here should be updated.
```
