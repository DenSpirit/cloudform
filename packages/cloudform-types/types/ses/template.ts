/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class TemplateInner {
    HtmlPart?: Value<string>
    TextPart?: Value<string>
    TemplateName?: Value<string>
    SubjectPart?: Value<string>

    constructor(properties: TemplateInner) {
        Object.assign(this, properties)
    }
}

export interface TemplateProperties {
    Template?: Template
}

export default class Template extends ResourceBase {
    static Template = TemplateInner

    constructor(properties?: TemplateProperties) {
        super('AWS::SES::Template', properties)
    }
}
