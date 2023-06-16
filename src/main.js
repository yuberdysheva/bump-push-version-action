import * as core from "@actions/core"
import * as github from "@actions/github"

export const githubToken = core.getInput("GITHUB_TOKEN", {required: true})

console.log(githubToken);

const octokit = github.getOctokit(githubToken)
console.log(octokit);
