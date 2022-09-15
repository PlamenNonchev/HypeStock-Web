import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../models/brand';
import { EditorsPicks } from '../models/editorsPicks';
import { Product } from '../models/Product';
import { AuthService } from '../services/auth.service';
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
  public hotProducts: Array<Product>;
  public droppingShortly: Array<Product>;
  public justAnnounced: Array<Product>;
  public editorsPicks: EditorsPicks;

  constructor(
    private router: Router,
    private productService: ProductService,
    private authService: AuthService) { }

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
    this.productService.getEditorsPicks().subscribe(res => {
      this.editorsPicks = res;
    })
  }

  onClickProduct(id){
    this.router.navigate(['products', id]);
  }
}
