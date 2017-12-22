import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigsmallComponent } from './bigsmall.component';

describe('BigsmallComponent', () => {
  let component: BigsmallComponent;
  let fixture: ComponentFixture<BigsmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigsmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigsmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
