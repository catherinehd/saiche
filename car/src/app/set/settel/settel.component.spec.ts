import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettelComponent } from './settel.component';

describe('SettelComponent', () => {
  let component: SettelComponent;
  let fixture: ComponentFixture<SettelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
