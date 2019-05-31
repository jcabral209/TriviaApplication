import { Component, OnInit } from '@angular/core';
import { OptionLevelService } from 'src/app/services/option-level.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-option-page',
  templateUrl: './option-page.component.html',
  styleUrls: ['./option-page.component.css']
})
export class OptionPageComponent implements OnInit {
  topic: string;
  constructor(private optionFromOptionPage: OptionLevelService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.topic = params['topic'];
      console.log('My topic is: ', this.topic);
    });
  }
}
