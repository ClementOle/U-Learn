import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategorieDto, CoursDto, UlearnService} from "../../../remote";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-liste-cours',
    templateUrl: './liste-cours.component.html',
    styleUrls: ['./liste-cours.component.scss']
})
export class ListeCoursComponent implements OnInit {

    categories: CategorieDto[];
    cours: CoursDto[];
    coursParCategorieId: CoursDto[];
    loginForm: FormGroup;
    tabComments : string [];
    listComments : string [];


    comments: string;

  arrayOfComments: Array<{ id: number, libelle: string }>= [
    {id: 1, libelle: 'Commentaire Brico 1'},
    {id: 2, libelle: 'Commentaire Brico 2'},
    {id: 3, libelle: 'Commentaire Brico 3'}
  ];


    maListeDeCoursBricolage: Array<{ id: number, libelle: string }> = [
        {id: 1, libelle: 'Peinture'},
        {id: 2, libelle: 'Maconnerie'},
        {id: 3, libelle: 'Menuiserie'}
    ];
    maListeDeCoursAAfficher: Array<{ id: number, libelle: string }>;
    maListeDeCoursLangues: Array<{ id: number, libelle: string }> = [
        {id: 1, libelle: 'Anglais'},
        {id: 2, libelle: 'Français'},
        {id: 3, libelle: 'Italien'}
    ];
//maListeDeCoursAAfficher va stocker le tableau d'objets à afficher.
    //son contenu dépendra de la valeur passée en paramètre dans le routing

    maListeDeCoursProgrammation: Array<{ id: number, libelle: string }> = [
        {id: 1, libelle: 'JAVA'},
        {id: 2, libelle: 'Angular'},
        {id: 3, libelle: 'SQL'}
    ];
    maListeDeCoursCuisine: Array<{ id: number, libelle: string }> = [
        {id: 1, libelle: 'Entree'},
        {id: 2, libelle: 'Plat'},
        {id: 3, libelle: 'Dessert'}
    ];


    constructor(private Activatedroute: ActivatedRoute, private uLEARNservice: UlearnService, private formBuilder: FormBuilder) {

    }

    ngOnInit() {
      this.Activatedroute.paramMap.subscribe(params => {
            let categorieId = params.get('paramChemin'); // recupere moi dans ta liste des parametres que possede ActivatedRoute le parametre qui s'appelle 'paramChemin'
            this.uLEARNservice.getAllCoursByCategorieIdUsingGET(+categorieId).subscribe(value => {
              this.coursParCategorieId = value;
              console.log('coursParCategorieId vaut : ');
              console.log(this.coursParCategorieId);
              }

            ); // Astuce : utiliser "+" pour parser un String en Int
      });
      this.loginForm = this.formBuilder.group({
        sendComment: []
      })

        // *** Récupère la liste de cours (codé en dur) ***
        //
        // this.Activatedroute.paramMap.subscribe(params => {
        //     let libelle = params.get('paramChemin'); // recupere moi dans ta liste des parametres que possede ActivatedRoute le parametre qui s'appelle 'paramChemin'
        //     console.log('paramChemin vaut : ' + libelle);
        //     ;
        //     console.log(params);
        //     //params correspond à la liste complète de paramètres, on peut cumuler plusieurs paramètres, ici il n'y a que Bricolage (en dur)
        //
        //     if (libelle === 'Bricolage') {
        //         this.maListeDeCoursAAfficher = this.maListeDeCoursBricolage;
        //     }
        //
        //     if (libelle === 'Langues') {
        //         this.maListeDeCoursAAfficher = this.maListeDeCoursLangues;
        //     }
        //
        //     if (libelle === 'Programmation') {
        //         this.maListeDeCoursAAfficher = this.maListeDeCoursProgrammation;
        //     }
        //
        //     if (libelle === 'Cuisine') {
        //         this.maListeDeCoursAAfficher = this.maListeDeCoursCuisine;
        //     }
        //
        //
        // });
      // this.uLEARNservice.getAllCoursUsingGET().subscribe(value => {
      //   this.cours = value;
      //   console.log("mes cours : ");
      //   console.log(this.cours);
      // });
    }

    sendComment() {
      this.comments = this.loginForm.value.sendComment;
      // console.log('comments : ' + this.comments);
      console.log('this.comment vaut ' + this.comments);
      console.log('arrayOfComments vaut ');
      console.log(this.arrayOfComments);
      // this.uLEARNservice.postComments(this.comments);

      // this.listComments.push(this.comments);
      console.log('this.listComments vaut : ');
      console.log(this.listComments);


    }

}
