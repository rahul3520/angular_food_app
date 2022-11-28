import { Component, NgModule } from '@angular/core';
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
import { PizzaFoodComponent } from './pizza-food/pizza-food.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


const myRoute:Routes=[
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"indianfood",
    component:IndianFoodComponent
  },
  {
    path:"chinafood",
    component:ChinaFoodComponent
  },
  {
    path:"desserts",
    component:DessertsFoodComponent
  },
  {
    path:"drinks",
    component:DrinksWaterComponent
  },
    
  {
    path:"grocery",
    component:GroceryFoodComponent
  },
 
  {
    path:"pizza",
    component:PizzaFoodComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ChinaFoodComponent,
    DessertsFoodComponent,
    DrinksWaterComponent,
    GroceryFoodComponent,
    IndianFoodComponent,
    PizzaFoodComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
