import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input() content: string;
    @Input() title: string;
    @Input() btnOneText: string;
    @Input() btnTwoText: string;

    @Output() onClickOne: EventEmitter<any> = new EventEmitter<any>();
    @Output() onClickTwo: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    propagateClickOne() {
        this.onClickOne.emit();
    }

    propagateClickTwo() {
        this.onClickTwo.emit();
    }

}
