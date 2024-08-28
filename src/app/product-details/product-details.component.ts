import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../model/productInterface';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { addToCart } from '../store/cart.actions';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,MatCardModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product!: Product | undefined;
  constructor(private route: ActivatedRoute, private productService: ProductService, private store: Store) {}

  ngOnInit(): void {
   const productId = Number(this.route.snapshot.paramMap.get('id'));
      this.product = this.productService.getProductById(productId)
    }
    
    addToCart(product: Product){
      console.log('dispatched from product details:', product)
      this.store.dispatch(addToCart({product}))
    }
  }


