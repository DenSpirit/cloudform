"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class WafAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WafAction = WafAction;
class ActivatedRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActivatedRule = ActivatedRule;
class WebACL extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::WAF::WebACL', properties);
    }
}
WebACL.WafAction = WafAction;
WebACL.ActivatedRule = ActivatedRule;
exports.default = WebACL;
