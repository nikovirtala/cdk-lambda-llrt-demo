import { App } from "aws-cdk-lib";
import { LambdaLlrtStack } from "./stacks.ts";

// for development, use account/region from cdk cli
const devEnv = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new LambdaLlrtStack(app, "cdk-lambda-llrt-demo-dev", { env: devEnv });
// new LambdaLlrtStack(app, 'cdk-lambda-llrt-demo-prod', { env: prodEnv });

app.synth();
