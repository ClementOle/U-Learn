import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategorieDto, CoursDto, UlearnService} from "../../../remote";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-liste-cours',
    templateUrl: './liste-cours.component.html',
    styleUrls: ['./liste-cours.component.scss']
})
export class ListeCoursComponent implements OnInit {

    cours: CoursDto[];
    coursParCategorieId: CoursDto[];
    coursParDifficulteEtCategorie: CoursDto[];
    loginForm: FormGroup;
    difficulte: number;
    difficulteChoisie: boolean;
    categorieIdParam: number;
    categorieIdPrecedente: number;
    // commentaireParCoursId: CommentaireDto[];



    constructor(private Activatedroute: ActivatedRoute,
                private uLEARNservice: UlearnService,
                private formBuilder: FormBuilder) {

    }

    ngOnInit() {
      this.Activatedroute.paramMap.subscribe(params => {
            let categorieId = params.get('paramChemin'); // recupere moi dans ta liste des parametres que possede ActivatedRoute le parametre qui s'appelle 'paramChemin'
            this.uLEARNservice.getAllCoursByCategorieIdUsingGET(+categorieId).subscribe(value => {
              this.coursParCategorieId = value;
              this.difficulte = this.coursParCategorieId[0].difficulte;
              console.log('difficulte vaut : ' + this.difficulte);
              console.log('coursParCategorieId vaut : ');
              console.log(this.coursParCategorieId);
            }

            // this.uLEARNservice.getAllCommentairesByCoursIdUsingGET(+coursId).subscribe( value => {
            //   this.commentaireParCoursId = value;
            // })


            ); // Astuce : utiliser "+" pour parser un String en Int
      });
      this.loginForm = this.formBuilder.group({
        sendComment: []
      })
      console.log('difficultechoisie passe à false');
      this.difficulteChoisie = false;
    }


  choixDifficulteEtCategorie(difficulte) {

    this.Activatedroute.paramMap.subscribe( params => {
      let categorieIdParam = params.get('paramChemin');
      this.categorieIdParam = (+categorieIdParam);

      // Controle si on clique dans la navBar sur une autre catégorie que la catégorie actuelle.
      // Si oui on affiche tous les cours de la nouvelle catégorie choisie.
        if (this.categorieIdParam != this.categorieIdPrecedente) {
          this.difficulteChoisie = false;
        }
      }
    );
    this.coursParDifficulteEtCategorie = null;
    this.uLEARNservice.getAllCoursByDifficulteAndCategorieUsingGET(this.categorieIdParam, difficulte).subscribe(value => {
        this.coursParDifficulteEtCategorie = value;
        this.difficulteChoisie = true;
        difficulte = null;
        this.categorieIdPrecedente = this.categorieIdParam;
      }
    )
  }



}
