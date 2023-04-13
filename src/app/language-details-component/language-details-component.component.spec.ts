import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDetailsComponentComponent } from './language-details-component.component';

describe('LanguageDetailsComponentComponent', () => {
  let component: LanguageDetailsComponentComponent;
  let fixture: ComponentFixture<LanguageDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
