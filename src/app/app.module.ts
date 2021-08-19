import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';

import { CardDetailsComponent } from './card-details/card-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CardsComponent } from './cards/cards.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardDetailedComponent } from './card-detailed/card-detailed.component';
import { LayoutComponent } from './components/layout/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailsComponent,
    FilterPipe,
    CardsComponent,
    TodoComponent,
    HeaderComponent,
    FooterComponent,
    CardDetailedComponent,
    LayoutComponent,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
