import {Component, OnInit} from '@angular/core';
import {QuestionDto, UlearnService} from '../../../../remote';

@Component({
    selector: 'app-creation-quiz',
    templateUrl: './creation-quiz.component.html',
    styleUrls: ['./creation-quiz.component.scss']
})
export class CreationQuizComponent implements OnInit {

    questions: QuestionDto[] = [];

    constructor(private ulearnService: UlearnService) {

    }

    submit() {
        console.log(this.questions);
        this.ulearnService.saveAllUsingPOST(this.questions).subscribe(
            value => console.log(value),
            error => console.error(error),
            () => console.log('Done'));
    }

    ngOnInit(): void {

    }

    clickAddReponse(currentQuestion: QuestionDto) {
        currentQuestion.reponses.push({value: '', etat: false});
    }

    addQuestion($event) {
        this.questions.push({value: $event, reponses: [{value: '', etat: false}]});
    }

    isValide(): boolean {
        //return this.responses.map(value => value.valeur != null && value.valeur.trim() == '').length == 0;
        return;
    }

    reset() {
        this.questions = [];
    }

    changeCorrectResponse(questionIndex: number, responseIndex: number) {
        this.questions[questionIndex].reponses.map(value => value.etat = false);
        this.questions[questionIndex].reponses[responseIndex].etat = true;
    }
}

/*

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
*/
