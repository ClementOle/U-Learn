import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && event.status === 200) {
                    //this.toastr.success("Object created.");
                    console.log('ok');
                }
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status == 500) {
                    // 401 handled in auth.interceptor
                    //this.toastr.error(error.message);
                    console.log('Erreur serveur');
                }
                if (error.status == 403) {
                    console.log('Déconnexion');
                }
                return throwError(error);
            })
        );
    }

}