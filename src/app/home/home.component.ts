import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../models/brand';
import { Product } from '../models/Product';
import { BrandService } from '../services/brand.service';
import { ProductService } from '../services/product.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 4, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
  ];


  public hotProducts: Array<Product>;
  public droppingShortly: Array<Product>;
  public justAnnounced: Array<Product>;

  constructor(
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getHotProducts().subscribe(res => {
      this.hotProducts = res;
    });

    this.productService.getProductsDroppingShortly().subscribe(res => {
      this.droppingShortly = res;
    });

    this.productService.getJustAnnouncedProducts().subscribe(res => {
      this.justAnnounced = res;
    })
  }

  onClickProduct(id: string){
    this.router.navigate(['products', id]);
  }
}
