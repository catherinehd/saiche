export class ApiList {
  private baseUrl: string;
  private api: string;

  constructor() {
    this.baseUrl = 'http://bjpk.findunet.com/bjpkapi/';
    this.api = '';
  }

  getUrl() {
    return this.baseUrl + this.api;
  }
}

