import {Component, OnInit} from '@angular/core';
import {CoursDto, UlearnService} from '../../../remote';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-cours',
    templateUrl: './cours.component.html',
    styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

    cours: CoursDto;

    constructor(private uLearnService: UlearnService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let coursId = +params.get('id');

            this.uLearnService.getCoursByCoursIdUsingGET(coursId)
                .subscribe(cours => this.cours = cours);
        });
    }

    // Mise à jour du libellé du bouton commentaire et affichage ou non des commentaires
    // Mise à jour du booléen d'affichage de commentaires en BDD
    majCom() {
        this.cours.afficheCommentaires = this.cours.afficheCommentaires == 1 ? 0 : 1;

        this.uLearnService.putCoursByCoursIdUsingPUT(this.cours).subscribe(value => {
                this.cours = value;
            }
        );
    }

    commentaireBtnLabel() {
        return this.cours.afficheCommentaires === 1 ? "Masquer les commentaires" : "Afficher les commentaires";
    }
}
