# action-fourcalver

Outputs a calver string in the format `{year}.{month}.{day}.{seconds-in-day}`
(UTC).

## What is this?

This GitHub Action generates a calendar versioning (calver) string based on the
current UTC date and time. The format is:

```
{year}.{month}.{day}.{seconds-in-day}
```

For example: `2025.07.24.43200` (for July 24, 2025, 12:00:00 UTC)

## Usage

Add the following step to your workflow:

```yaml
steps:
  - name: Run calver action
    uses: emptyother/action-fourcalver@v1
  - name: Show output
    run: echo "Result: ${{ steps.fourcalver.outputs.result }}"
```

Or see the full example in `.github/workflows/test-workflow.yml`.

If you have `nektos/act` installed, you can test locally with:

```bash
act --workflows ".github/workflows/test-workflow.yml" --job "test-job"
```

## Output

- `result`: The calver string, e.g., `2025.07.24.43200`

## Calver Format

- `year`: 4-digit year (UTC)
- `month`: 2-digit month (UTC)
- `day`: 2-digit day (UTC)
- `seconds-in-day`: Number of seconds since midnight UTC

## To release

1. Run `npm run build` to generate a bundled `./dist/index.js` file. Commit.
2. On GitHub, go to Releases → Draft a new release → Tag version (e.g., `v1`).
