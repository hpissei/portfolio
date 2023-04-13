import { Component, OnInit } from '@angular/core';
import { LanguageDetails, LanguageLevel } from './LanguageDetails';

@Component({
  selector: 'app-language-details-component',
  templateUrl: './language-details-component.component.html',
  styleUrls: ['./language-details-component.component.css']
})
export class LanguageDetailsComponentComponent implements OnInit {

  public Language: LanguageDetails[] = [{ Language: "English", Level: LanguageLevel.Advanced }, { Language: "Japanese", Level: LanguageLevel.Basic }];

  constructor() {

  }

  ngOnInit(): void {
  }

}
