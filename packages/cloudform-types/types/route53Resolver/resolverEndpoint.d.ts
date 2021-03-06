import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IpAddressRequest {
    Ip?: Value<string>;
    SubnetId: Value<string>;
    constructor(properties: IpAddressRequest);
}
export interface ResolverEndpointProperties {
    IpAddresses: List<IpAddressRequest>;
    Direction: Value<string>;
    SecurityGroupIds: List<Value<string>>;
    Tags?: ResourceTag[];
    Name?: Value<string>;
}
export default class ResolverEndpoint extends ResourceBase {
    static IpAddressRequest: typeof IpAddressRequest;
    constructor(properties?: ResolverEndpointProperties);
}
