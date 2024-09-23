import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Composants/header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './Composants/footer/footer.component';
import { ListCategoriesComponent } from './Composants/list-categories/list-categories.component';
import { HomeComponent } from './Composants/home/home.component';
import { MydirectiveDirective } from './mydirective.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListCategoriesComponent,
    HomeComponent,
    MydirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }import { FormsModule } from '@angular/forms';

