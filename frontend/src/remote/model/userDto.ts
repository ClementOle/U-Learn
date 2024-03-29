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
import { GrantedAuthority } from './grantedAuthority';
import { ProgressionDto } from './progressionDto';


export interface UserDto {
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    authorities?: Array<GrantedAuthority>;
    createur?: boolean;
    credentialsNonExpired?: boolean;
    email?: string;
    enabled?: boolean;
    nom?: string;
    password?: string;
    prenom?: string;
    progressions?: Array<ProgressionDto>;
    scoreGlobal?: number;
    username?: string;
    usersId?: number;
}
