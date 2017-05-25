import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {Http, Response} from "@angular/http";

@Injectable()
export class ProductBuilderRulesService {

  constructor(private http : Http) { }

  getRule(componentType : String) : Observable<any> {
    return this.http.get("src/json/AllProduct.json").map(this.extractData);
  }

  extractData(res: Response) {
    let body = res.json();
    return body;
  }

  getMultiPricingCount() : number{
    return 4;
  }
}
