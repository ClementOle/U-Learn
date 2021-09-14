import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    static API_URL = 'http://localhost:8080/';

    public isConnected: BehaviorSubject<boolean>;

    constructor(private http: HttpClient) {
        this.isConnected = new BehaviorSubject<boolean>(false);
    }


    public login(username: string, password: string): Promise<any> {
        return new Promise<void>(
            (res, rej) => {
                let formData = new FormData();

                formData.append('username', username);
                formData.append('username', password);

                this.http.post(AuthService.API_URL + 'login', formData)
                    .subscribe(() => {
                        this.isConnected.next(true);
                        res();
                    }, error => {
                        this.isConnected.next(false);
                        rej(error);
                    });
            }
        );
    }

    public logout(): Promise<any> {
        return new Promise<void>((res, rej) => {
                this.http.post(AuthService.API_URL + 'logout', null).subscribe(() => {
                        this.isConnected.next(false);
                        res();
                    }, err => {
                        rej(err);
                    }
                );

            }
        );
    }
}
