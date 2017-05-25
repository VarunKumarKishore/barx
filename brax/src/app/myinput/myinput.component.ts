import {Component, OnInit, Input} from '@angular/core';
import {ProductBuilderRulesService} from "../product-builder-rules.service";

@Component({
  selector: 'app-myinput',
  templateUrl: './myinput.component.html',
  styleUrls: ['./myinput.component.css']
})
export class MyinputComponent implements OnInit {

  @Input()  elementName: string;
  @Input()  id: string;
  @Input()  type: string;
  @Input() showLabel;

  constructor() { }

  ngOnInit() {
  }


}
