/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Avatar SDK
 * Heygen Streaming Avatar
 *
 * The version of the OpenAPI document: 1.0.4
 * Contact: api@heygen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IceResponse
 */
export interface IceResponse {
    /**
     * 
     * @type {string}
     * @memberof IceResponse
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof IceResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the IceResponse interface.
 */
export function instanceOfIceResponse(value: object): value is IceResponse {
    return true;
}

export function IceResponseFromJSON(json: any): IceResponse {
    return IceResponseFromJSONTyped(json, false);
}

export function IceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function IceResponseToJSON(value?: IceResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'message': value['message'],
    };
}

