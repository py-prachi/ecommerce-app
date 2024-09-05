import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(price: number,discount?:number): string {
    if(!discount || discount<= 0) return price.toFixed(2); // No discount
    const discountedPrice = price - (price * (discount/100))
    return `${discountedPrice.toFixed(2)} (Discounted from ${price.toFixed(2)})`
  }

}
