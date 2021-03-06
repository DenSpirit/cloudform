"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const routeTable_1 = require("./routeTable");
const placementGroup_1 = require("./placementGroup");
const vpcPeeringConnection_1 = require("./vpcPeeringConnection");
const vpcEndpointServicePermissions_1 = require("./vpcEndpointServicePermissions");
const networkAclEntry_1 = require("./networkAclEntry");
const internetGateway_1 = require("./internetGateway");
const launchTemplate_1 = require("./launchTemplate");
const volume_1 = require("./volume");
const spotFleet_1 = require("./spotFleet");
const vpnConnectionRoute_1 = require("./vpnConnectionRoute");
const networkInterfacePermission_1 = require("./networkInterfacePermission");
const eip_1 = require("./eip");
const securityGroupIngress_1 = require("./securityGroupIngress");
const subnetRouteTableAssociation_1 = require("./subnetRouteTableAssociation");
const route_1 = require("./route");
const flowLog_1 = require("./flowLog");
const securityGroupEgress_1 = require("./securityGroupEgress");
const networkInterface_1 = require("./networkInterface");
const subnetNetworkAclAssociation_1 = require("./subnetNetworkAclAssociation");
const subnetCidrBlock_1 = require("./subnetCidrBlock");
const natGateway_1 = require("./natGateway");
const securityGroup_1 = require("./securityGroup");
const subnet_1 = require("./subnet");
const vpc_1 = require("./vpc");
const instance_1 = require("./instance");
const dhcpOptions_1 = require("./dhcpOptions");
const networkAcl_1 = require("./networkAcl");
const vpnGatewayRoutePropagation_1 = require("./vpnGatewayRoutePropagation");
const egressOnlyInternetGateway_1 = require("./egressOnlyInternetGateway");
const networkInterfaceAttachment_1 = require("./networkInterfaceAttachment");
const customerGateway_1 = require("./customerGateway");
const trunkInterfaceAssociation_1 = require("./trunkInterfaceAssociation");
const volumeAttachment_1 = require("./volumeAttachment");
const host_1 = require("./host");
const eipAssociation_1 = require("./eipAssociation");
const vpnGateway_1 = require("./vpnGateway");
const vpcEndpoint_1 = require("./vpcEndpoint");
const vpcGatewayAttachment_1 = require("./vpcGatewayAttachment");
const vpnConnection_1 = require("./vpnConnection");
const vpcCidrBlock_1 = require("./vpcCidrBlock");
const ec2Fleet_1 = require("./ec2Fleet");
const vpcdhcpOptionsAssociation_1 = require("./vpcdhcpOptionsAssociation");
const vpcEndpointConnectionNotification_1 = require("./vpcEndpointConnectionNotification");
exports.default = {
    RouteTable: routeTable_1.default,
    PlacementGroup: placementGroup_1.default,
    VPCPeeringConnection: vpcPeeringConnection_1.default,
    VPCEndpointServicePermissions: vpcEndpointServicePermissions_1.default,
    NetworkAclEntry: networkAclEntry_1.default,
    InternetGateway: internetGateway_1.default,
    LaunchTemplate: launchTemplate_1.default,
    Volume: volume_1.default,
    SpotFleet: spotFleet_1.default,
    VPNConnectionRoute: vpnConnectionRoute_1.default,
    NetworkInterfacePermission: networkInterfacePermission_1.default,
    EIP: eip_1.default,
    SecurityGroupIngress: securityGroupIngress_1.default,
    SubnetRouteTableAssociation: subnetRouteTableAssociation_1.default,
    Route: route_1.default,
    FlowLog: flowLog_1.default,
    SecurityGroupEgress: securityGroupEgress_1.default,
    NetworkInterface: networkInterface_1.default,
    SubnetNetworkAclAssociation: subnetNetworkAclAssociation_1.default,
    SubnetCidrBlock: subnetCidrBlock_1.default,
    NatGateway: natGateway_1.default,
    SecurityGroup: securityGroup_1.default,
    Subnet: subnet_1.default,
    VPC: vpc_1.default,
    Instance: instance_1.default,
    DHCPOptions: dhcpOptions_1.default,
    NetworkAcl: networkAcl_1.default,
    VPNGatewayRoutePropagation: vpnGatewayRoutePropagation_1.default,
    EgressOnlyInternetGateway: egressOnlyInternetGateway_1.default,
    NetworkInterfaceAttachment: networkInterfaceAttachment_1.default,
    CustomerGateway: customerGateway_1.default,
    TrunkInterfaceAssociation: trunkInterfaceAssociation_1.default,
    VolumeAttachment: volumeAttachment_1.default,
    Host: host_1.default,
    EIPAssociation: eipAssociation_1.default,
    VPNGateway: vpnGateway_1.default,
    VPCEndpoint: vpcEndpoint_1.default,
    VPCGatewayAttachment: vpcGatewayAttachment_1.default,
    VPNConnection: vpnConnection_1.default,
    VPCCidrBlock: vpcCidrBlock_1.default,
    EC2Fleet: ec2Fleet_1.default,
    VPCDHCPOptionsAssociation: vpcdhcpOptionsAssociation_1.default,
    VPCEndpointConnectionNotification: vpcEndpointConnectionNotification_1.default
};
