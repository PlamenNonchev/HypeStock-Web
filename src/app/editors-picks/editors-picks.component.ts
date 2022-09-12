import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-editors-picks',
  templateUrl: './editors-picks.component.html',
  styleUrls: ['./editors-picks.component.css']
})
export class EditorsPicksComponent implements OnInit {
  editorsPicksForm: FormGroup;
  products: Product[];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
  ) {
    this.editorsPicksForm = this.fb.group({
      'mainProductId': [1, Validators.required],
      'sideProductId': [2, Validators.required],
    })
   }

  ngOnInit(): void {
    this.productService.getAll().subscribe(res => {
      this.products = res;
    })
  }


  get mainProductId() {
    return this.editorsPicksForm.get('mainProductId');
  }

  get sideProductId() {
    return this.editorsPicksForm.get('sideProductId');
  }

  public pickProducts(): void {
    this.productService.pickProducts(this.editorsPicksForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/']);
    })
  }
}
