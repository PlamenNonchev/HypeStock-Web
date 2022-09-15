import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { Brand, MonthReleases } from '../models/brand';
import { AuthService } from '../services/auth.service';
import { BrandService } from '../services/brand.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-brand-releases',
  templateUrl: './brand-releases.component.html',
  styleUrls: ['./brand-releases.component.scss']
})
export class BrandReleasesComponent implements OnInit {
  public brand: Brand;

  constructor(
    private route: ActivatedRoute,
    private brandService: BrandService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.route.params.pipe(map(params => {
      const id = params['id'];
      return id;
    }), mergeMap(id => this.brandService.getBrand(id))).subscribe(res => {
      this.brand = res;
    })
  }

  public onLike(): void {
    if (!this.brand.hasUserDisliked && !this.brand.hasUserLiked){
      this.brand.likes += 1;
      this.brand.hasUserLiked = true;
      this.brandService.like(this.brand.id).subscribe(res => {
        console.log(res);
      });
    }
  }

  public onDislike(): void {
    if (!this.brand.hasUserLiked && !this.brand.hasUserDisliked){
      this.brand.dislikes += 1;
      this.brand.hasUserDisliked = true;
      this.brandService.dislike(this.brand.id).subscribe(res => {
        console.log(res);
      });
    }
  }

  onClickProduct(id: string){
    this.router.navigate(['products', id]);
  }

}
