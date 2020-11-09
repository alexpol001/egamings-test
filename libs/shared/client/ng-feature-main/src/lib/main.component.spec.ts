import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgamingsMainComponent } from './main.component';

describe('EgamingsMainComponent', () => {
  let component: EgamingsMainComponent;
  let fixture: ComponentFixture<EgamingsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgamingsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgamingsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
