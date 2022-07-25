import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateproductComponent, canActivate: [AuthGuardService] },
  { path: 'products', component: ListProductsComponent, canActivate: [AuthGuardService] },
  { path: 'products/:id', component: DetailsProductComponent, canActivate: [AuthGuardService] },
  { path: 'products/:id/edit', component: EditProductsComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
