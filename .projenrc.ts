import { AwsCdkApp } from "@nikovirtala/projen-aws-cdk-app";
import { javascript } from "projen";

const project = new AwsCdkApp({
  cdkVersion: "2.165.0",
  defaultReleaseBranch: "main",
  devDeps: ["@nikovirtala/projen-aws-cdk-app"],
  name: "cdk-lambda-llrt-demo",
  repository: "https://github.com/nikovirtala/cdk-lambda-llrt-demo.git",
  license: "MIT",
  licensed: true,
  authorName: "Niko Virtala",
  authorEmail: "niko.virtala@hey.com",
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      tabWidth: 2,
      trailingComma: javascript.TrailingComma.ALL,
    },
  },
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();
