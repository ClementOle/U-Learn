import {Component, OnInit} from '@angular/core';
import {CategorieDto, UlearnService} from "../../../remote";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    categories: CategorieDto[];

    constructor(private uLEARNservice: UlearnService) {
    }

    ngOnInit() {

      //*** On récupère les catégories directement en base ***
      this.uLEARNservice.getAllCategorieUsingGET().subscribe(value => {
        this.categories = value;
      });
    }

}
