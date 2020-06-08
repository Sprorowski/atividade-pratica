import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
const BACK_URL = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  newContact(params){
    return this.http.post(BACK_URL + "/new", params);
  }
  listContacts(){
    return this.http.get<Object[]> (BACK_URL);
  }

}
