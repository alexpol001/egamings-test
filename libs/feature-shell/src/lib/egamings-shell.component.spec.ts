import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgamingsShellComponent } from './egamings-shell.component';

describe('EgamingsShellComponent', () => {
  let component: EgamingsShellComponent;
  let fixture: ComponentFixture<EgamingsShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgamingsShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgamingsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
