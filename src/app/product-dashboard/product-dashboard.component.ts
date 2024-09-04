import { Component, OnInit } from '@angular/core';
import { Product } from '../model/productInterface';
import { ProductService } from '../product.service';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.css'
})
export class ProductDashboardComponent implements OnInit{
  
  products: Product[]=[];
  displayedProducts: Product [] = [];
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.totalPages = Math.ceil(this.products.length / this.pageSize)
    this.updateDisplayedProducts();
  }
  
  onDelete(product:Product){
    this.products = this.products.filter(p=>p.id !== product.id)
    this.totalPages = Math.ceil(this.products.length / this.pageSize)
    this.updateDisplayedProducts();
    console.log('deleted from product list:', product)

  }

  updateDisplayedProducts() :void{
    const startIndex = (this.currentPage - 1) * this.pageSize
    const endIndex = startIndex + this.pageSize;
    this.displayedProducts = this.products.slice(startIndex,endIndex)
    }
  
    goToPage(page: number): void {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
      this.updateDisplayedProducts();
    }
  
    goToFirstPage(): void {
      this.goToPage(1);
    }
  
    goToPreviousPage(): void {
      this.goToPage(this.currentPage - 1);
    }
  
    goToNextPage(): void {
      this.goToPage(this.currentPage + 1);
    }
  
    goToLastPage(): void {
      this.goToPage(this.totalPages);
    }

  }




