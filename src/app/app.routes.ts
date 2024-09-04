import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';


export const routes: Routes = [
    {path:'', component:ProductDashboardComponent},
    {path:'product-list-display', component:ProductListComponent},
    {path:'product-details/:id', component:ProductDetailsComponent},
    {path:'cart', component:CartComponent}

];
