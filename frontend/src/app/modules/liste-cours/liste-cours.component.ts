import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategorieDto, CommentaireDto, CoursDto, ProgressionDto, UlearnService} from "../../../remote";
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
    test = new Array();
    current: number;

    coursAMettreAJour: CoursDto;
    message0: string;
    message1: string;


    c: CommentaireDto;

    constructor(private Activatedroute: ActivatedRoute,
                private uLEARNservice: UlearnService,
                private formBuilder: FormBuilder) {

    }

    ngOnInit() {
      this.Activatedroute.paramMap.subscribe(params => {
            let categorieId = params.get('paramChemin'); // recupere moi dans ta liste des parametres que possede ActivatedRoute le parametre qui s'appelle 'paramChemin'
            this.uLEARNservice.getAllCoursByCategorieIdUsingGET(+categorieId).subscribe(value => {     // Astuce : utiliser "+" pour parser un String en Int
              this.coursParCategorieId = value;
              this.difficulte = this.coursParCategorieId[0].difficulte;
              console.log('coursParCategorieId vaut : ');
              console.log(this.coursParCategorieId);
            });
      });

      this.message0 = "Afficher les commentaires";
      this.message1 = "Masquer les commentaires";

      this.loginForm = this.formBuilder.group({
        sendComment: []
      })

      this.difficulteChoisie = false;
    }

    // Mise à jour du libellé du bouton commentaire et affichage ou non des commentaires
    // Mise à jour du booléen d'affichage de commentaires en BDD
    majCom(coursAUpdate) {
      this.coursAMettreAJour = coursAUpdate;

      if (this.coursAMettreAJour.afficheCommentaires == 1) {
        this.coursAMettreAJour.afficheCommentaires = 0
      } else {
        this.coursAMettreAJour.afficheCommentaires = 1
      }
      this.uLEARNservice.putCoursByCoursIdUsingPUT(this.coursAMettreAJour).subscribe(value => {
          this.coursAMettreAJour = value;
        }
      )
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
        console.log('this.coursParDifficulteEtCategorie');
        console.log(this.coursParDifficulteEtCategorie);
        this.difficulteChoisie = true;
        difficulte = null;
        this.categorieIdPrecedente = this.categorieIdParam;
      }
    )
  }


}
