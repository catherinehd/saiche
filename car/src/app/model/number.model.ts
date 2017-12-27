export class NumberModel {
  periods: string;
  id: number;
  code: string;
  opentime: number;
  opentimestamp: string;
  createtime: number;
  updatetime: number;
  constructor(options?: any) {
    if (options) {
      this.periods = options.bjpkExpect;
      this.id = options.bjpkId;
      this.code = options.bjpkOpencode;
      this.opentime = options.bjpkOpentime;
      this.opentimestamp = options.bjpkOpentimestamp;
      this.createtime = options.createTime;
      this.updatetime = options.updateTime;
    }
  }
}
