import { Injectable } from '@angular/core';
import {  Actions, createEffect } from '@ngrx/effects';
// import { addToCart, addToCartSuccess, addToCartFailure } from '../actions/cart.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { addToCart, addToCartFailure, addToCartSucess } from './cart.actions';
import { CartService } from '../cart.service';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToCart), // Listening for addToCart action
      mergeMap((action) =>
        this.cartService.addToCart(action.productId).pipe( // Simulate the API call
          map(() => addToCartSucess({ productId: action.productId })),
          catchError((error) => of(addToCartFailure({ error })))
        )
      )
    )
  );
}


function ofType(addToCart: any): any {
    throw new Error('Function not implemented.');
}

