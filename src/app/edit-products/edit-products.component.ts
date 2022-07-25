import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  private productId: string;

  public productForm: FormGroup;
  public product: Product;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService) { 
      this.productForm = this.fb.group({
        'id': [''],
        'description': [''],
        'imageUrl': [''],
      })
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productService.getProduct(this.productId).subscribe(prod => {
        this.product = prod;
        this.productForm = this.fb.group({
          'id': [this.product.id],
          'description': [this.product.description],
          'imageUrl': [this.product.imageUrl],
        })
      })
    })
  }

  editProduct(): void {
    this.productService.editProduct(this.productForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
