import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation } from "swiper";
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  private id: string;
  public product: Product;

  public lineChartOptions: ChartConfiguration['options'];
  public lineChartData: ChartConfiguration['data'];


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {
    // this.route.params.subscribe(res => {
    //   this.id = res['id'];
    //   this.productService.getProduct(this.id).subscribe(product => {
    //     this.product = product;
    //   })
    // })
    Chart.register(Annotation);
    this.fetchData();
  }

  fetchData() {
    this.route.params.pipe(map(params => {
      const id = params['id'];
      return id
    }), mergeMap(id => this.productService.getProduct(id))).subscribe(res => {
      console.log(res);
      this.product = res;
      this.initializeChart();

    });
  }

  ngOnInit(): void {
  }

  onClickProduct(id: string) {
    this.router.navigate(['products', id]);
  }

  onClickEbayListing(url: string) {
    this.router.navigate([url]);
  }

  onClickMoreListings() {
    this.router.navigate([this.product.ebayUrl]);
  }


  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = DetailsProductComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }


  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = DetailsProductComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(`Label ${this.lineChartData.labels.length}`);

    this.chart?.update();
  }

  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    if (this.lineChartData.labels) {
      this.lineChartData.labels[2] = ['1st Line', '2nd Line'];
    }

    this.chart?.update();
  }

  private initializeChart(): void {
    const saleLabels = [];
    for (let i = 0; i < this.product.ebaySoldPrices.length; i++) {
      saleLabels.push(i + 1);
    }

    this.lineChartData = {
      datasets: [
        {
          data: this.product.ebaySoldPrices,
          label: 'Price in $',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
        },
      ],
      labels: saleLabels,
    };

    this.lineChartOptions = {
      responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Most recent eBay sales'
      }
    }
    };
  }

  public onLike(): void {
    if (!this.product.hasUserLiked && !this.product.hasUserDisliked) {
      this.product.likes += 1;
      this.product.hasUserLiked = true;
      this.productService.like(this.product.id).subscribe(res => {
        console.log(res)
      });
    }
  }

  public onDislike(): void {
    if (!this.product.hasUserLiked && !this.product.hasUserDisliked) {
      this.product.likes += 1;
      this.product.hasUserLiked = true;
      this.productService.dislike(this.product.id).subscribe(res => {
        console.log(res)
      });
    }
  }
}
