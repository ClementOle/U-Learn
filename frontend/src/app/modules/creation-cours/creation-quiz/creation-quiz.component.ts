import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionDto, UlearnService} from '../../../../remote';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-creation-quiz',
    templateUrl: './creation-quiz.component.html',
    styleUrls: ['./creation-quiz.component.scss']
})
export class CreationQuizComponent implements OnInit, OnDestroy {

    questions: QuestionDto[] = [];
    coursId: number;
    showLoader: boolean = false;

    constructor(private ulearnService: UlearnService,
                private activatedRoute: ActivatedRoute,
                private route: Router) {

    }

    /**
     * Enregistrement du quizz
     */
    submit() {
        this.showLoader = true;
        this.ulearnService.saveAllUsingPOST(this.questions).subscribe(
            value => console.log(value),
            error => {
                console.error(error);
                this.showLoader = false;
            },
            () => {
                this.showLoader = false;
                this.goToHome();
            });
    }


    ngOnInit(): void {
        // Récupération de l'idCours passé dans l'url
        this.activatedRoute.paramMap.subscribe(params => {
            this.coursId = +params.get('idCours');
        });
    }

    clickAddReponse(currentQuestion: QuestionDto) {
        currentQuestion.reponses.push({value: '', etat: false});
    }

    addQuestion($event) {
        this.questions.push({
            value: $event, cours: {coursId: this.coursId}, reponses: [
                {value: '', etat: false},
                {value: '', etat: false}
            ]
        });
    }

    isValide(): boolean {
        this.questions.forEach(question => {
            if (question.value.trim() == '') {
                return false;
            }
            question.reponses.forEach(value => {
                console.log(value.value.trim() == '');
                if (value.value.trim() == '') {
                    return false;
                }
            });
        });
        return true;
    }

    reset() {
        this.questions = [];
    }

    changeCorrectResponse(questionIndex: number, responseIndex: number) {
        this.questions[questionIndex].reponses.forEach(value => value.etat = false);
        this.questions[questionIndex].reponses[responseIndex].etat = true;
    }

    /**
     * Redirige vers la page d'accueil
     */
    goToHome() {
        this.route.navigate(['accueil/']);
    }

    ngOnDestroy(): void {
        this.showLoader = false;
    }

}
