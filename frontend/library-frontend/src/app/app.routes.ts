import { Routes } from '@angular/router';
import { NewArrivalsComponent } from './pages/new-arrivals/new-arrivals.component';
import { BoxSetComponent } from './pages/box-set/box-set.component';
import { FeaturedAuthorsComponent } from './pages/featured-authors/featured-authors.component';
import { FictionBooksComponent } from './pages/fiction-books/fiction-books.component';
import { BestSellerComponent } from './pages/best-seller/best-seller.component';
import { TodaysDealComponent } from './pages/todays-deal/todays-deal.component';
import { AwardWinnersComponent } from './pages/award-winners/award-winners.component';
import { RequestBookComponent } from './pages/request-book/request-book.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'arrival', component: NewArrivalsComponent },
  { path: 'box-set', component: BoxSetComponent },
  { path: 'feature-author', component: FeaturedAuthorsComponent },
  { path: 'fiction-books', component: FictionBooksComponent },
  { path: 'bestseller', component: BestSellerComponent },
  { path: 'todaysdeal', component: TodaysDealComponent },
  { path: 'awardwinner', component: AwardWinnersComponent },
  { path: 'requestbook', component: RequestBookComponent }
];
