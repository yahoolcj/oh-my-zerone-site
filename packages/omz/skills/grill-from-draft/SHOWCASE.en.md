<!--
  @by oh-my-zerone
-->

## Use Scenarios

When you already have a draft requirements document, design sketch, or any written content that needs refining, use `/grill-from-draft` to let the Agent interview you starting from that content.

How it differs from the other grill skills:
- `/grill-me`: Start from zero — for when you only have an idea and no written material yet
- `/grill-from-draft` (this skill): Start from an existing document — refine gaps first, then discover uncovered branches
- `/grill-with-docs`: Stress-test against the project's CONTEXT.md and ADRs — for aligning with the project domain model

Two input modes:
1. **File path**: `/grill-from-draft ./draft-reqs.md` → produces `draft-reqs_grilled.md`
2. **Pasted content**: `/grill-from-draft` then paste text → summarize consensus in conversation

## Example Effects

### File path input

```terminal
$ /grill-from-draft ./draft-reqs.md

> Read draft-reqs.md. Issues identified:

> Phase 1 - Question 1/?: The document mentions "user management" without defining scope. Recommendation: registration, login, role assignment. Confirm?
You: Also add profile editing and account deletion

> Phase 1 - Question 2/?: Line 3 says "export Excel", line 12 says "export CSV" — one feature or two?
You: Both formats

> Phase 1 completeness done. Entering Phase 2

> Phase 2 - Question 3/?: No mention of access control. Should admin and regular users have different permissions?
You: Yes, admin manages all users, regular users only edit their own info

> Phase 2 - Question 4/?: Should exports be async for large datasets?
You: No, data volume is small

> Design tree complete. Generated draft-reqs_grilled.md:
> - Link to original at top
> - User management: registration, login, role assignment, profile editing, deletion ✓
> - Export formats: Excel + CSV ✓
> - Access control: admin (all users), regular (self only) ✓
> - Export mode: synchronous ✓
> Confirmed. Proceed to next workflow step.
```

### Pasted content input

```terminal
$ /grill-from-draft

You: [pasted: I want to build a notification center where users receive system and business notifications]

> Received pasted content. Issues identified:

> Phase 1 - Question 1/?: What's the difference between "system" and "business" notifications? Recommendation: system = platform-level (maintenance announcements), business = triggered by business operations (order status changes)
You: Correct

> Phase 1 - Question 2/?: Delivery channel — in-app messages only, or also push/email/SMS?
You: In-app messages only for now

> Design tree complete. Consensus summary:
> - Notification types: system (platform-level) + business (order/ticket operation triggers)
> - Delivery: in-app messages only
> Confirmed. Proceed to next workflow step.
```
