import { Component, OnInit } from '@angular/core';
import {ProductBuilderRulesService} from "../product-builder-rules.service";
import {Params, ActivatedRoute, Router, NavigationStart} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  private ruleArray1 = [];
  private ruleArray2 = [];
  private ruleArray3 = [];
  private ruleArray4 = [];
  private allProduct = [];
  private route : Subscription;
  private productType : string;
  private componentType : string;

  constructor(private myinputServiceService: ProductBuilderRulesService, private routes : ActivatedRoute, private router: Router) {
    router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event:NavigationStart) => {
        console.log("insode");
        this.myinputServiceService.getRule(event.url).subscribe(response => this.mapQuoteData(response));

      });
  }

  mapQuoteData(response){
    this.ruleArray1 = [];
    this.ruleArray2 = [];
    this.ruleArray3 = [];
    this.ruleArray4 = [];
    this.allProduct = response.equiteeProduct;
      if(this.componentType == "Autocallable"){
        this.productType = "Autocallable";
      }else{
        this.productType = "WorstOfReverseConvertible";
      }

    for (var i = 0; i < this.allProduct.length; i++) {
      if(this.allProduct[i].productType.includes(this.productType)){
        if(this.allProduct[i].column == "1"){
          this.ruleArray1.push(this.allProduct[i]);
        }else if(this.allProduct[i].column == "2"){
          this.ruleArray2.push(this.allProduct[i]);
        }else if(this.allProduct[i].column == "3"){
          this.ruleArray3.push(this.allProduct[i]);
        } else{
          this.ruleArray4.push(this.allProduct[i]);
        }
      }
    }
  }

  ngOnInit() {
    this.route = this.routes.params.subscribe(
      (params : Params) => {
        this.componentType = params["componentType"];
      }
    );

    this.myinputServiceService.getRule(this.componentType).subscribe(response => this.mapQuoteData(response));
  }

  ngOnDestroy() {
    if(this.route) this.route.unsubscribe();
  }
}
