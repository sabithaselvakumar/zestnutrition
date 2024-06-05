import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';
import { CartService } from './cart.service';
import { ProductComponent } from './product/product.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CartpageComponent } from './cartpage/cartpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ServiceComponent,
    ProductComponent,
    ProductdetailsComponent,
    CartNotificationComponent,
    CartpageComponent,
  
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,

  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
