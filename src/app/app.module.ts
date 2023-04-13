import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserProfileComponentComponent } from './user-profile-component/user-profile-component.component';
import { ProjectDetailsComponentComponent } from './project-details-component/project-details-component.component';
import { LanguageDetailsComponentComponent } from './language-details-component/language-details-component.component';
import { ExternalProjectDetailsComponentComponent } from './external-project-details-component/external-project-details-component.component';
import { CompanyDetailsComponentComponent } from './company-details-component/company-details-component.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { EducationDetailsComponentComponent } from './education-details-component/education-details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponentComponent,
    ProjectDetailsComponentComponent,
    LanguageDetailsComponentComponent,
    ExternalProjectDetailsComponentComponent,
    CompanyDetailsComponentComponent,
    SkillsComponentComponent,
    EducationDetailsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
