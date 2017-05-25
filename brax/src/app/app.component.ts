import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  selectedValue: string = "Select Product Type";
  classPricingActive: boolean;
  classMultiPricingActive: boolean;

  categories:any[] = [
    {id:1, name: 'Select Product Type'},
    {id:2,name:'Worst of Reverse Convertible'},
    {id:3,name:'Autocallable'}
    ];

  constructor(private router : Router){
    this.classPricingActive = false;
    this.classMultiPricingActive = false;
  }

  selectComponentType(event){
    console.log("this : "+event.srcElement.innerText);
    if(event.srcElement.innerText == "MultiPricer"){
      if(this.selectedValue && this.selectedValue != "Select Product Type") {
        this.classPricingActive = false;
        this.classMultiPricingActive = true;
          this.router.navigate(['./multipricing',this.selectedValue]);
      }
    }else if(event.srcElement.innerText == "Pricer"){
      if(this.selectedValue && this.selectedValue != "Select Product Type") {
        this.classPricingActive = true;
        this.classMultiPricingActive = false;
        this.router.navigate(['./pricing', this.selectedValue]);
      }
    }else {
      this.classPricingActive = true;
      this.classMultiPricingActive = false;
      this.router.navigate(['./pricing', event.srcElement.selectedOptions[0].innerText]);
    }
  }

  navigateTo(eventName: string){
    if(eventName === 'pricing'){
      this.classPricingActive = true;
      this.classMultiPricingActive = false;
      this.router.navigate(['./pricing', eventName]);
    }else{
      this.classPricingActive = false;
      this.classMultiPricingActive = true;
      this.router.navigate(['./multipricing']);
    }
    console.log(event)
  }
}
