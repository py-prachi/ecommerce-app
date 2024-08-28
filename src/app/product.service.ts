import { Injectable } from '@angular/core';
import { Product } from './model/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product [] = [
    { id: 1, name: 'Product1', description: 'Description 1', price :10, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+1'},
    { id: 2, name: 'Product2', description: 'Description 2', price :20, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Product+2'},
    { id: 3, name: 'Product3', description: 'Description 3', price :10, imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Product+3'},
    { id: 4, name: 'Product4', description: 'Description 4', price :20, imageUrl: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Product+4'},
    { id: 5, name: 'Product5', description: 'Description 5', price :10, imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Product+5'},
    
  ]

    getProducts():Product[]{
      return this.products;
    }

    getProductById(productId:number):Product | undefined{
      return this.products.find(product => product.id === productId)
    }


  constructor() { }
}
