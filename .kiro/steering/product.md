# Product Overview

This is a demonstration project showcasing AWS Lambda functions using LLRT (Low Latency Runtime), a lightweight JavaScript runtime optimized for fast cold starts and reduced memory usage.

The project deploys a Lambda function with a public Function URL that returns event and context information as JSON. It serves as a reference implementation for using LLRT with AWS CDK.

Key features:
- LLRT runtime for improved Lambda performance
- Function URL for direct HTTP access (no API Gateway required)
- JSON structured logging
- ARM64 architecture for cost efficiency
