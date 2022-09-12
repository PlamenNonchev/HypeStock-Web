import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  createForm: FormGroup;
  brands: Brand[];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private brandService: BrandService,
    ) {
    this.createForm = this.fb.group({
      'brandId': ['', Validators.required],
      'model': ['', Validators.required],
      'colorway': ['', Validators.required],
      'description': ['', Validators.required],
      'imageUrl': ['', Validators.required],
      'releaseDate': ['', Validators.required],
      'price': ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe(res => {
      this.brands = res;
    })
  }

  get brandId() {
    return this.createForm.get('brandId');
  }

  get model() {
    return this.createForm.get('model');
  }

  get colorway() {
    return this.createForm.get('colorway');
  }

  get description() {
    return this.createForm.get('description');
  }

  get imageUrl() {
    return this.createForm.get('imageUrl');
  }

  get releaseDate() {
    return this.createForm.get('releaseDate');
  }

  get price() {
    return this.createForm.get('price');
  }

  public create(): void {
    this.productService.create(this.createForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/products/' + res ])
    });
  }

}
