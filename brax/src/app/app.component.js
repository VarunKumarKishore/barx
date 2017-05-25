"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app works!';
        this.selectedValue = "Select Product Type";
        this.categories = [
            { id: 1, name: 'Select Product Type' },
            { id: 2, name: 'Worst of Reverse Convertible' },
            { id: 3, name: 'Autocallable' }
        ];
        this.classPricingActive = false;
        this.classMultiPricingActive = false;
    }
    AppComponent.prototype.selectComponentType = function (event) {
        console.log("this : " + event.srcElement.innerText);
        if (event.srcElement.innerText == "Multi Pricing") {
            if (this.selectedValue && this.selectedValue != "Select Product Type") {
                this.classPricingActive = false;
                this.classMultiPricingActive = true;
                this.router.navigate(['./multipricing', this.selectedValue]);
            }
        }
        else if (event.srcElement.innerText == "Pricing") {
            if (this.selectedValue && this.selectedValue != "Select Product Type") {
                this.classPricingActive = true;
                this.classMultiPricingActive = false;
                this.router.navigate(['./pricing', this.selectedValue]);
            }
        }
        else {
            this.classPricingActive = true;
            this.classMultiPricingActive = false;
            this.router.navigate(['./pricing', event.srcElement.selectedOptions[0].innerText]);
        }
    };
    AppComponent.prototype.navigateTo = function (eventName) {
        if (eventName === 'pricing') {
            this.classPricingActive = true;
            this.classMultiPricingActive = false;
            this.router.navigate(['./pricing', eventName]);
        }
        else {
            this.classPricingActive = false;
            this.classMultiPricingActive = true;
            this.router.navigate(['./multipricing']);
        }
        console.log(event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
