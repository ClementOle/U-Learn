import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {of} from 'rxjs';

@Component({
    selector: 'app-creation-quiz',
    templateUrl: './creation-quiz.component.html',
    styleUrls: ['./creation-quiz.component.scss']
})
export class CreationQuizComponent implements OnInit {

    form: FormGroup;
    ordersData = [];

    constructor(private formBuilder: FormBuilder) {

    }

    getOrders() {
        return [
            {id: 100, name: 'order 1'},
            {id: 200, name: 'order 2'},
            {id: 300, name: 'order 3'},
            {id: 400, name: 'order 4'}
        ];
    }

    submit() {
        const selectedOrderIds = this.form.value.orders
            .map((v, i) => v ? this.ordersData[i].id : null)
            .filter(v => v !== null);
        console.log(selectedOrderIds);
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            orders: new FormArray([], minSelectedCheckboxes(1))
        });

        // async orders
        of(this.getOrders()).subscribe(orders => {
            this.ordersData = orders;
            this.addCheckboxes();
        });

        // synchronous orders
        // this.orders = this.getOrders();
        // this.addCheckboxes();
    }

    clickAddResponse() {
        const control = new FormControl(false); // if first item set to true, else false
        (this.form.controls.orders as FormArray).push(control);
    }

    clickAddQuestion() {

    }

    private addCheckboxes() {
        this.ordersData.forEach((o, i) => {
            const control = new FormControl(i === 0); // if first item set to true, else false
            (this.form.controls.orders as FormArray).push(control);
        });
    }
}

function minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
        const totalSelected = formArray.controls
            .map(control => control.value)
            .reduce((prev, next) => next ? prev + next : prev, 0);

        return totalSelected >= min ? null : {required: true};
    };

    return validator;
}
