import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  public products: Array<Product>;

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  public showDetails(id: string): void {
    this.router.navigate(["products", id]);
  }

  public onEdit(id: string): void {
    this.router.navigate(["products/" + id + "/edit"]);
  }

  public onDelete(id: string): void {
    this.productService.deleteProduct(id).subscribe(res =>{
      this.loadProducts();
    });
  }

  private loadProducts(): void {
    this.productService.getProducts(2).subscribe(products => {
      this.products = products;
    })
  }
}
