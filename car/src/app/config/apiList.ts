export class ApiList {
  private baseUrl: string;
  private api: string;

  constructor() {
    this.baseUrl = 'http://tease.fancelue.com/';
    this.api = '';
  }

  getUrl() {
    return this.baseUrl + this.api;
  }
}

