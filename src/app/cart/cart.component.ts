import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/productInterface';
import { select, Store } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { selectCartItemCount, selectCartItems } from '../store/cart.selectors';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems$: Observable<Product[]>;
  cartItemCount$: Observable<number>;
  totalCartValue:number = 0;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartItemCount$ = this.store.select(selectCartItemCount);
  }

  ngOnInit(): void {
    this.cartItems$.subscribe((items) => {
      this.totalCartValue = items.reduce((total, item) => total + item.price, 0);
    });
  
  }
}