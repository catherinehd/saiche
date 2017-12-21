import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Request, Headers } from '@angular/http';
import { ApiList } from '../config/apiList';
import {send} from "q";

@Injectable()
export class HttpService {
  baseUrl: string;
  token: string;

  constructor(private http: Http) {
    this.baseUrl = new ApiList().getUrl();
    this.token = window.localStorage.getItem('token');
  }

  getMethod(options: any) {
    const url = options.fullUrl || this.baseUrl + options.url;
    const headers = new Headers({
      'Authorization': 'Bearer' + window.localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let searchString = '';
    for (const key in options.data) {
      searchString += key + '=' + options.data[key] + '&';
    }
    const requestOptions = new RequestOptions({
      url: url,
      body: '',
      method: RequestMethod.Get,
      headers: headers,
      search: searchString.slice(0, -1)
    });
    return this.http.request(new Request(requestOptions));
  }

  postMethod(options: any) {
    const url = options.fullUrl || this.baseUrl + options.url;
    const headers = new Headers({
      'Authorization': 'Bearer' + window.localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let sendData = '';
    for (const key in options.data) {
      sendData += key + '=' + options.data[key] + '&';
    }
    const requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      headers: headers
    });
    return this.http.post(url, sendData.slice(0, -1), requestOptions);
  }

  putMethod(options: any) {
    const url = options.fullUrl || this.baseUrl + options.url;
    const headers = new Headers({
      'Authorization': 'Bearer' + window.localStorage.getItem('token'),
      'Content-Type': 'application/x-wwww-form-encoded'
    });
    let sendData = '';
    for (const key in options.data) {
      sendData += key + '=' + options.data[key] + '&';
    }
    const requestOptions = new RequestOptions({
      method: RequestMethod.Put,
      headers: headers
    });
    return this.http.put(url, sendData.slice(0, -1), requestOptions);
  }

}
