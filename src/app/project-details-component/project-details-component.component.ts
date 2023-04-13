import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from './ProjectDetails';

@Component({
  selector: 'app-project-details-component',
  templateUrl: './project-details-component.component.html',
  styleUrls: ['./project-details-component.component.css']
})
export class ProjectDetailsComponentComponent implements OnInit {

  constructor() { }

  public ProjectDetails: ProjectDetails[] = [{ Name: "Wolters Kluwer", StartDate: "10/2021", EndDate: "", Role: "Product Software Engineer", Pointers: "", IsPresent : true }, { Name: "Harbinger Systems", StartDate: "01/2018", EndDate: "10/2021", Role: "Software Engineer", Pointers: "" }]

  ngOnInit(): void {

  }

}
