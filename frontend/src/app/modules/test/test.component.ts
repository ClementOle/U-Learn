import {Component, OnInit} from '@angular/core';
import {TestService} from '../../../remote';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    constructor(private testService: TestService) {
    }

    ngOnInit() {
    }


    getTest() {
        this.testService.testUsingGET().subscribe(value => console.log(value),
            error => console.error(error),
            () => console.log('done'));
    }
}
