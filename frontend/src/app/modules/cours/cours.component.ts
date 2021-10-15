import {Component, OnInit} from '@angular/core';
import {CoursDto, UlearnService, UserDto} from '../../../remote';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-cours',
    templateUrl: './cours.component.html',
    styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

    cours: CoursDto;
    commentaireForm: FormGroup;
    currentUser: UserDto;

    constructor(private uLearnService: UlearnService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private authService: AuthService) {
    }


    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let coursId = +params.get('id');

            this.uLearnService.getCoursByCoursIdUsingGET(coursId)
                .subscribe(cours => this.cours = cours);
        });
        // Recherche de l'utilisateur connecté
        this.uLearnService.getUserByUserNameUsingGET(this.authService.userNameConnected).subscribe(value => {
            this.currentUser = value;
        });

        this.initForm();
    }

    private initForm() {
        this.commentaireForm = this.formBuilder.group({
            texteNouveauCom: [undefined, [Validators.required]],
            titreNouveauCom: [undefined, [Validators.required]]
        });
    }

    commentaireBtnLabel() {
        return this.cours.afficheCommentaires === 1 ? 'Afficher les commentaires' : 'Masquer les commentaires';
    }


    onSubmitFormCommentaire() {
        this.uLearnService.saveCommentsUsingPOST({
            commentaireId: 0,
            user: this.currentUser,
            cours: this.cours,
            titreCommentaire: this.commentaireForm.value.titreNouveauCom,
            texteCommentaire: this.commentaireForm.value.texteNouveauCom,
            commentaireUtile: '10',
            afficheBooleen: true
        }).subscribe(value => {
                this.cours.commentaires.push(value);
                this.initForm();
            }
        );
    }

    onAnnulerCom() {
        this.initForm();
    }
}
