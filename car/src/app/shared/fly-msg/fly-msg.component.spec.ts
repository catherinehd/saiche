import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyMsgComponent } from './fly-msg.component';

describe('FlyMsgComponent', () => {
  let component: FlyMsgComponent;
  let fixture: ComponentFixture<FlyMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
