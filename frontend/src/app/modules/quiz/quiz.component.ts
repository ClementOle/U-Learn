import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionDto, UlearnService} from '../../../remote';

@Component({
  selector: 'app-quizz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

    questions: QuestionDto[];

  constructor(private route: ActivatedRoute,
              private uLearnService: UlearnService) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
          let coursId = +params.get('id');

          this.uLearnService.getQuizByCoursIdUsingGET(coursId)
              .subscribe(questions => this.questions = questions);
      });
  }

}
