
import {Routes} from "@angular/router";
import {PricingComponent} from "./pricing/pricing.component";
import {MultipricingComponent} from "./multipricing/multipricing.component";

export const priceRoutes : Routes = [
  {path: 'pricing/:componentType', component: PricingComponent},
  {path: 'multipricing/:componentType', component: MultipricingComponent}
];
