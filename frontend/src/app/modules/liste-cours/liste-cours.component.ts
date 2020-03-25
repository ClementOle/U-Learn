import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.scss']
})
export class ListeCoursComponent implements OnInit {

  constructor( private Activatedroute:ActivatedRoute ) {

  }

  maListeDeCoursBricolage: Array<{id: number, libelle: string}> = [
    {id: 1, libelle: 'Peinture'},
    {id: 2, libelle: 'Maconnerie'},
    {id: 3, libelle: 'Menuiserie'},
  ];

  maListeDeCoursAAfficher: Array<{id: number, libelle: string}>;

  maListeDeCoursLangues: Array<{id: number, libelle: string}> = [
    {id: 1, libelle: 'Anglais'},
    {id: 2, libelle: 'Français'},
    {id: 3, libelle: 'Italien'},
  ];

  activiteA = 'a';
  activiteB = 'b';
  activiteC = 'c';

  ngOnInit() {


    this.Activatedroute.paramMap.subscribe(params => {
      let libelle = params.get('toto'); // recupere moi dans ta liste des parametres que possede ActivatedRoute le parametre qui s'appelle 'libelle'
      console.log('toto vaut : ' + libelle);
      console.log(params);

      if (libelle === 'Bricolage'){
        this.maListeDeCoursAAfficher = this.maListeDeCoursBricolage;
      }

      if (libelle === 'Langues'){
        this.maListeDeCoursAAfficher = this.maListeDeCoursLangues;
      }


  });

}

}

