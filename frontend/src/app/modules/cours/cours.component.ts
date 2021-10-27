import {Component, OnInit} from '@angular/core';
import {CoursDto, UlearnService, UserDto} from '../../../remote';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-cours',
    templateUrl: './cours.component.html',
    styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

    cours: CoursDto;
    commentaireForm: FormGroup;
    currentUser: UserDto;

    showAddCom: boolean = false;

    safeVideoUrl;

    constructor(private uLearnService: UlearnService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private authService: AuthService,
                private sanitizer: DomSanitizer) {
    }


    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let coursId = +params.get('id');

            this.uLearnService.getCoursByCoursIdUsingGET(coursId)
                .subscribe(cours => {
                    this.cours = cours;
                    if (this.cours.video) {
                        this.cours.video = this.cours.video.replace('watch?v=', 'embed/');

                        this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.cours.video);
                    }
                });
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

    addCommentaireBtnLabel() {
        return this.showAddCom ? 'Cacher ajout d\'un commentaire' : 'Ajouter un commentaire';
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

    changeCommCollaspeState() {
        this.cours.afficheCommentaires = this.cours.afficheCommentaires == 0 ? 1 : 0;
    }


    changeAddCommCollaspeState() {
        this.showAddCom = !this.showAddCom;
    }
}
