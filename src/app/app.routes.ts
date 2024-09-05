import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';


export const routes: Routes = [
    {path:'', component:ProductDashboardComponent},
    {path:'product-list-display', component:ProductListComponent},
    {path:'product-details/:id', loadChildren:() => import('./product-details/product-details-routing.module').then(m => m.ProductDetailsRoutingModule)},
    {path:'cart', component:CartComponent}
];
