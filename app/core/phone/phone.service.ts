import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class Phone {
  constructor(private http: Http) {}

  query(): Observable<PhoneData[]> {
    return this.http
      .get("phones/phones.json")
      .pipe(map((res: Response) => res.json()));
  }

  get(id: string): Observable<PhoneData> {
    return this.http
      .get(`phones/${id}.json`)
      .pipe(map((res: Response) => res.json()));
  }
}
