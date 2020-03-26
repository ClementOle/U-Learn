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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CategorieDto } from '../model/categorieDto';
import { CoursDto } from '../model/coursDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UlearnService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Renvoie toute les catégorie
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllCategorieUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<CategorieDto>>;
    public getAllCategorieUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CategorieDto>>>;
    public getAllCategorieUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CategorieDto>>>;
    public getAllCategorieUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<CategorieDto>>(`${this.basePath}/categorie/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Renvoie tous les cours
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllCoursUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<CoursDto>>;
    public getAllCoursUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CoursDto>>>;
    public getAllCoursUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CoursDto>>>;
    public getAllCoursUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<CoursDto>>(`${this.basePath}/cours/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Sauvegarde un cours en base
     * 
     * @param coursDto coursDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST(coursDto: CoursDto, observe?: 'body', reportProgress?: boolean): Observable<CoursDto>;
    public saveUsingPOST(coursDto: CoursDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CoursDto>>;
    public saveUsingPOST(coursDto: CoursDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CoursDto>>;
    public saveUsingPOST(coursDto: CoursDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (coursDto === null || coursDto === undefined) {
            throw new Error('Required parameter coursDto was null or undefined when calling saveUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<CoursDto>(`${this.basePath}/cours/save`,
            coursDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
