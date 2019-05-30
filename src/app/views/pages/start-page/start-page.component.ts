import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  // startBtn = 'Start';
  // optionBtn = 'Options';
  // apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
  // apiKeypt2 = '1mr_InnmjGd_BHOHqr2N3XBLg3rd0w9RSyvtVX1DgGvQ';
  // // apiKeypt2 = '1Pai-Dph18w2BZDhOvW1X_-q602eXiK5-JjnXIQh1lpM';  // Authorization
  // apiURLpt3 = '/od6/public/values?alt=json';

  constructor(private triviaGame: GetDataService) {
    // this.triviaGame.getTriviaQuestions('2');
  }

  ngOnInit() {
  }
}
