import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TestService} from '../../../remote';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    formGroup: FormGroup;

    constructor(private testService: TestService,
                public formBuilder: FormBuilder) {
        this.formGroup = this.formBuilder.group({
            content: [null, Validators.required]
        });
    }

    /**
     * Permet de sauvegarder le contenu de l'éditeur
     */
    save() {
        console.log('Sauvegarde de ' + this.formGroup.get('content').value);
    }

    ngOnInit() {
    }

    getTest() {
        this.testService.testUsingGET().subscribe(
            value => console.log(value),
            error => console.error(error),
            () => console.log('done'));
    }
}
