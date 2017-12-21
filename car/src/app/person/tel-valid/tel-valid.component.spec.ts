import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelValidComponent } from './tel-valid.component';

describe('TelValidComponent', () => {
  let component: TelValidComponent;
  let fixture: ComponentFixture<TelValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
