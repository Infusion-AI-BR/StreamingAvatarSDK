/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Avatar SDK
 * Heygen Streaming Avatar
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@heygen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { NewSessionData } from './NewSessionData';
import {
    NewSessionDataFromJSON,
    NewSessionDataFromJSONTyped,
    NewSessionDataToJSON,
} from './NewSessionData';

/**
 * 
 * @export
 * @interface NewSessionResponse
 */
export interface NewSessionResponse {
    /**
     * 
     * @type {number}
     * @memberof NewSessionResponse
     */
    code?: number;
    /**
     * 
     * @type {NewSessionData}
     * @memberof NewSessionResponse
     */
    data?: NewSessionData;
}

/**
 * Check if a given object implements the NewSessionResponse interface.
 */
export function instanceOfNewSessionResponse(value: object): boolean {
    return true;
}

export function NewSessionResponseFromJSON(json: any): NewSessionResponse {
    return NewSessionResponseFromJSONTyped(json, false);
}

export function NewSessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewSessionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : NewSessionDataFromJSON(json['data']),
    };
}

export function NewSessionResponseToJSON(value?: NewSessionResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'data': NewSessionDataToJSON(value['data']),
    };
}

