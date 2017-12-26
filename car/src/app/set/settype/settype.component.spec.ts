import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettypeComponent } from './settype.component';

describe('SettypeComponent', () => {
  let component: SettypeComponent;
  let fixture: ComponentFixture<SettypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
