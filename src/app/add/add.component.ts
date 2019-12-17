import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private ps: ProductService) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      product_Name: ['', Validators.required],
      product_Description: ['', Validators.required],
      product_SKU: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  addProductTS(product_Name, product_Description, product_SKU) {
    console.log('Working at addProductTS');


    return this.ps.addProduct(product_Name, product_Description, product_SKU);

  }
}
