import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit, OnDestroy {

    form: FormGroup;
    passwordError: string;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.initForm();
    }

    ngOnDestroy() {

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

        this.form.get('passwordVerif').valueChanges.subscribe((next) => {
            this.passwordChange();
        });
        this.form.get('password').valueChanges.subscribe((next) => {
            this.passwordChange();
        });
    }

    passwordChange() {
        let password = this.form.get('password').value;
        let passwordVerif = this.form.get('passwordVerif').value;

        if (password !== passwordVerif) {
            this.passwordError = "Les mots de passe sont différents";
        } else {
            this.passwordError = null;
        }
    }

    submit() {
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
