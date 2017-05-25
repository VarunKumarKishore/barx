import {Component, OnInit, Input} from '@angular/core';
import {ProductBuilderRulesService} from "../product-builder-rules.service";

@Component({
  selector: 'app-pricingsection',
  templateUrl: './pricingsection.component.html',
  styleUrls: ['./pricingsection.component.css']
})
export class PricingsectionComponent implements OnInit {

  displaySection1: boolean = true;
  displaySection2: boolean = false;
  displaySection3: boolean = false;
  displaySection4: boolean = false;
  @Input() private showLabel : boolean;

  private allProduct = [];


  @Input() private componentType;
  private productType : string;
  private ruleArray1 = [];
  private ruleArray2 = [];
  private ruleArray3 = [];
  private ruleArray4 = [];

  constructor(private myinputServiceService: ProductBuilderRulesService) {
  }

  mapQuoteData(response){
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
        } else if(this.allProduct[i].column == "3"){
          this.ruleArray3.push(this.allProduct[i]);
        } else{
          this.ruleArray4.push(this.allProduct[i]);
        }
      }
    }
  }

  ngOnInit() {
    this.myinputServiceService.getRule(this.componentType).subscribe(response => this.mapQuoteData(response));
  }

  ngOnDestroy() {
  }

}
