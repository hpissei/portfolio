import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.css']
})
export class SkillsComponentComponent implements OnInit {

  skills: string[] = ["C#","SQL","JQuery","HTML","CSS",".Net",".Net Core","Web API","REST","Azure","Azure DevOps"]
  constructor() { }

  ngOnInit(): void {
  }

}
