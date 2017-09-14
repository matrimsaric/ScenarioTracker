import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioEntryComponent } from './scenario-entry.component';

describe('ScenarioEntryComponent', () => {
  let component: ScenarioEntryComponent;
  let fixture: ComponentFixture<ScenarioEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
