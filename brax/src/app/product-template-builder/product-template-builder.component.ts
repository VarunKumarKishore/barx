import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-product-template-builder',
  templateUrl: 'product-template-builder.component.html',
  styleUrls: ['product-template-builder.component.css']
})
export class ProductTemplateBuilderComponent implements OnInit {

  @Input() private ruleArray1;
  @Input() private showLabel;
  constructor() { }

  ngOnInit() {
  }

}
