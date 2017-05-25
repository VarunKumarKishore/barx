import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { MultipricingComponent } from './multipricing/multipricing.component';
import { PricingsectionComponent } from './pricingsection/pricingsection.component';
import {RouterModule} from "@angular/router";
import {priceRoutes} from "./app.routes";
import { ProductTemplateBuilderComponent } from './product-template-builder/product-template-builder.component';
import { MyinputComponent } from './myinput/myinput.component';
import {ProductBuilderRulesService} from "./product-builder-rules.service";

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    MultipricingComponent,
    PricingsectionComponent,
    ProductTemplateBuilderComponent,
    MyinputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(priceRoutes)
  ],
  providers: [ProductBuilderRulesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
