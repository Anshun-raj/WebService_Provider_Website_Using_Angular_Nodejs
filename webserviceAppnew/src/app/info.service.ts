import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Viewer} from './viewer';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  _url="http://localhost:3000/add";
  constructor(private _http:HttpClient){}

  send(viewer:Viewer)
  {
    return this._http.post<any>(this._url,viewer);
  }
}
