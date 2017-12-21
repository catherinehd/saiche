export class UserModel {
  id: number;
  mobile: string;
  nickName: string;
  loanTimes: number;
  insuranceTimes: number;
  accessId: number;
  constructor(options?: any) {
    if (options) {
      this.id = options.id;
      this.mobile = options.mobile;
      this.nickName = options.nick_name;
      this.loanTimes = options.loans_tiems;
      this.insuranceTimes = options.insus_times;
      this.accessId = options.access_id;
    }
  }
}
