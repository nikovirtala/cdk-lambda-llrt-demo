import { AwsCdkTypeScriptAppProject } from "@nikovirtala/projen-constructs";
import { DependencyType } from "projen";

const project = new AwsCdkTypeScriptAppProject({
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
        exclude: ["@nikovirtala/projen-constructs"],
        workflowOptions: {
            labels: ["auto-approve", "auto-merge"],
        },
    },
    description: "Example of using LLRT (Low Latency Runtime) on AWS Lambda.",
    devDeps: ["@nikovirtala/projen-constructs@^0.2.26"],
    license: "MIT",
    licensed: true,
    name: "cdk-lambda-llrt-demo",
    repository: "https://github.com/nikovirtala/cdk-lambda-llrt-demo.git",
});

project.gitignore.addPatterns(".tmp/llrt/");

// Ensure @nikovirtala/projen-constructs has the correct version in deps.json
const projenConstructsDep = project.deps.all.find((dep) => dep.name === "@nikovirtala/projen-constructs");
if (projenConstructsDep) {
    // Force the version to be explicitly set
    project.deps.removeDependency("@nikovirtala/projen-constructs");
    project.deps.addDependency("@nikovirtala/projen-constructs@^0.2.26", DependencyType.BUILD);
}

project.synth();
