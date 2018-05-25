import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Employee } from "./app.employee.model";

@Injectable()
export class EmployeeService {
  url: string;
  constructor(private http: Http) {
    this.url = "http://testwebapiapp123.azurewebsites.net/api/Employee";
  }

  get(): Observable<Response> {
    let res: Observable<Response>;
    res = this.http.get(this.url);
    return res;
  }

  post(emp: Employee): Observable<Response> {
    let res: Observable<Response>;
    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions();
    options.headers = headers;
    res = this.http.post(this.url, JSON.stringify(emp), options);
    return res;
  }

  put(id: number, emp: Employee): Observable<Response> {
    let res: Observable<Response>;
    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions();
    options.headers = headers;
    res = this.http.put(`${this.url}/${id}`, JSON.stringify(emp), options);
    return res;
  }

  delete(id: number): Observable<Response> {
    let res: Observable<Response>;
    res = this.http.delete(`${this.url}/${id}`);
    return res;
  }
}
