import { AwsCdkTypeScriptAppProject } from "@nikovirtala/projen-constructs";

const project = new AwsCdkTypeScriptAppProject({
    authorEmail: "niko.virtala@hey.com",
    authorName: "Niko Virtala",
    cdkVersion: "2.165.0",
    defaultReleaseBranch: "main",
    deps: ["@types/aws-lambda", "cdk-lambda-llrt"],
    description: "Example of using LLRT (Low Latency Runtime) on AWS Lambda.",
    devDeps: ["@nikovirtala/projen-constructs"],
    license: "MIT",
    licensed: true,
    name: "cdk-lambda-llrt-demo",
    repository: "https://github.com/nikovirtala/cdk-lambda-llrt-demo.git",
});

project.gitignore.addPatterns(".tmp/llrt/");

project.synth();
