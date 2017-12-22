import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneandtwoComponent } from './oneandtwo.component';

describe('OneandtwoComponent', () => {
  let component: OneandtwoComponent;
  let fixture: ComponentFixture<OneandtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneandtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneandtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
