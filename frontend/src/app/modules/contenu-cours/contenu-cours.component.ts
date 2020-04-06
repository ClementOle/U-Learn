import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategorieDto, CoursDto, UlearnService} from "../../../remote";

@Component({
  selector: 'app-contenu-cours',
  templateUrl: './contenu-cours.component.html',
  styleUrls: ['./contenu-cours.component.scss']
})
export class ContenuCoursComponent implements OnInit {

  cours: CoursDto[];
  categories: CategorieDto[];
  constructor(private uLEARNservice: UlearnService) { }

  ngOnInit() {

  }
}
