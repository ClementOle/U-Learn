import {Component, OnInit} from '@angular/core';
import {CategorieDto, CoursDto, UlearnService} from "../../../remote";
import {ConnexionService} from "../../services/connexion.service";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    categories: CategorieDto[];
    cours: CoursDto[];

  constructor(private uLEARNservice: UlearnService, private connexionService: ConnexionService) {

    }

    ngOnInit() {

      //*** On récupère les catégories directement en base ***
      this.uLEARNservice.getAllCategorieUsingGET().subscribe(value => {
        this.categories = value;
      });

    }

  deconnect() {
    this.connexionService.connecte = false;
  }
}
