import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',redirectTo:'/header/category' , pathMatch: "full"},
  {path: 'about', component: AboutComponent, canActivate:[AuthGuard]},
  {path: 'contact', component: ContactComponent, canActivate:[AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'header', component: HeaderComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'category', component: CategoryComponent},
 {path: 'category/:catId', component:ProductComponent},
 {path:'subcategory/:catId',component:SubcategoryComponent},
 {path:'productdetails/:_id',component:ProductDetailsComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
