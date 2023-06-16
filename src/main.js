import * as core from "@actions/core"
import * as github from "@actions/github"

export const githubToken = core.getInput("github-token", {required: true})

const octokit = github.getOctokit(githubToken)
console.log(octokit);

