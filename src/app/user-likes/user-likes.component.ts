import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-likes',
  templateUrl: './user-likes.component.html',
  styleUrls: ['./user-likes.component.css']
})
export class UserLikesComponent implements OnInit {
  likedProducts: Array<Product>;

  constructor(
    private productsService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productsService.getProductsLikedByUser().subscribe(res => {
      this.likedProducts = res;
    })
  }

  onClickProduct(id) {
    this.router.navigate(['products', id ])
  }
}
