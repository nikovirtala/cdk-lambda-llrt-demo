import { join } from "node:path";
import { aws_lambda, CfnOutput, Stack, type StackProps } from "aws-cdk-lib";
import { LlrtFunction } from "cdk-lambda-llrt";

import type { Construct } from "constructs";

export class LambdaLlrtStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);

        // define resources here...
        const f = new LlrtFunction(this, "LlrtFunction", {
            applicationLogLevelV2: aws_lambda.ApplicationLogLevel.INFO,
            architecture: aws_lambda.Architecture.ARM_64,
            entry: join(import.meta.dirname, "handler.ts"),
            loggingFormat: aws_lambda.LoggingFormat.JSON,
            systemLogLevelV2: aws_lambda.SystemLogLevel.INFO,
        });

        const fUrl = new aws_lambda.FunctionUrl(this, "LlrtFunctionUrl", {
            function: f,
            authType: aws_lambda.FunctionUrlAuthType.NONE,
        });

        new CfnOutput(this, "LlrtFunctionUrl ", { value: fUrl.url });
    }
}
