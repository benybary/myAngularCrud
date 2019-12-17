import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from "@angular/router"
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:3000/product';

  // DI - Loosely Coupled
  constructor(private http: HttpClient, private router: Router) {
   }
   // Add new product to DB
   addProduct(product_Name, product_Description, product_SKU ){
     const myObj = {
       product_Name: product_Name,
       product_Description: product_Description,
       product_SKU: product_SKU
     };
     // Express -> Observable<T>
     // http.get().subscribe() <- Rule: http always "get" subscribe
     console.log('Working on Post....');
     
     this.http.post(`${this.uri}/add`, myObj).subscribe(res => {
       console.log('Add Done!');
       this.router.navigate(['product']);
     });
     
   }
   // Get list of all products
   getProducts(){
     return this.http.get(`${this.uri}`)
   }
   // Edit product by ID
   editProduct(id){
     //console.log('Edit Product');
     return this.http.get(`${this.uri}/edit/${id}`);
     
   }
   // Update product
   updateProduct(id, product_Name, product_Description, product_SKU ){
    const myObj = {
      product_Name: product_Name,
      product_Description: product_Description,
      product_SKU: product_SKU
    };
    this.http.post(`${this.uri}/update/${id}`, myObj).subscribe((res) => {
      console.log(res + 'Product Updated');
      
    });
   };

   // Delete Product
   deleteProduct(id){
   return this.http.get(`${this.uri}/delete/${id}`);
    }
   }
  
