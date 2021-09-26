import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionDto, UlearnService} from '../../../remote';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-quizz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

    coursId: number;
    questions: QuestionDto[];
    result: number;
    form: FormGroup;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private uLearnService: UlearnService,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.coursId = +params.get('id');

            this.uLearnService.getQuizByCoursIdUsingGET(this.coursId)
                .subscribe(questions => {
                    this.questions = questions;
                    this.initForm();
                });
        });

    }

    private initForm() {
        this.form = this.fb.group({});
        this.questions.forEach(question => {
            question.reponses.forEach(reponse => {
                this.form.addControl(question.id + '', new FormControl(undefined, [Validators.required]));
            });
        });
    }

    submitQuiz() {
        let score: number = 0;
        this.questions.forEach(question => {
            let goodAnswerIndex = question.reponses.findIndex(reponse => reponse.etat === true);
            if (this.form.get(question.id + '').value === goodAnswerIndex) {
                score++;
            }
        });
        this.result = (score * 10) / this.questions.length;
    }

    redoQuiz() {
        this.initForm();
    }

    goToCours() {
        this.router.navigate(['/cours', this.coursId]);
    }
}
