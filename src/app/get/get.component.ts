import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import Product from '../product'


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  lstProducts: Product[];


  constructor(private productService: ProductService) {

   }

  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.lstProducts = data;
    })
  }
  // deleteProductGet(id){
  //   this.productService.deleteProduct(id).subscribe(data => {
  //     this.productService.getProducts().subscribe((data: Product[]) => {
  //       this.lstProducts = data;
  //     })
  //   })
  // }

}
