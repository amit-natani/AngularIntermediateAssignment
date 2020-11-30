import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;

  @Output() cancelAddEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  get title() {
    return this.productForm.get('title');
  }

  get price() {
    return this.productForm.get('price');
  }

  createProduct(form): void {
    alert("Product added successfully");
    this.productForm.reset();
  }

  cancelAdd(): void {
    this.cancelAddEmitter.emit();
  }

}
