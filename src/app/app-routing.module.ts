import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"login-register", component:LoginRegisterComponent },
  {path:"allbooks", component:AllbooksComponent},
  {path:"cart-items", component:CartItemsComponent},
  {path:"wishlist", component:WishlistComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
