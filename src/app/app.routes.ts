import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    {path:'', component:ProductListComponent},
    {path:'product-details/:id', component:ProductDetailsComponent},
    {path:'cart', component:CartComponent}

];
