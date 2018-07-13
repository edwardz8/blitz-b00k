import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportNavComponent } from './sport-nav.component';

describe('SportNavComponent', () => {
  let component: SportNavComponent;
  let fixture: ComponentFixture<SportNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
