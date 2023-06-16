# bump-and-push-action

## What is it?
It is a [GitHub action](https://github.com/features/actions), that does the following things:
- when you want to version bump in your project, then commit and push it with github-token you can use this action

## How should I use it?

### Setting up
Create the file `.github/workflows/release.yml` at the root of your repo, providing at least the following inputs:
- `github-token` (who does create release PR)
- `npm-token` (who does publish NPM package)
- `node-version`, optional - which node version to use for running unit tests.
- `default-branch`, optional - branch to open release PR against.
- `npm-dist-tag`, optional - if you want to release version of package with custom tag (e.g. alpha, beta, latest).
- `prerelease`, optional - if set, create releases that are pre-major or pre-release version marked as pre-release on GitHub.
  Defaults false.

The file looks roughly like, you can change target branch, tokens and node version.
```yaml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: yuberdysheva/bump-and-push-action@v1
        with:
          github-token: ${{ secrets.GRAVITY_UI_BOT_GITHUB_TOKEN }}
          npm-token: ${{ secrets.GRAVITY_UI_BOT_NPM_TOKEN }}
```
