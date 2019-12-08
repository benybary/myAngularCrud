import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {

   }

   addProduct(product_Name, product_Description, product_SKU ){
     const myObj = {
       product_Name: product_Name,
       product_Description: product_Description,
       product_SKU: product_SKU
     };
     // Express -> Observable<T>
     // http.get().subscribe() <- Rule: http always "get" subscribe
     this.http.post(`${this.uri}/add`, myObj).subscribe(res => {
       console.log('Add Done!');
     });

   }
}
