# action-fourcalver

Outputs a calver string in the format `{year}.{month}.{day}.{revision}` (UTC).

## What is this?

This GitHub Action generates a calendar versioning (calver) string based on the
current UTC date and time. The format is:

```
{year}.{month}.{day}.{revision}
```

Where:
- `year`: 4-digit year (UTC)
- `month`: 1- or 2-digit month (UTC, not zero-padded)
- `day`: 1- or 2-digit day (UTC, not zero-padded)
- `revision`: A value mapped percent-wise from seconds since midnight UTC (0-86399) to 0-65534 (C# revision version range)

For example: `2025.7.24.32767` (for July 24, 2025, 12:00:00 UTC)

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

- `result`: The calver string, e.g., `2025.7.24.32767`

## Calver Format

- `year`: 4-digit year (UTC)
- `month`: 1- or 2-digit month (UTC, not zero-padded)
- `day`: 1- or 2-digit day (UTC, not zero-padded)
- `revision`: Number between 0 and 65534, mapped percent-wise from seconds since midnight UTC

## To release

1. Run `npm run build` to generate a bundled `./dist/index.js` file. Commit.
2. On GitHub, go to Releases → Draft a new release → Tag version (e.g., `v1`).
