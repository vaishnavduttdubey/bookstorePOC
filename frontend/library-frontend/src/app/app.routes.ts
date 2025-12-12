import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NewArrivalsComponent } from './pages/new-arrivals/new-arrivals.component';
import { BoxSetComponent } from './pages/box-set/box-set.component';
import { FictionBooksComponent } from './pages/fiction-books/fiction-books.component';
import { BestSellerComponent } from './pages/best-seller/best-seller.component';
import { TodaysDealComponent } from './pages/todays-deal/todays-deal.component';
import { AwardWinnersComponent } from './pages/award-winners/award-winners.component';
import { RequestBookComponent } from './pages/request-book/request-book.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { AddTocartComponent } from './pages/add-tocart/add-tocart.component';
import { BuyComponent } from './buy/buy.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';




export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'arrival', component: NewArrivalsComponent },
  { path: 'box-set', component: BoxSetComponent },
  { path: 'category/:category', component: CategoriesComponent },
  { path: 'fiction-books', component: FictionBooksComponent },
  { path: 'bestseller', component: BestSellerComponent },
  { path: 'todaysdeal', component: TodaysDealComponent },
  { path: 'awardwinner', component: AwardWinnersComponent },
  { path: 'requestbook', component: RequestBookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path:'addTocart',component:AddTocartComponent},
  { path:'buy', component:BuyComponent},
  { path: 'search',component:SearchResultComponent }

];
