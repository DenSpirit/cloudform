/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface ResolverProperties {
    ResponseMappingTemplateS3Location?: Value<string>
    TypeName: Value<string>
    DataSourceName: Value<string>
    RequestMappingTemplate?: Value<string>
    ResponseMappingTemplate?: Value<string>
    RequestMappingTemplateS3Location?: Value<string>
    ApiId: Value<string>
    FieldName: Value<string>
}

export default class Resolver extends ResourceBase {


    constructor(properties?: ResolverProperties) {
        super('AWS::AppSync::Resolver', properties)
    }
}
