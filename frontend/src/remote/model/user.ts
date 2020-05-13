/**
 * Spring Boot REST API
 * Language Management REST API
 *
 * OpenAPI spec version: 1.0-SNAPSHOT
 * Contact: techshard08@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import {Progression} from './progression';


export interface User {
    createur?: boolean;
    email?: string;
    nom?: string;
    password?: string;
    prenom?: string;
    progressions?: Array<Progression>;
    scoreGlobal?: number;
    usersId?: number;
}