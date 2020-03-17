import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursDto, UlearnService} from '../../../../remote';

@Component({
    selector: 'app-creation-cours',
    templateUrl: './creation-cours.component.html',
    styleUrls: ['./creation-cours.component.scss']
})
export class CreationCoursComponent implements OnInit {

    formGroup: FormGroup;

    texte: string;

    cours: CoursDto[];

    ckeConfig: any;
    showLoader: boolean = false;

    constructor(public formBuilder: FormBuilder,
                private uLEARNservice: UlearnService) {
        this.formGroup = this.formBuilder.group({
            content: [null, Validators.required],
            title: [null, Validators.required]
        });
    }

    ngOnInit() {
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
        this.showLoader = true;
        this.uLEARNservice.saveUsingPOST({image: null, progressions: null, texte: this.texte, titre: 'titre', video: null})
            .subscribe(value => console.log(value), error => console.log(error), () => this.showLoader = false);
    }


    contentChanged(value) {
        this.texte = value;
    }

    // Fait une requete Http Get qui renvoie une liste de Cours

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

}