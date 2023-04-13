import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent implements OnInit {

  public FirstName: string = "Heetesh"
  public LastName: string = "Panghanti"
  public Mobile: string = "+917219319990"
  public Email: string = "hpultimatemedia@gmail.com"
  public Country: string = "India"
  public State: string = "Maharashtra"
  public City: string = "Pune"
  public Links = ["linkedin","medium"]//[{ "LinkedIn": "" }, { "StackOverflow": "" }, { "Medium": "" }, { "YouTube": "" }]

  constructor() { }

  ngOnInit(): void {
  }

}
