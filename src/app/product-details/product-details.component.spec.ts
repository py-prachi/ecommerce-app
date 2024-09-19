import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from '../product.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Product } from '../model/productInterface';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';


describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let productService: jasmine.SpyObj<ProductService>


  const mockProducts: Product[] = [
    { id: 1, name: 'Product1', description: 'Description 1', price: 150, discount: 0, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+1' },
    { id: 2, name: 'Product2', description: 'Description 2', price: 200, discount: 15, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Product+2' }
  ];
  
  beforeEach(async () => {
  const productServiceSpy = jasmine.createSpyObj('ProductService', ['getProducts', 'getProductById'])

    await TestBed.configureTestingModule({
      imports: [ProductDetailsComponent],
      providers:[
        provideMockStore(),
        {provide:ProductService,useValue: productServiceSpy},
        provideRouter([])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    productService = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>
    productService.getProducts.and.returnValue(mockProducts)

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise products from the service',() =>{
    expect(component.product).toBeDefined;
    expect(component.product).toBeGreaterThan(1)
  })

  it('should call getProducts once on initialization', () => {
    expect(productService.getProducts).toHaveBeenCalledTimes(1);
    // expect(component.product).toEqual(mockProducts);
  });

  it('should return a product by ID from getProductById', () => {
    const productId = 1;
    const expectedProduct = mockProducts.find(p => p.id === productId);
  
    productService.getProductById.and.returnValue(expectedProduct);
  
    const result = productService.getProductById(productId);
    
    expect(result).toEqual(expectedProduct);  // This expects a single Product object
  });
});
