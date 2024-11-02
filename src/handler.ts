import { APIGatewayProxyResult, Handler } from "aws-lambda";

export const handler: Handler = async (event, context): Promise<APIGatewayProxyResult> => {
    const data = { event: event, context: context };
    console.log(data);
    return {
        body: JSON.stringify(data),
        statusCode: 200,
    };
};
