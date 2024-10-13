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
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { CategProductsComponent } from './Composants/categ-products/categ-products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailscatComponent } from './Composants/detailscat/detailscat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListCategoriesComponent,
    HomeComponent,
    MydirectiveDirective,
    ContainsPipe,
    HighlightDirective,
    CategProductsComponent,
    NotfoundComponent,
    DetailscatComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
{}


