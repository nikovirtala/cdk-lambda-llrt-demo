# Project Structure

## Directory Layout

```
.
├── src/                    # Source code
│   ├── main.ts            # CDK app entry point
│   ├── stacks.ts          # Stack definitions
│   └── handler.ts         # Lambda function handler
├── test/                   # Test files
│   ├── __snapshots__/     # Vitest snapshots
│   └── main.test.ts       # Stack tests
├── .projen/               # Projen metadata (generated)
├── .kiro/                 # Kiro configuration
│   └── steering/          # AI assistant guidance
└── .projenrc.ts           # Projen configuration (source of truth)
```

## Code Organization

### Infrastructure (CDK)
- **main.ts**: App instantiation and stack creation
  - Defines environment configuration (account/region)
  - Creates stack instances
  - Calls `app.synth()`
  
- **stacks.ts**: Stack class definitions
  - Extends `Stack` from aws-cdk-lib
  - Contains all AWS resource definitions
  - Uses `LlrtFunction` construct for Lambda
  - Exports stack classes for reuse

### Lambda Functions
- **handler.ts**: Lambda function code
  - Uses AWS Lambda types from `@types/aws-lambda`
  - Exports `handler` function with proper typing
  - Returns `APIGatewayProxyResult` format

## Naming Conventions

- **Files**: kebab-case for configuration, camelCase for TypeScript
- **Classes**: PascalCase (e.g., `LambdaLlrtStack`)
- **Functions/Variables**: camelCase
- **Stack IDs**: kebab-case with environment suffix (e.g., `cdk-lambda-llrt-demo-dev`)
- **Construct IDs**: PascalCase (e.g., `LlrtFunction`, `LlrtFunctionUrl`)

## Import Patterns

- Use `.ts` extensions in relative imports: `import { LambdaLlrtStack } from "./stacks.ts"`
- Use `import.meta.dirname` for file paths (ESM, not `__dirname`)
- Use `node:` prefix for Node.js built-ins: `import { join } from "node:path"`
- Type-only imports use `type` keyword: `import type { Construct } from "constructs"`

## Testing

- Tests mirror source structure in `test/` directory
- Snapshot testing for CDK synthesized templates
- Test files use `.test.ts` suffix
- Snapshots stored in `__snapshots__/` subdirectories
