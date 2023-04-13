import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalProjectDetailsComponentComponent } from './external-project-details-component.component';

describe('ExternalProjectDetailsComponentComponent', () => {
  let component: ExternalProjectDetailsComponentComponent;
  let fixture: ComponentFixture<ExternalProjectDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalProjectDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalProjectDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
