import { AwsCdkApp } from "@nikovirtala/projen-aws-cdk-app";

const project = new AwsCdkApp({
  cdkVersion: "2.165.0",
  defaultReleaseBranch: "main",
  devDeps: ["@nikovirtala/projen-aws-cdk-app"],
  name: "cdk-lambda-llrt-demo",
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();
