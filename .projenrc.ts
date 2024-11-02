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
    mergify: true,
    name: "cdk-lambda-llrt-demo",
    packageManager: javascript.NodePackageManager.PNPM,
    pnpmVersion: "9",
    prettier: true,
    prettierOptions: {
        settings: {
            printWidth: 120,
            tabWidth: 4,
            trailingComma: javascript.TrailingComma.ALL,
        },
    },
    projenrcTs: true,
    repository: "https://github.com/nikovirtala/cdk-lambda-llrt-demo.git",
});

project.vscode?.extensions.addRecommendations("dbaeumer.vscode-eslint", "esbenp.prettier-vscode");

project.vscode?.settings.addSettings({
    "editor.codeActionsOnSave": {
        "source.fixAll": "always",
        "source.organizeImports": "always",
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
});

project.synth();
