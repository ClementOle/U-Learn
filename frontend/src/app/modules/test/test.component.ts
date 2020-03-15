import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursDto, UlearnService} from '../../../remote';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    formGroup: FormGroup;

    cours: CoursDto[];

    texte: string;

    constructor(public formBuilder: FormBuilder,
                private uLEARNservice: UlearnService) {
        this.formGroup = this.formBuilder.group({
            content: [null, Validators.required]
        });
    }

    /**
     * Permet de sauvegarder le contenu de l'éditeur
     */
    save() {
        console.log('Sauvegarde de ' + this.formGroup.get('content').value);
    }

    ngOnInit() {
    }


    //Fait une requete Http Post avec un cours dans le body
    postCours() {
        this.uLEARNservice.saveUsingPOST({image: null, progressions: null, texte: this.texte, titre: 'titre', video: null})
            .subscribe(value => console.log(value), error => console.log(error), () => console.log('complete'));
    }


    //Fait une requete HttpGet qui renvoie une liste de Cours

    getAll() {
        this.uLEARNservice.getAllUsingGET().subscribe(
            value => this.cours = value,
            error => console.error(error),
            () => {

                //Insertion dans la page des cours reçus
                let doc = this.cours.map(value => document.getElementsByClassName('cours')[0]
                    .insertAdjacentHTML('beforeend', value.texte));

                console.log('Récupération terminé');
            }
        );
    }

    contentChanged(value) {
        this.texte = value;
    }
}
