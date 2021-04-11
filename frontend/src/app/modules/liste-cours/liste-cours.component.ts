import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategorieDto, CommentaireDto, CoursDto, UlearnService} from "../../../remote";
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
    commentaireParCoursId: CommentaireDto[];
    commentairesFiltres: CommentaireDto[];
    allCommentaires: CommentaireDto[];
    allCommentairesDejaRecup: CommentaireDto[];
    coursId: number;
    afficheBlocCom: boolean;
    libelleBoutonCom = "Afficher les commentaires";
    listCoursId: number[];
    total = new Array();
    test = new Array();
    testGlobal = new Array();
    displayCom: boolean;
    current: number;
    tabIndices = new Array();
    tabBoutons = [{id: 0, msgAffiche: "Afficher les commentaires", msgMasque:"Masquer les commentaires", display: true}];



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
              console.log('difficulte vaut : ' + this.difficulte);
              console.log('coursParCategorieId vaut : ');
              console.log(this.coursParCategorieId);
            });
      });


      this.uLEARNservice.getAllCommentairesUsingGET().subscribe( value => {
        this.allCommentaires = value;
        console.log('this.allCommentaires dans init : ');
        console.log(this.allCommentaires);
      });



      this.loginForm = this.formBuilder.group({
        sendComment: []
      })

      console.log('difficultechoisie passe à false');
      this.difficulteChoisie = false;
    }



    rechercheCom(indice) {
        let bool: boolean;
        let msg: string;
        if (this.tabBoutons[indice].display == true) {
          bool = false;
          msg = this.tabBoutons[indice].msgAffiche = 'Afficher les coms';
        } else {
          bool = true;
          msg = this.tabBoutons[indice].msgAffiche = 'Masquer les coms';

      }

      this.tabBoutons[indice] = {id: indice, msgAffiche: msg, msgMasque: 'Masque cours 2', display:bool};
      this.tabBoutons[indice+1] = {id: indice+1, msgAffiche: msg, msgMasque: 'Masque cours 2', display:bool};

      if (this.libelleBoutonCom == "Afficher les commentaires") {
        this.libelleBoutonCom = "Masquer les commentaires";
        const index: number = this.tabIndices.indexOf(indice);
        if (index !== -1) {
          this.tabIndices.splice(index, 1);
        }

      } else {
        this.libelleBoutonCom = "Afficher les commentaires";
        this.tabIndices.push(indice);

      }
      console.log('i vaut : ' + indice);
      console.log('tabIndices vaut : ' );
      console.log(this.tabIndices);
      console.log('tabBoutons vaut : ' );
      console.log(this.tabBoutons);
      this.current = indice;
      this.test = [];
      let i = 0;
      // console.log('test au début vaut : ');
      // console.log(this.test);

      for (let ligne of this.coursParDifficulteEtCategorie) {
        // console.log('ligne : ');
        // console.log(ligne);

        for(let j =0; j < this.allCommentaires.length; j++) {
          if (this.allCommentaires[j].cours.coursId == ligne.coursId) {
            console.log('ligne.coursId : ' + ligne.coursId);
            console.log('this.allCommentaires[j].cours.coursId: ' + this.allCommentaires[j].cours.coursId);
            console.log('on recup le commentaire dto ');
            console.log( this.allCommentaires[j] );

            this.test.push(this.allCommentaires[j]);

          }
        }
        i++;
      }
      this.testGlobal.push(this.test);

      console.log('this.test : ');
      console.log(this.test);
      // console.log('this.testGlobal : ');
      // console.log(this.testGlobal);
      // console.log('this.commentairesFiltres : ');
      // console.log(this.commentairesFiltres);

      this.afficheBlocCom = true;

    }

    afficheCommentaires(coursId){
      console.log('passe dans afficheCommentaires() avec coursId : ' + coursId);
      if (this.afficheBlocCom == true) {
        this.afficheBlocCom = false;
        this.libelleBoutonCom = "Afficher les commentaires";
      } else {
        this.afficheBlocCom = true;
        this.libelleBoutonCom = "Masquer les commentaires";
      }
      this.uLEARNservice.getAllCommentairesByCoursIdUsingGET(coursId).subscribe( value => {
        this.commentaireParCoursId = value;
        console.log('commentairesParCoursId : ');
        console.log(this.commentaireParCoursId);
      });
    }


  choixDifficulteEtCategorie(difficulte) {
    this.afficheBlocCom = false;
    console.log('afficheBlocCom vaut  : ' + this.afficheBlocCom);
    this.total = null;
    this.test = [];

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
        console.log('coursParDifficulteEtCategorie vaut : ');
        console.log(this.coursParDifficulteEtCategorie);
        this.coursId = this.coursParDifficulteEtCategorie[0].coursId;
        console.log('coursId vaut : ');
        console.log(this.coursId);
        this.difficulteChoisie = true;
        difficulte = null;
        this.categorieIdPrecedente = this.categorieIdParam;
      }
    )
  }


}
