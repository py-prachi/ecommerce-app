import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(productId:number){
    console.log('Simulating Add to Cart API call for product:', productId);
    return of({ success: true}).pipe(delay(1000));
  }
}
