# Model Guidance

Default model: `auto`.

Use the cheapest reliable model for normal testing work.

Recommended choices:
- `auto` for day-to-day PR and commit testing.
- `composer-2.5` for fast local iterations where cost control matters.
- `gpt-5.5-medium` for complex PRs, unclear behavior, or high-risk features.
- A high-thinking model only for large architecture changes, security-sensitive flows, or difficult regressions.

Do not repeat a run with a heavier model unless:
- the first result was inconclusive;
- important context was missed;
- the diff is large or cross-cutting;
- the user explicitly asks for deeper analysis.
