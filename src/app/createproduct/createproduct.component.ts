import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
    ) {
    this.productForm = this.fb.group({
      'Brand': ['', Validators.required],
      'ImageUrl': ['', Validators.required],
      'Description': [''],
    })
   }

  ngOnInit(): void {
  }

  get imageUrl() {
    return this.productForm.get('ImageUrl');
  }

  public create(): void {
    this.productService.create(this.productForm.value).subscribe(res => {
      console.log(res);
    });
  }

}
