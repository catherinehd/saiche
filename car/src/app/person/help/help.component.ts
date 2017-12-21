import { Component, OnInit, HostBinding } from '@angular/core';
import { SlideDownUpAnimation } from '../../shared/animations/slide-down-up.animation';
import { SlideToRightAnimation } from '../../shared/animations/slide-to-right.animation';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.styl'],
  animations: [ SlideDownUpAnimation, SlideToRightAnimation ]
})
export class HelpComponent implements OnInit {
  @HostBinding('@slideToRightAnimation') slideToRightAnimation = true;
  @HostBinding('class.page') page = true;
  quesList = [
    { ques: '资料安全性问题', showDetail: false,  answer: '本平台有严格的用户信息操作规范，从流程上确保用户的信息不被侵犯；与第三方进行签订明确的信息保密协议，保证用户信息不被泄露。'},
    { ques: '为什么会审批拒绝？', showDetail: false, answer: '您提交的个人信息，可能不符合贷款产品的放款需求。请提交真实有效的个人资质。或尝试选择其他产品。' },
    { ques: '是否可以再次申请？', showDetail: false, answer: '可以在本平台内多次提交贷款产品的申请需求。' },
    { ques: '如何查询进度？', showDetail: false, answer: '在本平台内提交的贷款申请无需另行进度查询。您只需确保提交信息真实完整。如果信息完整，但长时间未收到联系电话或反馈意见，可能是您的申请没有通过初审，或可以联系客服。' },
    { ques: '提交后是否可以调整金额和期限？', showDetail: false, answer: '可以在提交申请后，人工审核信息阶段与工作人员沟通调整金额或期限。' },
    { ques: '提交申请后多久会审批通过？', showDetail: false, answer: '在您提交申请后，会有贷款专员与您电话联系，3天内如果未接到联系电话，可能您的申请没有通过初审。' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
