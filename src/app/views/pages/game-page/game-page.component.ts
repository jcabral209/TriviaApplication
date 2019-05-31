import { Component, OnInit } from '@angular/core';
import { SpecData } from 'src/app/interfaces/spec-data';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  triviaQ: SpecData[] = [];

  constructor(private triviaGame: GetDataService) {
    this.triviaQ = [];
    this.triviaQ = this.triviaGame.getTriviaQuestions('3');
    // console.log('This are the trivia Questions --> ', this.triviaQ);
  }

  ngOnInit() {
  }

}
