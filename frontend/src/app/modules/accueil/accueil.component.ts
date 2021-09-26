import {Component, OnInit} from '@angular/core';
import {UlearnService} from '../../../remote';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

    constructor(private ulearnService: UlearnService) {
    }

    ngOnInit() {
        this.ulearnService.getAllCoursUsingGET().subscribe(value => console.log(value));
    }

}
