module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/bryanstitt1/react-app-cicd-workflow/",
  plugins: [
    "@semantic-release/commit-analyzer", // reads commits and decide next version from them
    "@semantic-release/release-notes-generator", // generate release notes from commit messages
    ["@semantic-release/github", {
      assets: [
        { path: "build.zip", label: "Build"},
        { path: "coverage.zip", label: "coverage"}
      ]
    }], // responsible for creating a github release
  ],
};
