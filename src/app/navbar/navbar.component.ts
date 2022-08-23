import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public hotBrands: Array<Brand>;

  constructor(
    private router: Router,
    private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getHotBrands().subscribe(res => {
      this.hotBrands = res;
    });
  }

  public onClick(id: number) {
    this.router.navigate(['brands', id]);
  }
}
