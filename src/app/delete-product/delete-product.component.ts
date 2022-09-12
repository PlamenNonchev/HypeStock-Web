import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  deleteForm: FormGroup;
  products: Product[];


  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    ) {
    this.deleteForm = this.fb.group({
      'productId': [1, Validators.required],
    })
   }

  ngOnInit(): void {
    this.productService.getAll().subscribe(res => {
      this.products = res;
    })
  }

  get productId() {
    return this.deleteForm.get('productId');
  }

  public delete(): void {
    this.productService.deleteProduct(this.deleteForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/']);
    })
  }

}
