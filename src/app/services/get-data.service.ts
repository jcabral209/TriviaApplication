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

  public triviaQ: SpecData[] = [];

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
    const locatedKey = _.filter(keys, function(o) { return o.topic === topic; });
    console.log('This is my key =====>', locatedKey);

    this.triviaQ = [];
    this.subscription.add(
      this.dataService
        .getURL(apiURLpt1 + locatedKey[0].key + gameLevel + apiURLpt2)
        .subscribe(x => {
          console.log('This the API call --->>>> ', apiURLpt1 + locatedKey[0].key + gameLevel + apiURLpt2);
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

          }
        })
    );
    return this.triviaQ;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // shuffleArray(array: any[], len: number) {
  //   let temp: any;
  //   let index: any;
  //   for (let i = 0; i < len; i++) {
  //     console.log('i: ', i);
  //     array.push(i);
  //   }
  //   console.log(
  //     'After for loop this is ARRAY[] --> ',
  //     array
  //   );
  //   // While there are elements in the array
  //   while (len > 0) {
  //     // Pick a random index
  //     index = Math.floor(Math.random() * len);
  //     // Decrease len by 1
  //     console.log('INSIDE WHILE  ---> ' + index);
  //     len--;
  //     // And swap the last element with it
  //     temp = array[len];
  //     array[len] = array[index];
  //     array[index] = temp;
  //   }
  //   console.log('This is the index order of the ARRAY -> ', array);
  //   return array;
  //   // var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  //   // console.log(shuffle(myArray));
  // }

}
