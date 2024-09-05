import { Component, OnInit } from '@angular/core';
import { Product } from '../model/productInterface';
import { ProductService } from '../product.service';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directives/highlight.directive';
import { DiscountPipe } from "../pipe/discount.pipe";


@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule, HighlightDirective, DiscountPipe],
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.css'
})
export class ProductDashboardComponent implements OnInit{
  
  products: Product[]=[];
  displayedProducts: Product [] = [];
  filteredProducts: Product [] = [];
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;
  searchQuery = '';
  maxPrice: number | null = null;
  minPrice: number | null = null;

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.filteredProducts = [...this.products]
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize)
    this.updateDisplayedProducts();
  }

  onFilter() {
   this.applyFilter();
    
    }

  onSearch(): void {
    this.applyFilter();
    }
  
    applyFilter(): void {

    this.filteredProducts = [...this.products]

    const query = this.searchQuery.trim().toLowerCase();
    
    if(query){
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(query) 
      );
    
    }
    if(this.minPrice && this.maxPrice){
    this.filteredProducts = this.products.filter(product =>
      (this.minPrice === null || product.price >= this.minPrice) && 
      (this.maxPrice === null || product.price <= this.maxPrice)
      )
    } 


    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize)
    this.updateDisplayedProducts();

    }
  
  onDelete(product:Product){
    this.products = this.products.filter(p=>p.id !== product.id)
    this.applyFilter();

  }

  updateDisplayedProducts() :void{
    const startIndex = (this.currentPage - 1) * this.pageSize
    const endIndex = startIndex + this.pageSize;
    this.displayedProducts = this.filteredProducts.slice(startIndex,endIndex)
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




