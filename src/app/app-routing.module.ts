import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './pages/about/about.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { Cart2Component } from './pages/cart2/cart2.component';
import { OrderformComponent } from './pages/orderform/orderform.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
    },
  {
    path:'category',component:CategoryComponent 
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactusComponent
  },
  {
    path:'single',component:SinglepageComponent
  },
  {
    path:'accessory',component:AccessoriesComponent
  },
  {
    path:'product',component:ProductsComponent
  },
  {
    path:'cart',component:CartComponent
  },
 {
  path:'cart2',component:Cart2Component
 },
 {
  path:'order',component:OrderformComponent
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
