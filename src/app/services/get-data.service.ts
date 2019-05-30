import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpecData } from '../interfaces/spec-data';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class GetDataService implements OnDestroy {
  subscription: Subscription = new Subscription();
  // https://spreadsheets.google.com/feeds/cells/1TkrkPNxI3dwIq6BaLNCSJau4D1M51iNc_dRTbj6v96U/2/public/full?alt=json
  apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
  gameLevel = '2';
  apiKeypt2 = '1Pai-Dph18w2BZDhOvW1X_-q602eXiK5-JjnXIQh1lpM/';
  apiURLpt3 = '/public/values?alt=json';
  private triviaQ: SpecData[] = [];

  constructor(private dataService: DataService) { }
  getTriviaQuestions(gameLevel: string) {
    // console.log(this.apiURLpt1 + this.apiKeypt2 + this.gameLevel + this.apiURLpt3);
    this.triviaQ = [];
    this.subscription.add(
      this.dataService
        .getURL(this.apiURLpt1 + this.apiKeypt2 + this.gameLevel + this.apiURLpt3)
        .subscribe(x => {
          // console.log('This the API call --->>>> ', x);
          for (const q of x.feed.entry) {
            const nfo: SpecData = {

              category: q['gsx$trivia-question'].$t,
              difficulty: q['gsx$answer1']['$t'],
              question: q['gsx$answer2']['$t'],
              _answer_1: q['gsx$answer3']['$t'],
              _answer_2: q['gsx$answer4']['$t'],
              _answer_3: q['gsx$answer4']['$t'],
              _answer_4: q['gsx$answer4']['$t'],
              correct_answer: q['gsx$correctanswer']['$t']
            };
            // console.log(nfo);
            this.triviaQ.push(nfo);
          }
        })
    );
    return this.triviaQ;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
