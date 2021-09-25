import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategorieDto, CommentaireDto, CoursDto, ProgressionDto, UlearnService, UserDto} from "../../../remote";
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
    affEcritureCom: boolean;
    recupCours: CoursDto;
    titreNouveauCom: string;
    texteNouveauCom: string;

    coursAMettreAJour: CoursDto;
    message0: string;
    message1: string;

    nouveauCommentaire: CommentaireDto;


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
        texteNouveauCom: [],
        titreNouveauCom: []
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

  onValiderCom(cours) {
      console.log('sendComment vaut : ' + this.loginForm.value.texteNouveauCom);
      console.log('titreNouveauCom vaut : ' + this.loginForm.value.titreNouveauCom);
      console.log('cours vaut : ');
      console.log(cours);
      // this.titreNouveauCom = this.loginForm.value.titreNouveauCom;
      // this.texteNouveauCom = this.loginForm.value.texteNouveauCom;

      this.recupCours = cours;
    console.log('recupCours vaut : ');
    console.log(this.recupCours);

      const nouveauCommentaire: CommentaireDto = {
        commentaireId: 0,
        user: null,
        cours: this.recupCours,
        titreCommentaire: this.loginForm.value.titreNouveauCom,
        texteCommentaire: this.loginForm.value.texteNouveauCom,
        commentaireUtile: '10',
        afficheBooleen: true
        };

      console.log('nouveauCommentaire vaut : ');
      console.log(nouveauCommentaire);

      // Sauvegarde du commentaire
      this.uLEARNservice.saveCommentsUsingPOST(nouveauCommentaire).subscribe();
      this.affEcritureCom = false;
      this.majCom(cours);

  }
  ecrireCom() {
    this.affEcritureCom = true;
  }
  onAnnulerCom() {
    this.affEcritureCom = false;
  }


}
