import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpecData } from '../interfaces/spec-data';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class GetDataService implements OnDestroy {
  subscription: Subscription = new Subscription();
  // https://spreadsheets.google.com/feeds/list/1mr_InnmjGd_BHOHqr2N3XBLg3rd0w9RSyvtVX1DgGvQ/1/public/values?alt=json
  apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
  gameLevel = '3';
  apiKeypt2 = '1mr_InnmjGd_BHOHqr2N3XBLg3rd0w9RSyvtVX1DgGvQ/';  //Test Authorization
  // apiKeypt2 = '1Pai-Dph18w2BZDhOvW1X_-q602eXiK5-JjnXIQh1lpM/';  //Authorization
  apiURLpt3 = '/public/values?alt=json';
  private triviaQ: SpecData[] = [];

  constructor(private dataService: DataService) { }
  getTriviaQuestions(gameLevel: string) {
    console.log('This is my URL =======>>>>>>', this.apiURLpt1 + this.apiKeypt2 + this.gameLevel + this.apiURLpt3);
    this.triviaQ = [];
    this.subscription.add(
      this.dataService
        .getURL(this.apiURLpt1 + this.apiKeypt2 + this.gameLevel + this.apiURLpt3)
        .subscribe(x => {
          console.log('This the API call --->>>> ', x);
          for (const q of x.feed.entry) {
            const nfo: SpecData = {

              category: q['gsx$category']['$t'],
              difficulty: q['gsx$difficulty']['$t'],
              question: q['gsx$question']['$t'],
              answer_1: q['gsx$answer1']['$t'],
              answer_2: q['gsx$answer2']['$t'],
              answer_3: q['gsx$answer3']['$t'],
              answer_4: q['gsx$answer4']['$t'],
              correct_answer: q['gsx$correctanswer']['$t']
            };
            this.triviaQ.push(nfo);
            console.log('TEST LINE =======>>>>>>>>>', nfo);
          }
        })
    );
    return this.triviaQ;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
