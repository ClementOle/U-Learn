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
import { CoursDto } from './coursDto';
import { UserDto } from './userDto';


export interface CommentaireDto {
    commentaireId?: number;
    commentaireUtile?: string;
    cours?: CoursDto;
    texteCommentaire?: string;
    titreCommentaire?: string;
    user?: UserDto;
}
