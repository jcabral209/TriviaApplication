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
  triviaIndex: any[] = [];

  constructor(private triviaGame: GetDataService,
    private _route: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit() {
    this.initialize();
    this._route.params.subscribe(params => {
      this.levelId = params.levelId;
      this.topic = params.topic;
      this.getQuestions();
    });
  }
  initialize() {
    this.triviaQ = [];
    this.triviaIndex = [];
  }

  getQuestions() {
    this.triviaQ = this.triviaGame.getTriviaQuestions(this.topic, this.levelId);
    console.log ('This is my ARRAY ', this.triviaQ);
    for (const  q of this.triviaQ) {
      console.log('This is q+++++++++++++++++++++++++++++++++>> ' , q);
    }
    // this.triviaGame.shuffleArray(this.triviaIndex, this.triviaIndex.length);
    // console.log('Trivia index ======>', this.triviaIndex);
  }


}
