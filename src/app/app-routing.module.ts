import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandReleasesComponent } from './brand-releases/brand-releases.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { EditorsPanelComponent } from './editors-panel/editors-panel.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateproductComponent, canActivate: [AuthGuardService] },
  { path: 'products', component: ListProductsComponent, canActivate: [AuthGuardService] },
  { path: 'products/:id', component: DetailsProductComponent, canActivate: [AuthGuardService] },
  { path: 'products/:id/edit', component: EditProductsComponent, canActivate: [AuthGuardService] },
  { path: 'brands/:id', component: BrandReleasesComponent, canActivate: [AuthGuardService] },
  { path: 'editors-panel', component: EditorsPanelComponent, canActivate: [AuthGuardService]}, //TODO: Add guard for specific Role
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
