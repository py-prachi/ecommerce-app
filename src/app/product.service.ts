import { Injectable } from '@angular/core';
import { Product } from './model/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
 products: Product[] = [
    { id: 1, name: 'Product1', description: 'Description 1', price: 10, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+1' },
    { id: 2, name: 'Product2', description: 'Description 2', price: 20, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Product+2' },
    { id: 3, name: 'Product3', description: 'Description 3', price: 10, imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Product+3' },
    { id: 4, name: 'Product4', description: 'Description 4', price: 20, imageUrl: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Product+4' },
    { id: 5, name: 'Product5', description: 'Description 5', price: 10, imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Product+5' },
    { id: 6, name: 'Product6', description: 'Description 6', price: 15, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+6' },
    { id: 7, name: 'Product7', description: 'Description 7', price: 25, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Product+7' },
    { id: 8, name: 'Product8', description: 'Description 8', price: 30, imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Product+8' },
    { id: 9, name: 'Product9', description: 'Description 9', price: 10, imageUrl: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Product+9' },
    { id: 10, name: 'Product10', description: 'Description 10', price: 20, imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Product+10' },
    { id: 11, name: 'Product11', description: 'Description 11', price: 15, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+11' },
    { id: 12, name: 'Product12', description: 'Description 12', price: 25, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Product+12' },
    { id: 13, name: 'Product13', description: 'Description 13', price: 30, imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Product+13' },
    { id: 14, name: 'Product14', description: 'Description 14', price: 10, imageUrl: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Product+14' },
    { id: 15, name: 'Product15', description: 'Description 15', price: 20, imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Product+15' },
    { id: 16, name: 'Product16', description: 'Description 16', price: 10, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+16' },
    { id: 17, name: 'Product17', description: 'Description 17', price: 15, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Product+17' },
    { id: 18, name: 'Product18', description: 'Description 18', price: 25, imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Product+18' },
    { id: 19, name: 'Product19', description: 'Description 19', price: 30, imageUrl: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Product+19' },
    { id: 20, name: 'Product20', description: 'Description 20', price: 10, imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Product+20' },
    { id: 21, name: 'Product21', description: 'Description 21', price: 15, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+21' },
    { id: 22, name: 'Product22', description: 'Description 22', price: 25, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Product+22' },
    { id: 23, name: 'Product23', description: 'Description 23', price: 30, imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Product+23' },
    { id: 24, name: 'Product24', description: 'Description 24', price: 10, imageUrl: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Product+24' },
    { id: 25, name: 'Product25', description: 'Description 25', price: 20, imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Product+25' }
];


    getProducts():Product[]{
      return this.products;
    }

    getProductById(productId:number):Product | undefined{
      return this.products.find(product => product.id === productId)
    }


  constructor() { }
}
