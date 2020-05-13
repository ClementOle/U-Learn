import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input() id: string;
    @Input() content: string;
    @Input() title: string;
    @Input() btnOneText: string;
    @Input() btnTwoText: string;
    @Input() withInput: boolean = false;

    @Output() onClickOne: EventEmitter<any> = new EventEmitter<any>();
    @Output() onClickTwo: EventEmitter<any> = new EventEmitter<any>();
    inputValue: string;

    constructor() {
    }

    ngOnInit() {
    }

    propagateClickOne() {
        this.onClickOne.emit(this.inputValue);
        this.inputValue = '';
    }

    propagateClickTwo() {
        this.onClickTwo.emit(this.inputValue);
        this.inputValue = '';
    }

}
