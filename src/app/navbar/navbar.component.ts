import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Brand } from '../models/brand';
import { AuthService } from '../services/auth.service';
import { BrandService } from '../services/brand.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // brand type in array
  public hotBrands: Array<any>;
  public user: string;
  public isEditor: boolean;

  constructor(
    private router: Router,
    private brandService: BrandService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.brandService.getHotBrands().subscribe(res => {
      this.hotBrands = res;
    });
    
    const token = this.authService.getToken();
    const tokenInfo: any = jwt_decode(token);
    if (tokenInfo.unique_name){
      this.user = tokenInfo.unique_name;
    }
    if (tokenInfo.role) {
      if (tokenInfo.role === "Editor") {
        this.isEditor = true;
      }
    }
  }

  public onClickLogout() {
    this.authService.logout();
    this.user = undefined;
  }

  public onClick(id: number) {
    this.router.navigate(['brands', id]);
  }
}
