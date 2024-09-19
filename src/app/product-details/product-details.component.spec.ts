import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from '../product.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { provideMockStore } from '@ngrx/store/testing';
import { Product } from '../model/productInterface';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductService>;

  const mockProducts: Product[] = [
        { id: 1, name: 'Product1', description: 'Description 1', price: 150, discount: 0, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+1' },
        { id: 2, name: 'Product2', description: 'Description 2', price: 200, discount: 15, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Product+2' }
      ];

  beforeEach(async () => {
    const productServiceMock = jasmine.createSpyObj('ProductService', ['getProductById']);
    const activatedRouteMock = {
      snapshot: { paramMap: { get: jasmine.createSpy().and.returnValue('1') } }
    };

    productServiceMock.getProductById.and.callFake((productId: number)=>
            mockProducts.find(product => product.id === productId)
          )

    await TestBed.configureTestingModule({
      imports: [ProductDetailsComponent],
      providers: [
        provideMockStore(),
        { provide: ProductService, useValue: productServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    productServiceSpy = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise products from the service',() =>{
    expect(component.product).toBeDefined();
    expect(component.product?.id).toBe(1)
  })

  it('should return a product by ID from getProductById',() => {
    expect(productServiceSpy.getProductById).toHaveBeenCalledTimes(1);
  })
});


