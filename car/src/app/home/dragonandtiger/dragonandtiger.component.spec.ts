import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonandtigerComponent } from './dragonandtiger.component';

describe('DragonandtigerComponent', () => {
  let component: DragonandtigerComponent;
  let fixture: ComponentFixture<DragonandtigerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonandtigerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonandtigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
