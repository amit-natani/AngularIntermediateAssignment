import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [

  ]
})
export class ProductComponent implements OnInit {

  shippingDetails: Boolean = false;
  addProductForm: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
