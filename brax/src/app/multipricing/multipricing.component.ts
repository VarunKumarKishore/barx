import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductBuilderRulesService} from "../product-builder-rules.service";

@Component({
  selector: 'app-multipricing',
  templateUrl: './multipricing.component.html',
  styleUrls: ['./multipricing.component.css']
})
export class MultipricingComponent implements OnInit {


  private route : Subscription;
  private componentType: string;
  private count: number[] = [];
  private maxCount : number;
  private initialMaxCount : number;
  private showLabel : boolean;

  constructor(private routes : ActivatedRoute, private myInputService : ProductBuilderRulesService) {
    this.initialMaxCount = myInputService.getMultiPricingCount()-1;
    this.maxCount = 2;//this.initialMaxCount;
  }

  createRange(number){
    this.count = [];
     for(var i = 1; i <= number; i++){
      this.count.push(i);
    }
    return this.count;
  }

  ngOnInit() {
    this.route = this.routes.params.subscribe(
      (params : Params) => {
        this.componentType = params["componentType"];
      }
    );
  }

  private pricingList : Object[] = [];
  addPricingItem(){
    this.count.push(1);
    this.maxCount++;
  }

  removePricingItem(item : number){
    this.count.splice(item,item+1);
    this.maxCount--;
  }

}
