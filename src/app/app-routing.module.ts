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
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AngularFireAuthGuard, loggedIn, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,canActivate: [AngularFireAuthGuard]
  },
  { 
    path: '', redirectTo: '/signup', pathMatch: 'full' },
  {
    path:'category',component:CategoryComponent ,canActivate: [AngularFireAuthGuard]
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'about',component:AboutComponent,canActivate: [AngularFireAuthGuard]
  },
  {
    path:'contact',component:ContactusComponent,canActivate: [AngularFireAuthGuard]
  },
  {
    path:'single',component:SinglepageComponent
  },
  {
    path:'accessory',component:AccessoriesComponent,canActivate: [AngularFireAuthGuard]
  },
  {
    path:'product',component:ProductsComponent
  },
  {
    path:'cart',component:CartComponent,canActivate: [AngularFireAuthGuard]
  },
 {
  path:'cart2',component:Cart2Component,canActivate: [AngularFireAuthGuard]
 },
 {
  path:'order',component:OrderformComponent
 },
 {
  path:'forgotpassword',component:ForgotPasswordComponent
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
