# Calendar versioning

Returns a calver string as `{year}.{month}.{day}.{seconds-in-day}`.

## Usage

A usage example exists in `.github\workflows\test-workflow.yml`. If you got
`nektos.act` installed, you should be able to run it with this command:

```bash
act --workflows ".github/workflows/test-workflow.yml" --job "test-job"
```

## To release

1. Run `npm run build` to generate a bundled `.\dist\index.js` file. Commit.
2. Create a github release tag with version number.
   1. On GitHub, go to Releases → Draft a new release → Tag version (e.g., `v1`).
