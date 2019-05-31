import { Component, OnInit } from '@angular/core';
import { OptionLevelService } from 'src/app/services/option-level.service';

@Component({
  selector: 'app-option-page',
  templateUrl: './option-page.component.html',
  styleUrls: ['./option-page.component.css']
})
export class OptionPageComponent implements OnInit {

  constructor(private optionFromOptionPage: OptionLevelService) { }

  ngOnInit() {

  }
  getOptionLevel(levelValue: string) {
    console.log('Passing Select Value =====>>>  ', levelValue);
    this.optionFromOptionPage.setLevel(levelValue);
    console.log('Check in Select Function =====>>>  ', this.optionFromOptionPage.getSelectLevel());
  }
}
