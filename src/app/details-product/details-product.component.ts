import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  private id: string;
  public product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {
    this.route.params.subscribe(res => {
      this.id = res['id'];
      this.productService.getProduct(this.id).subscribe(product => {
        this.product = product;
      })
    })
   }

  ngOnInit(): void {
    console.log('1');
  }

}
