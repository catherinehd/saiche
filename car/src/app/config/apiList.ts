export class ApiList {
  private baseUrl: string;
  private api: string;

  constructor() {
    this.baseUrl = 'http://121.196.219.38:1003/bjpk/';
    this.api = '';
  }

  getUrl() {
    return this.baseUrl + this.api;
  }
}

