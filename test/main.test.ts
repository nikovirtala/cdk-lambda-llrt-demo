import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { beforeAll, describe, test } from "vitest";
import { LambdaLlrtStack } from "../src/stacks";

describe("LambdaLlrtStack", () => {
    let template: Template;

    beforeAll(() => {
        /* Skip bundling: the tests check the resources, not the asset hash of the bundle, which
         * changes with the handler, esbuild and the downloaded LLRT runtime. */
        const app = new App({ context: { "aws:cdk:bundling-stacks": [] } });
        template = Template.fromStack(new LambdaLlrtStack(app, "test"));
    });

    test("creates an arm64 function on the custom runtime used by LLRT", () => {
        template.resourceCountIs("AWS::Lambda::Function", 1);
        template.hasResourceProperties("AWS::Lambda::Function", {
            Architectures: ["arm64"],
            Runtime: "provided.al2023",
            LoggingConfig: { ApplicationLogLevel: "INFO", LogFormat: "JSON", SystemLogLevel: "INFO" },
        });
    });

    test("exposes the function through a public function URL", () => {
        template.hasResourceProperties("AWS::Lambda::Url", { AuthType: "NONE" });
        template.hasOutput("LlrtFunctionUrl", {});
    });
});
