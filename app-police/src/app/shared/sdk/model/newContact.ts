/**
 * coronavirus-server
 * coronavirus-server
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * (Schema options: { title: \'NewContact\' })
 */
export interface NewContact { 
  [key: string]: object | any;


    id: string;
    sourceUuid: string;
    targetUuid: string;
    timestampFrom: number;
    timestampTo: number;
    rssi?: number;
}

