import {Component, OnInit} from '@angular/core';
import {QuestionDto, UlearnService} from '../../../../remote';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-creation-quiz',
    templateUrl: './creation-quiz.component.html',
    styleUrls: ['./creation-quiz.component.scss']
})
export class CreationQuizComponent implements OnInit {

    questions: QuestionDto[] = [];
    coursId: number;

    constructor(private ulearnService: UlearnService,
                private activatedRoute: ActivatedRoute) {

    }

    submit() {
        console.log(this.questions);
        this.ulearnService.saveAllUsingPOST(this.questions).subscribe(
            value => console.log(value),
            error => console.error(error),
            () => console.log('Done'));
    }


    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => this.coursId = +params.get('idCours'));
    }

    clickAddReponse(currentQuestion: QuestionDto) {
        currentQuestion.reponses.push({value: '', etat: false});
    }

    addQuestion($event) {
        this.questions.push({value: $event, cours: {coursId: this.coursId}, reponses: [{value: '', etat: false}]});
    }

    isValide(): boolean {
        //return this.responses.map(value => value.valeur != null && value.valeur.trim() == '').length == 0;
        return;
    }

    reset() {
        this.questions = [];
    }

    changeCorrectResponse(questionIndex: number, responseIndex: number) {
        this.questions[questionIndex].reponses.forEach(value => value.etat = false);
        this.questions[questionIndex].reponses[responseIndex].etat = true;
    }
}
