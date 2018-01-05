import { Component, OnInit, AfterViewInit, HostBinding, ViewChild } from '@angular/core';
import { SlideUpAnimation } from '../../shared/animations/slide-up.animation';
import { UserService } from '../../service/user.service';

const Clipboard = require('clipboard/dist/clipboard');

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.styl'],
  animations: [SlideUpAnimation]
})
export class InviteComponent implements OnInit, AfterViewInit {

  shareLinkImg: string;
  shareLink: string;
  total: number;
  remain: number;
  copyobj: any;
  msg: string;
  @HostBinding('@slideUpAnimation') slideUpAnimation;
  @HostBinding('class.invitPage') invitPage = true;
  @ViewChild('btn') btnElementRef;
  @ViewChild('input') inputElementRef;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.islogin().subscribe( res => {
      this.shareLink = 'http://www.baidu..com？agent=' + res.json().data.userId;
      this.shareLinkImg = res.json().data.userCode;
      this.total = res.json().data.userPlease;
      this.remain = res.json().data.userQuota;
    });
  }

  ngAfterViewInit() {
    this.copyobj = new Clipboard(this.btnElementRef.nativeElement);
  }

  copy() {
    this.copyobj.on('success', e => {
      this.showTip('复制成功');
      this.inputElementRef.nativeElement.blur();
      e.clearSelection();
      this.copyobj.destroy();
    });
    this.copyobj.on('error', e => {
     this.showTip('自动复制失败，请手动选择链接分享。');
      e.clearSelection();
    });
  }

  showTip(msg) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 2000);
  }
}
