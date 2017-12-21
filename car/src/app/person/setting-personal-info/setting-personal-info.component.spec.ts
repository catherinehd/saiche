import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPersonalInfoComponent } from './setting-personal-info.component';

describe('SettingPersonalInfoComponent', () => {
  let component: SettingPersonalInfoComponent;
  let fixture: ComponentFixture<SettingPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
