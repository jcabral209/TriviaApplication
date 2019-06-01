import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-option-page',
  templateUrl: './option-page.component.html',
  styleUrls: ['./option-page.component.css']
})
export class OptionPageComponent implements OnInit {
  public get route(): ActivatedRoute {
    return this._route;
  }
  public set route(value: ActivatedRoute) {
    this._route = value;
  }
  topic: string;
  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.topic = params['topic'];
      console.log('My topic is: ', this.topic);
    });
  }
}
