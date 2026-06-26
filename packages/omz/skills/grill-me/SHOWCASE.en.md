## Use Scenarios

When you have a draft plan or design idea but suspect the details are fuzzy, use `/grill-me` to let the Agent interview you relentlessly. It walks down every branch of your decision tree, one question at a time, forcing precise language until both sides share the same understanding.

## Example Effects

```terminal
$ /grill-me I want to change skills page from showing SKILL.md to showing use scenarios + example effects

> Question 1/?: List page, detail page, or both?
You: Both

> Question 2/?: Where does the new content come from? A: skills-meta.ts fields / B: new SHOWCASE.md per skill
You: B

> Question 3/?: Format for "example effects"?
You: Simulated terminal interaction in code blocks

> Design tree complete. Consensus summary:
> 1. List + detail pages both updated ✓
> 2. SHOWCASE.zh.md + SHOWCASE.en.md per skill ✓
> ...
> Confirmed. Proceed to next workflow step.
```
