import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsComponentComponent } from './company-details-component.component';

describe('CompanyDetailsComponentComponent', () => {
  let component: CompanyDetailsComponentComponent;
  let fixture: ComponentFixture<CompanyDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
