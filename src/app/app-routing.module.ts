import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategProductsComponent } from './Composants/categ-products/categ-products.component';
import { ListCategoriesComponent } from './Composants/list-categories/list-categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponent} from './products-category/products-category.component';
import { HomeComponent } from './Composants/home/home.component';

const routes: Routes = [
  {path : "",redirectTo:'home',pathMatch:"full"},
  {path : "home",component:HomeComponent},
  {path : "categProducts",component:CategProductsComponent},
  {path : "categories",component:ListCategoriesComponent},
  {path : "ProductsCategory/:x",component:ProductsCategoryComponent},
  {path : "**",component:NotfoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
