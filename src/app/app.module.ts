import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateproductComponent} from './createproduct/createproduct.component';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule} from '@angular/material/grid-list'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { HomeComponent } from './home/home.component';
import { BrandReleasesComponent } from './brand-releases/brand-releases.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SwiperModule } from "swiper/angular";
import { NgChartsModule } from 'ng2-charts';
import { TabMenuModule} from 'primeng/tabmenu'
import { DropdownModule } from 'primeng/dropdown';
import { FooterComponent } from './footer/footer.component';
import { EditorsPanelComponent } from './editors-panel/editors-panel.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditorsPicksComponent } from './editors-picks/editors-picks.component';
import { UserLikesComponent } from './user-likes/user-likes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateproductComponent,
    ListProductsComponent,
    DetailsProductComponent,
    EditProductsComponent,
    HomeComponent,
    BrandReleasesComponent,
    NavbarComponent,
    FooterComponent,
    EditorsPanelComponent,
    DeleteProductComponent,
    EditorsPicksComponent,
    UserLikesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    SwiperModule,
    NgChartsModule,
    TabMenuModule,
    DropdownModule,
  ],
  providers: [
    AuthService,
    ProductService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
