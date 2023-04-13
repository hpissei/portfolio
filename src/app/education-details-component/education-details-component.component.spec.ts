import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDetailsComponentComponent } from './education-details-component.component';

describe('EducationDetailsComponentComponent', () => {
  let component: EducationDetailsComponentComponent;
  let fixture: ComponentFixture<EducationDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
