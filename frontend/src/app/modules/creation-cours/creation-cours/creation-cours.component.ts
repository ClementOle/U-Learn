import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategorieDto, CoursDto, UlearnService} from '../../../../remote';
import {Router} from '@angular/router';
import {ModalService} from '../../../component/modal/modal.service';

@Component({
    selector: 'app-creation-cours',
    templateUrl: './creation-cours.component.html',
    styleUrls: ['./creation-cours.component.scss']
})
export class CreationCoursComponent implements OnInit {

    formGroup: FormGroup;

    texte: string;

    cours: CoursDto[];
    categories: CategorieDto[];
    ckeConfig: any;
    showLoader: boolean = false;

    savedIdCours: number;

    constructor(public formBuilder: FormBuilder,
                private uLEARNservice: UlearnService,
                private route: Router,
                private modalService: ModalService) {

        // Initialise le formulaire
        this.formGroup = this.formBuilder.group({
            content: [null, Validators.required],
            title: [null, Validators.required],
            categorie: [null, Validators.required]
        });
    }

    ngOnInit() {
        // Récupère la liste des catégories stocker en base
        this.uLEARNservice.getAllCategorieUsingGET().subscribe(value => {
            this.categories = value;
            this.formGroup.get('categorie').setValue(this.categories[0].titre);
        });

        // Configure l'éditeur de texte
        this.ckeConfig = {
            allowedContent: false,
            forcePasteAsPainText: true,
            toolbarGroups: [
                {name: 'document', groups: ['mode', 'document', 'doctools']},
                {name: 'clipboard', groups: ['clipboard', 'undo']},
                {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
                {name: 'forms', groups: ['forms']},
                '/',
                {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
                {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
                {name: 'links', groups: ['links']},
                {name: 'insert', groups: ['insert']},
                '/',
                {name: 'styles', groups: ['styles']},
                {name: 'colors', groups: ['colors']},
                {name: 'tools', groups: ['tools']},
                {name: 'others', groups: ['others']},
                {name: 'about', groups: ['about']}
            ],
            removeButtons: 'Source,Save,NewPage,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,BidiLtr,BidiRtl,Language,Unlink,Flash,Table,HorizontalRule,Smiley,PageBreak,Iframe,Maximize,ShowBlocks,About'
        };
    }


    /**
     * Permet de sauvegarder le contenu de l'éditeur
     */
    postCours() {
        let categories = this.categories.find(value => value.titre == this.formGroup.get('categorie').value);
        let titre = this.formGroup.get('title').value;

        if (categories != null && titre != null && titre.trim() != '' && this.texte != null && this.texte.trim() != '') {
            this.showLoader = true;
            this.uLEARNservice.saveUsingPOST({
                image: null,
                progressions: null,
                texte: this.texte,
                titre: titre,
                video: null,
                categorie: categories
            })
                .subscribe(value => this.savedIdCours = value.coursId, error => console.log(error), () => {
                    this.showLoader = false;
                    // Une fois l'enregistrement effectué on navigue vers la page de création de quiz
                    this.goToQuizzCreation();
                });
        } else {
            // throw Error
        }
    }


    contentChanged(value) {
        this.texte = value;
    }


    goToQuizzCreation() {
        this.route.navigate(['creation-quiz/' + this.savedIdCours]);
    }
}
