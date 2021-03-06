import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCEndpointProperties {
    PolicyDocument?: any;
    PrivateDnsEnabled?: Value<boolean>;
    RouteTableIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    ServiceName: Value<string>;
    SubnetIds?: List<Value<string>>;
    VPCEndpointType?: Value<string>;
    VpcId: Value<string>;
}
export default class VPCEndpoint extends ResourceBase {
    constructor(properties?: VPCEndpointProperties);
}
