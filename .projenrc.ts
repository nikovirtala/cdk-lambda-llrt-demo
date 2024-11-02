import { AwsCdkApp } from "@nikovirtala/projen-aws-cdk-app";
import { javascript } from "projen";

const project = new AwsCdkApp({
  authorEmail: "niko.virtala@hey.com",
  authorName: "Niko Virtala",
  autoApproveOptions: {
    secret: "GITHUB_TOKEN",
    allowedUsernames: ["nikovirtala"],
  },
  cdkVersion: "2.165.0",
  defaultReleaseBranch: "main",
  dependabot: false,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ["auto-approve", "auto-merge"],
    },
  },
  description: "Example of using LLRT (Low Latency Runtime) on AWS Lambda.",
  devDeps: ["@nikovirtala/projen-aws-cdk-app"],
  license: "MIT",
  licensed: true,
  mergify: true,
  name: "cdk-lambda-llrt-demo",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9",
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      tabWidth: 2,
      trailingComma: javascript.TrailingComma.ALL,
    },
  },
  projenrcTs: true,
  repository: "https://github.com/nikovirtala/cdk-lambda-llrt-demo.git",
});

project.synth();
