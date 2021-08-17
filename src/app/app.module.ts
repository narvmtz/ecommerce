import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';

import { CardDetailsComponent } from './card-details/card-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardDetailedComponent } from './card-detailed/card-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailsComponent,
    FilterPipe,
    HomeComponent,
    CardsComponent,
    TodoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardDetailedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
