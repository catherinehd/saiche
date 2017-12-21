import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPwdComponent } from './setting-pwd.component';

describe('SettingPwdComponent', () => {
  let component: SettingPwdComponent;
  let fixture: ComponentFixture<SettingPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
