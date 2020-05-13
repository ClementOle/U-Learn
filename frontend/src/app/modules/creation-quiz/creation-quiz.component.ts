import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-creation-quiz',
    templateUrl: './creation-quiz.component.html',
    styleUrls: ['./creation-quiz.component.scss']
})
export class CreationQuizComponent implements OnInit {

    questions: QuestionDto[] = [];

    constructor() {

    }

    submit() {
        console.log(this.questions);
    }

    ngOnInit(): void {

    }

    clickAddReponse(currentQuestion: QuestionDto) {
        currentQuestion.responses.push(new ReponseDto('', false));
    }

    addQuestion($event) {
        this.questions.push(new QuestionDto($event, [new ReponseDto('', false)]));
    }

    isValide(): boolean {
        //return this.responses.map(value => value.valeur != null && value.valeur.trim() == '').length == 0;
        return;
    }

    reset() {
        this.questions = [];
    }

    changeCorrectResponse(questionIndex: number, responseIndex: number) {
        this.questions[questionIndex].responses.map(value => value.etat = false);
        this.questions[questionIndex].responses[responseIndex].etat = true;
    }
}

export class QuestionDto {
    value: string;
    responses: ReponseDto[];


    constructor(value: string, responses: ReponseDto[]) {
        this.value = value;
        if (responses == null) {
            this.responses = [new ReponseDto('', false)];
        } else {
            this.responses = responses;
        }
    }
}

export class ReponseDto {
    value: string;
    etat: boolean;


    constructor(value: string, etat: boolean) {
        this.value = value;
        this.etat = etat;
    }
}
