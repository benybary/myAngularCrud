import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { ProductService } from '../product.service';
import Product from '../product'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  lstProductEdit: Product[];
  product: any = {};
  editForm: FormGroup;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductService,
              private formBuiler: FormBuilder) 
              {
    this.createForm();

               }

   createForm(){
     this.editForm = this.formBuiler.group({
      product_Name: ['', Validators.required],
      product_Description: ['', Validators.required],
      product_SKU: ['', Validators.required]
     });
   }            
updateProductEdit(product_Name, product_Description, product_SKU){
  this.route.params.subscribe((params)=>{
    this.productService.updateProduct(params['id'],product_Name, product_Description, product_SKU);
    this.productService.getProducts().subscribe((data:Product[])=> {
      this.lstProductEdit = data;
      this.router.navigate(['product']);
    })
  })
}
  getProductById(id){
    this.productService.editProduct(id).subscribe((data)=> {
      this.product = data;
      this.editForm.setValue({
        product_Name: this.product.product_Name,
        product_Description:this.product.product_Description,
        product_SKU: this.product.product_SKU
      });
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.productService.editProduct(params['id']).subscribe((res)=>{
        this.product = res;
      });
    });
    this.getProductById(this.route.snapshot.params['id']);
  }

}
