import {Component, OnInit} from '@angular/core';
import {CategorieDto, CoursDto, UlearnService} from "../../../remote";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    categories: CategorieDto[];
    cours: CoursDto[];

    constructor(private uLEARNservice: UlearnService) {
    }

    ngOnInit() {

      //*** On récupère les catégories directement en base ***
      this.uLEARNservice.getAllCategorieUsingGET().subscribe(value => {
        this.categories = value;
        console.log("Fonction getAllCategories déclenchée, value vaut : ");
        console.log(value);
      });

      this.uLEARNservice.getAllCoursUsingGET().subscribe(value => {
        this.cours = value;
        console.log("Fonction getAllCours déclenchée, value vaut : ");
        console.log(value);
      });

    }



}
