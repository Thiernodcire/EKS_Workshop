import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as blueprints from '@aws-quickstart/eks-blueprints';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export default class ClusterConstruct extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const account = props?.env?.account!;
    const region = props?.env?.region!;

    const blueprint = blueprints.EksBlueprint.builder()
    .account(account)
    .region(region)
    .addOns()
    .teams()
    .build(scope, id+'-stack');
    // example resource
    // const queue = new sqs.Queue(this, 'EksWorkshopQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
