import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

    form: FormGroup;
    errorMsg: string;

    constructor(private authService: AuthService,
                private router: Router,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    submit() {
        let username = this.form.get('username').value;
        let password = this.form.get('password').value;

        this.authService.login(username, password)
            .then(() => this.router.navigateByUrl('/'))
            .catch(err => this.errorMsg = err);
    }

}
