import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpecData } from '../interfaces/spec-data';
import { DataService } from './data.service';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})

export class GetDataService implements OnDestroy {
  subscription: Subscription = new Subscription();

  private triviaQ: SpecData[] = [];

  constructor(private dataService: DataService) { }
  getTriviaQuestions(topic: string, gameLevel: string) {

    const keys = [{ key: '1age3SHskms1aDJELbscpmiJ_GceFJiWVB3q4IDxFFD8/', topic: 'videoGames' },
    { key: '1F-_Tyhaew1OZLLy8A1ksj4nNtVHejCRFbUI4IJT8FEU/', topic: 'history' },
    { key: '1Pai-Dph18w2BZDhOvW1X_-q602eXiK5-JjnXIQh1lpM/', topic: 'generalKnowledge' },
    { key: '1TLvp-_Wo1N3mWwP-gIzXDoIF6j50nhzfvDFT2TKD71w/', topic: 'scienceNature' },
    ];

    const apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
    const apiURLpt2 = '/public/values?alt=json';
    console.log('Topic lm filtering by is: ', topic);
    let locatedKey = _.filter(keys, function (o) { return o.topic == topic; });
    console.log('This is my key =====>', locatedKey);

    this.triviaQ = [];
    this.subscription.add(
      this.dataService
        .getURL(apiURLpt1 + locatedKey[0].key + gameLevel + apiURLpt2)
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
            // console.log('TEST LINE =======>>>>>>>>>', nfo);
          }
        })
    );
    return this.triviaQ;

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
