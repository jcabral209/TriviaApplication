import { Component, OnInit } from '@angular/core';
import { SpecData } from 'src/app/interfaces/spec-data';
import { GetDataService } from 'src/app/services/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  triviaQ: SpecData[] = [];
  topic: string;
  levelId: string;

  constructor(private triviaGame: GetDataService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.triviaQ = [];
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.levelId = params.levelId;
      this.topic = params.topic;
      this.getQuestions();
    });
  }
  getQuestions() {
    this.triviaQ = this.triviaGame.getTriviaQuestions(this.topic, this.levelId);

  }
}
