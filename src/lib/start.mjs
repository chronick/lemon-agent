export const START_LESSONS = [
  {
    id: 'from-chat-to-agent',
    step: 1,
    minutes: 3,
    title: 'From answers to actions',
    short: 'What changes',
    description: 'See what a coding agent can do inside a project, and what still belongs to you.',
    tryThis: `Before doing anything, inspect this project and tell me: what it appears to be, how it is organized, which project instructions you read, and what CLI commands seem to check that it works. Do not edit files yet.`,
  },
  {
    id: 'choose-a-safe-task',
    step: 2,
    minutes: 4,
    title: 'Choose a safe first task',
    short: 'Bound the job',
    description: 'Pick work that is small, reversible, and easy to check before you delegate it.',
    tryThis: `Help me choose a safe first task in this project. Suggest three small, reversible improvements that touch a narrow area and have an obvious way to verify them. Do not make any changes yet.`,
  },
  {
    id: 'write-the-brief',
    step: 3,
    minutes: 6,
    title: 'Write the brief',
    short: 'Goal, scope, proof',
    description: 'Turn a wish into a bounded assignment with a goal, scope, non-goals, and proof.',
    tryThis: `Turn my request into a four-part brief: Goal, Scope, Do not change, and Done when. Ask one question at a time until each part is concrete. Do not edit files yet.`,
  },
  {
    id: 'plan-before-code',
    step: 4,
    minutes: 4,
    title: 'Plan before code',
    short: 'Name the forks',
    description: 'Use a short plan to expose assumptions while they are still cheap to change.',
    tryThis: `Read the relevant files and propose a short plan before editing. Name any decision where two reasonable approaches would produce meaningfully different results. Recommend one, then wait for my approval.`,
  },
  {
    id: 'watch-the-work',
    step: 5,
    minutes: 4,
    title: 'Watch the work',
    short: 'Know when to stop',
    description: 'Let the agent move while keeping scope changes, risky actions, and surprises visible.',
    tryThis: `Carry out the approved plan. Stay inside the agreed scope. If you discover a larger problem, a destructive action, or a genuine design fork, stop and ask instead of expanding the task.`,
  },
  {
    id: 'verify-the-result',
    step: 6,
    minutes: 5,
    title: 'Verify the result',
    short: 'Evidence over confidence',
    description: 'Ask for the smallest useful proof, then check the artifact instead of trusting a summary.',
    tryThis: `Verify this change with the smallest focused check that could prove it wrong, then run the normal project check if appropriate. Show me the exact result and any limitations. Do not summarize a check you did not run.`,
  },
  {
    id: 'review-and-save',
    step: 7,
    minutes: 4,
    title: 'Review and save',
    short: 'Inspect the change',
    description: 'Review the diff, remove surprises, and leave a checkpoint the next session can understand.',
    tryThis: `Show me the diff and walk through it by file. Call out anything outside the original brief, any generated files, and any check that was skipped. Then list lessons from this session that belong in project instructions, a reusable skill, or a small deterministic tool. Do not write those or commit until I approve.`,
  },
];

export const startLessonById = (id) => START_LESSONS.find((lesson) => lesson.id === id);

export const TOOL_OPTIONS = [
  { id: 'generic', label: 'Any coding agent', lead: 'With the project open in your coding agent, paste:' },
  { id: 'codex', label: 'Codex', lead: 'Start a Codex task in the project, then paste:' },
  { id: 'claude', label: 'Claude Code', lead: 'Open Claude Code in the project, then paste:' },
  { id: 'cursor', label: 'Cursor', lead: 'Open Cursor Agent for the project, then paste:' },
];
