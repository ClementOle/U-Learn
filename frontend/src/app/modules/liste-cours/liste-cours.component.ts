import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursDto, UlearnService} from '../../../remote';

@Component({
    selector: 'app-liste-cours',
    templateUrl: './liste-cours.component.html',
    styleUrls: ['./liste-cours.component.scss']
})
export class ListeCoursComponent implements OnInit {

    get coursParCategorieId(): CoursDto[] {
        return this.difficulteSelected == null ? this._coursParCategorieId : this._coursParCategorieId.filter(cours => this.difficulteSelected == cours.difficulte);
    }

    set coursParCategorieId(value: CoursDto[]) {
        this._coursParCategorieId = value;
    }

    difficulteSelected: number;

    private _coursParCategorieId: CoursDto[];

    difficulte: number;
    difficulteChoisie: boolean;


    constructor(private Activatedroute: ActivatedRoute,
                private uLEARNservice: UlearnService) {

    }

    ngOnInit() {
        this.Activatedroute.paramMap.subscribe(params => {
            let categorieId = params.get('paramChemin'); // recupere moi dans ta liste des parametres que possede ActivatedRoute le parametre qui s'appelle 'paramChemin'
            this.uLEARNservice.getAllCoursByCategorieIdUsingGET(+categorieId).subscribe(value => {     // Astuce : utiliser "+" pour parser un String en Int
                this.coursParCategorieId = value;
                this.difficulte = this.coursParCategorieId[0].difficulte;
            });
        });

        this.difficulteChoisie = false;

    }

    choixDifficulteEtCategorie(difficulte: number) {
        this.difficulteSelected = difficulte;
    }

}
