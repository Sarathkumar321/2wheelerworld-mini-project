import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule}from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { SignupComponent } from './pages/signup/signup.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

import { ServerComponent } from './server/server.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ProductsComponent } from './pages/products/products.component';
import { FooterComponent } from './units/footer/footer.component';
import { CartComponent } from './pages/cart/cart.component';
import { Cart2Component } from './pages/cart2/cart2.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { OrderformComponent } from './pages/orderform/orderform.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoryComponent,
    SignupComponent,

    AboutComponent,
     ContactusComponent,
     SinglepageComponent,
   
     ServerComponent,
         AccessoriesComponent,
         ProductsComponent,
         FooterComponent,
         CartComponent,
         Cart2Component,
         OrderformComponent,
         ForgotPasswordComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
