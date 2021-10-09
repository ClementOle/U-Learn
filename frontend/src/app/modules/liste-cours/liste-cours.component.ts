import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategorieDto, CommentaireDto, CoursDto, ProgressionDto, UlearnService, UserDto} from "../../../remote";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

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
    titreNouveauCom: string;
    texteNouveauCom: string;
    nouveauComSauvegarde: CommentaireDto;

    valeurCours: CoursDto;
    coursIdComAMaj: number;
    listeCommentairesParCoursId: CommentaireDto [];
    commentaireId: number;

    coursAMettreAJour: CoursDto;
    message0: string;
    message1: string;
    userConnected: UserDto;

    c: CommentaireDto;

    constructor(private Activatedroute: ActivatedRoute,
                private uLEARNservice: UlearnService,
                private formBuilder: FormBuilder,
                private authService: AuthService,
                private route: Router) {

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

      // Recherche de l'utilisateur connecté
      this.uLEARNservice.getUserByUserNameUsingGET(this.authService.userNameConnected).subscribe(value => {
        this.userConnected = value;
      });


    }

    // Mise à jour du libellé du bouton commentaire et affichage ou non des commentaires
    // Mise à jour du booléen d'affichage de commentaires en BDD
    majCom(coursAUpdate) {
      console.log('lance this.majCom()');
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
      console.log('lance choixDifficulteEtCategorie');
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

  savePost(nouveauCommentaire) {
    // Sauvegarde du commentaire
    this.uLEARNservice.saveCommentsUsingPOST(nouveauCommentaire).subscribe( value => {
        console.log('lance this.saveCommentsUsingPOST()');
        console.log('value');
        console.log(value);

        this.nouveauComSauvegarde = value;
        this.commentaireId = this.nouveauComSauvegarde.commentaireId

        this.afficheComApresSave();
      }

    );
  }

  afficheComApresSave() {
    for (let i = 0; i < this.coursParDifficulteEtCategorie.length; i++) {
      if (this.coursParDifficulteEtCategorie[i].coursId == this.coursIdComAMaj) {

        this.coursParDifficulteEtCategorie[i].commentaires.push(this.nouveauComSauvegarde);
      }
    }
  }

  onValiderCom(cours) {
    console.log('lance this.onValiderCom()');

      const nouveauCommentaire: CommentaireDto = {
        commentaireId: 0,
        user: this.userConnected,
        cours: cours,
        titreCommentaire: this.loginForm.value.titreNouveauCom,
        texteCommentaire: this.loginForm.value.texteNouveauCom,
        commentaireUtile: '10',
        afficheBooleen: true
        };

      this.valeurCours = cours.valueOf();
      this.coursIdComAMaj = this.valeurCours.coursId;

      this.savePost(nouveauCommentaire);
      // // Sauvegarde du commentaire
      // this.uLEARNservice.saveCommentsUsingPOST(nouveauCommentaire).subscribe( value => {
      //   console.log('lance this.saveCommentsUsingPOST()');
      //   console.log('value');
      //   console.log(value);
      //
      //   this.nouveauComSauvegarde = value;
      //   this.commentaireId = this.nouveauComSauvegarde.commentaireId
      //   }
      //
      // );
      this.affEcritureCom = false;
      // this.afficheComApresSave();

      // for (let i = 0; i < this.coursParDifficulteEtCategorie.length; i++) {
      //   if (this.coursParDifficulteEtCategorie[i].coursId == this.coursIdComAMaj) {
      //     console.clear();
      //     console.log('this.coursParDifficulteEtCategorie[i].commentaires vaut ');
      //     console.log(this.coursParDifficulteEtCategorie[i].commentaires[this.commentaireId].titreCommentaire);
      //     console.log(this.coursParDifficulteEtCategorie[i].commentaires[this.commentaireId].texteCommentaire);
      //   }
      // }

      // this.uLEARNservice.getAllCommentairesByCoursIdUsingGET(this.coursIdComAMaj).subscribe(value => {
      //   this.listeCommentairesParCoursId = value;
      //   console.log('this.listeCommentairesParCoursId');
      //   console.log(this.listeCommentairesParCoursId);
      // });

      this.majCom(cours);

  }
  ecrireCom() {
    this.affEcritureCom = true;
  }
  onAnnulerCom() {
    this.affEcritureCom = false;
  }


}
