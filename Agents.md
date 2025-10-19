## Agents

This project currently uses a single automation agent, Codex, to assist with code generation and refactoring tasks. Codex is powered by OpenAI's GPT-5 model and is integrated through the Codex CLI toolchain.

### Responsibilities

- Review the codebase and understand requested changes.
- Generate or refactor code according to the requirements provided by the user.
- Offer explanations for code modifications when necessary.

### Usage Guidelines

- Commands are executed via the Codex CLI, primarily using `bash`.
- Non-destructive operations are preferred; resetting or force pushing is avoided unless explicitly requested.
- When editing files manually, Codex uses the `apply_patch` tool to keep changes minimal and traceable.

### Collaboration Tips

- Provide clear, step-by-step instructions for complex tasks.
- Share relevant context or file paths to avoid misunderstandings.
- Confirm results or request adjustments if the outcome differs from expectations.
