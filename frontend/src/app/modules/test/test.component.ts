import {Component, OnInit} from '@angular/core';
import {CoursDto} from '../../../remote';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {



    cours: CoursDto[];


    constructor() {
    }

    ngOnInit() {
    }

}
