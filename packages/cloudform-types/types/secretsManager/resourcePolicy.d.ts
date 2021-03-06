import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResourcePolicyProperties {
    SecretId: Value<string>;
    ResourcePolicy: any;
}
export default class ResourcePolicy extends ResourceBase {
    constructor(properties?: ResourcePolicyProperties);
}
