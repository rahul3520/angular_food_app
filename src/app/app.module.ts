import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChinaFoodComponent } from './china-food/china-food.component';
import { DessertsFoodComponent } from './desserts-food/desserts-food.component';
import { DrinksWaterComponent } from './drinks-water/drinks-water.component';
import { GroceryFoodComponent } from './grocery-food/grocery-food.component';
import { IndianFoodComponent } from './indian-food/indian-food.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ChinaFoodComponent,
    DessertsFoodComponent,
    DrinksWaterComponent,
    GroceryFoodComponent,
    IndianFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
