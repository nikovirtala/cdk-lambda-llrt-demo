import { AwsCdkApp } from "@nikovirtala/projen-aws-cdk-app";

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
    deps: ["@types/aws-lambda", "cdk-lambda-llrt"],
    depsUpgradeOptions: {
        workflowOptions: {
            labels: ["auto-approve", "auto-merge"],
        },
    },
    description: "Example of using LLRT (Low Latency Runtime) on AWS Lambda.",
    devDeps: ["@nikovirtala/projen-aws-cdk-app"],
    license: "MIT",
    licensed: true,
    name: "cdk-lambda-llrt-demo",
    repository: "https://github.com/nikovirtala/cdk-lambda-llrt-demo.git",
});

project.gitignore.addPatterns(".tmp/llrt/");

project.synth();
