import { Component, OnInit } from '@angular/core';
import { Product } from '../model/productInterface';
import { ProductService } from '../product.service';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
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

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.filteredProducts = [...this.products]
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize)
    this.updateDisplayedProducts();
  }

  onSearch(): void {
    const query = this.searchQuery.trim().toLowerCase();
    console.log("triggering search...",query)
    if(query){
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(query) 
      );
     console.log("The list: ",this.filteredProducts) 
    
    }else{
      this.filteredProducts = [...this.products]
    }
    
    
  
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize)
    this.updateDisplayedProducts();
    }
  
  onDelete(product:Product){
    this.products = this.products.filter(p=>p.id !== product.id)
    this.onSearch();

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




