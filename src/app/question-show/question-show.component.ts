import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HscphysicsService } from '../services/hscphysics.service';

@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.css']
})
export class QuestionShowComponent implements OnInit {
  questions?: any[] = [];

  constructor(
    private hscPhysicsQuestionService: HscphysicsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const routeUrl = this.route.snapshot.url[2].path
    this.questions = this.hscPhysicsQuestionService.getQuestions(routeUrl);
  }

}
