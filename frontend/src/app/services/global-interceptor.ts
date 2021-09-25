import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && event.status === 200) {
                    console.log('ok');
                }
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status == 500) {
                    console.log('Erreur serveur');
                }
                if (error.status == 403) {
                    this.router.navigate(['/connexion']);
                }
                return throwError(error);
            })
        );
    }

}
