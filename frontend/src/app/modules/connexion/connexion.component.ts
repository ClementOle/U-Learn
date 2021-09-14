import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

    username: string;
    password: string;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    submit() {
        this.authService.login(this.username, this.password)
            .then(() => this.router.navigateByUrl('/'))
            .catch(err => console.error('Une erreur est survenue.', err));
    }

}
