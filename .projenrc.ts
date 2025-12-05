import { AwsCdkTypeScriptAppProject } from "@nikovirtala/projen-constructs";
import { Component, JsonFile } from "projen";

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

// Fix biome.jsonc schema path to use remote URL instead of local node_modules path
// This prevents issues with pnpm's hoisting behavior causing file mutations during build
class BiomeSchemaFix extends Component {
    constructor(project: AwsCdkTypeScriptAppProject) {
        super(project);
    }

    postSynthesize(): void {
        const biomeFile = this.project.tryFindObjectFile("biome.jsonc");
        if (biomeFile instanceof JsonFile) {
            // Override the $schema to use a stable remote URL
            biomeFile.patch({
                $schema: "https://biomejs.dev/schemas/1.9.4/schema.json",
            });
        }
    }
}

new BiomeSchemaFix(project);

project.synth();
