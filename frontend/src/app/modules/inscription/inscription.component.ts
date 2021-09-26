import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UlearnService, UserDto} from '../../../remote';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit, OnDestroy {

    form: FormGroup;
    passwordError: string;

    submitError: string;

    subscriptionOnPassword: Subscription;
    subscriptionOnPasswordVerif: Subscription;

    constructor(private fb: FormBuilder,
                private uLearnService: UlearnService,
                private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }

    ngOnDestroy() {
        //Supprime les subscription lorsque l'on quitte le composent pour éviter les fuites de mémoires
        this.subscriptionOnPassword.unsubscribe();
        this.subscriptionOnPasswordVerif.unsubscribe();
    }

    initForm() {
        this.form = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
            passwordVerif: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]]
        });

        this.subscriptionOnPassword = this.form.get('passwordVerif').valueChanges.subscribe((next) => {
            this.passwordChange();
        });
        this.subscriptionOnPasswordVerif = this.form.get('password').valueChanges.subscribe((next) => {
            this.passwordChange();
        });
    }

    passwordChange() {
        let password = this.form.get('password').value;
        let passwordVerif = this.form.get('passwordVerif').value;

        if (password !== passwordVerif) {
            this.passwordError = 'Les mots de passe sont différents';
        } else {
            this.passwordError = null;
        }
    }

    submit() {
        let userToSave: UserDto = {
            username: this.getFormValue('username'),
            password: this.getFormValue('password'),
            email: this.getFormValue('email'),
            prenom: this.getFormValue('firstname'),
            nom: this.getFormValue('lastname'),
        };

        this.uLearnService.signInUsingPOST(userToSave).subscribe(() => {
            this.submitError = null;
            this.router.navigate(['connexion']);
        }, (err) => {
            console.log(err);
            return this.submitError = err.error.message;
        });

        console.log({
            username: this.getFormValue('username'),
            password: this.getFormValue('password'),
            email: this.getFormValue('email'),
            firstname: this.getFormValue('firstname'),
            lastname: this.getFormValue('lastname'),
        });
    }

    getFormValue(formName: string): string {
        return this.form.get(formName).value;
    }

}
