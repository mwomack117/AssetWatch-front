import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddAsset } from './models/add-asset';

@Injectable({
  providedIn: 'root'
})
export class ApiInvestmentService {

  url: string = "http://localhost:8080/AssetWatch";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  RequestOptions = {

  }

  userData = JSON.parse(localStorage.getItem("SessionUser"));



  constructor(private http: HttpClient) { }

  public addAsset(data: AddAsset): Observable<AddAsset> {
    return this.http.post<AddAsset>(this.url + "/investment/add", data, this.httpOptions);
  }


  public getAllAssets(): Observable<[]> {
    let data = { "id": this.userData.id }
    return this.http.post<[]>(this.url + "/investment/get", data, this.httpOptions);
  }
}
