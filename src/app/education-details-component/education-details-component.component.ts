import { Component, OnInit } from '@angular/core';
import { EducationDetails } from './EducationDetails';

@Component({
  selector: 'app-education-details-component',
  templateUrl: './education-details-component.component.html',
  styleUrls: ['./education-details-component.component.css']
})
export class EducationDetailsComponentComponent implements OnInit {

  public EducationDetails: EducationDetails[] = [{ CollegeOrUniversity: "Pune University", Degree: "MCA", StartDate: "2015", EndDate: "2018", Grade: "O", Pointers: "", IsPresent: false }, { CollegeOrUniversity: "Pune University", Degree: "BCS", StartDate: "2011", EndDate: "2015", Grade: "O", Pointers: "", IsPresent: false }]

  constructor() { }

  ngOnInit(): void {
  }

}
