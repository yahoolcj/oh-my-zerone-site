## Use Scenarios

When your coding model (e.g., DeepSeek, GLM) lacks vision capabilities, use `/image-to-context` to convert screenshots, design mockups, error logs, or architecture diagrams into structured text context via an external vision model API. The result is automatically injected into the current conversation, ready for `/to-coding` or other downstream skills.

> **Prerequisite**: Requires `zerone/cli >= 0.8.0` and `zerone set vision-apikey` to configure the vision model API key. See configuration guide below.

## Usage

```text
/image-to-context <scene description>
```

Use natural language for scene description; the skill auto-matches the appropriate output template.

## Supported Image Types

| Scene | Example Description | Output Content |
|-------|-------------------|----------------|
| UI Design | "This is the login page screenshot" | Layout, component list (with properties), colors & spacing, interaction states, annotations |
| Error Log | "Console error screenshot" | Error text verbatim, file paths, stack frames, inferred causes with confidence |
| Architecture Diagram | "This is the system architecture" | Node list, relationships & connections, data flow direction, constraints |
| General | "Help me understand this image" | Image type, full content description, code-relevant information |

## Example Effects

### Scenario 1: UI Design → Code

```terminal
$ /image-to-context This is the login page screenshot [upload login.png]

📷 image-to-context result:

## Overall Layout
Single region, centered card layout.

## Scene Template: UI Design
- **Theme**: dark, background gradient #0a0a2e → #1a1a4e
- **Component List**:
  - Avatar placeholder | circle 80px | border 2px #4a6cf7 | centered
  - Title "欢迎回来" | #fff | 24px | font-weight 700 | centered
  - Subtitle "请输入您的账号信息" | #9ca3af | 14px | centered
  - Input | type:text | placeholder:"请输入用户名或邮箱" | left user icon | h 48px | radius 8px
  - Input | type:password | placeholder:"请输入密码" | left lock icon | right eye toggle | h 48px
  - Button "登 录" | gradient #4a6cf7→#6a8cf7 | radius 8px | h 48px | full width
  - Link "忘记密码？" | #4a6cf7 | 12px | right-aligned
  - Text group "还没有账号？立即注册" | "立即注册" link color #4a6cf7
- **Spacing**: avatar→title 16px, title→subtitle 8px, subtitle→form 24px, fields 16px apart, forgot pwd→button 24px
- **Interaction States**: input default border transparent, focus #4a6cf7
- **Not Shown**: hover state (not shown), loading state (not shown), error state (not shown)

> The above context has been injected. Downstream skills can now reference it.

$ /to-coding Implement this login page
> [Agent starts coding based on the context...]
```

### Scenario 2: Error Screenshot → Locate

```terminal
$ /image-to-context This is the build error screenshot [upload error.png]

📷 image-to-context result:

## Overall Layout
Single region, terminal window screenshot.

## Scene Template: Error / Terminal
- **Error Text Verbatim**:
  `TypeError: Cannot read properties of undefined (reading 'map')`
  `at LoginForm.vue:42:24`
- **File Path**: `src/components/LoginForm.vue`
- **Stack Frames**:
  - LoginForm.vue:42 — setup()
  - useForm.ts:18 — parseFields()
- **Inference**: `LoginForm.vue` line 42 calls `.map()` on undefined — likely missing null guard on API response. Confidence: high
- **Unclear/Incomplete**: remaining stack frames truncated (not shown)

> The above context has been injected. Downstream skills can now reference it.

$ /to-locate Locate the issue based on the error above
> [Agent locates LoginForm.vue line 42...]
```

### Scenario 3: User Annotations

```terminal
$ /image-to-context This is the page screenshot [upload annotated.png]

📷 image-to-context result:

## Overall Layout
...

- Button "立即购买" | gradient #ff6600→#ff8800 | radius 8px | h 48px | full width
  ⚠️ User annotation: red rectangle box around "立即购买" button, likely indicating this element is the development priority
- Input | placeholder:"优惠码" | left tag icon
  ⚠️ User annotation: green arrow from promo code input pointing right, with handwritten note "拼接逻辑见 doc", likely indicating special concatenation logic for this field

> The above context has been injected. Downstream skills can now reference it.
```

## Tips

- Multiple images supported; results output per image as `## Image 1`, `## Image 2`, etc.
- Box selections, arrows, circles, and other annotations are explicitly detected and marked `⚠️`.
- No disk writes — results are injected into conversation context only.
- No hard image count limit; actual capacity depends on the vision model's context window.
