import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnName: string;
  // @Input() route: string;
  // @Input() enterTopic: string;
  // @Input() enterLevel: string;
  // valueTopic = 'History';

  // public valueTopic: BehaviorSubject<string> = new BehaviorSubject<string>(this.enterTopic);
  // public valueLevel: BehaviorSubject<string> = new BehaviorSubject<string>(this.enterLevel);
  constructor() { }

  ngOnInit() {
    // console.log('Enter Topic Value =====>>>> ', this.enterTopic);
    // console.log('Enter Level Value =====>>>> ', this.enterLevel);
  }

}
