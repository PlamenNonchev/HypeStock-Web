import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { Brand, MonthReleases } from '../models/brand';
import { BrandService } from '../services/brand.service';

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
    this.brand.likes += 1;
    this.brandService.updateVotes(this.brand).subscribe(res => {
      this.brand = res;
    });
  }

  public onDislike(): void {
    this.brand.dislikes += 1;
    this.brandService.updateVotes(this.brand).subscribe(res => {
      this.brand = res;
    });
  }

  onClickProduct(id: string){
    this.router.navigate(['products', id]);
  }
}
