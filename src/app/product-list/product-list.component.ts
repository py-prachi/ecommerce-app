import { Component, OnInit } from '@angular/core';
import { Product } from '../model/productInterface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../store/cart.actions';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})



export class ProductListComponent implements OnInit {

  products: Product [] = [];

  constructor(private productService: ProductService, private store:Store){}
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    
  }
  addToCart(product:Product){
    console.log('added from product list:', product)
    this.store.dispatch(addToCart({product}))
  }

}
