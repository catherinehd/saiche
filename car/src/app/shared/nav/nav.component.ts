import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() showConfig: ShowConfig;
  @Output() onSave = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onFinish = new EventEmitter();
  @Output() onSet = new EventEmitter();

  constructor(private navigateService: NavigateService,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  goBack() {
    this.navigateService.popRoute();
  }

  pushToRegister() {
    this.navigateService.push();
    this.navigateService.pushToRoute('register/tel-valid');
  }

  save() {
    this.onSave.emit();
  }

  Edit() {
    this.onEdit.emit();
  }

  Finish() {
    this.onFinish.emit();
  }

  Set() {
    this.onSet.emit();
  }
}

class ShowConfig {
  constructor(public isCloseShow ?: boolean,
              public isArrowShow ?: boolean,
              public isEditShow ?: boolean,
              public isFinishShow ?: boolean,
              public isCancelShow ?: boolean,
              public isRegisterShow ?: boolean,
              public isGosetnewsShow ?: boolean,
              public isSaveShow ?: boolean) {}
}
