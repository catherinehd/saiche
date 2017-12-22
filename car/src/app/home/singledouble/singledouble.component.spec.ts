import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledoubleComponent } from './singledouble.component';

describe('SingledoubleComponent', () => {
  let component: SingledoubleComponent;
  let fixture: ComponentFixture<SingledoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingledoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
