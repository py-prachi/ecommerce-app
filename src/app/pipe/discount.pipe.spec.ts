import { DiscountPipe } from './discount.pipe';

describe('DiscountPipe', () => {
  let pipe: DiscountPipe;
  beforeEach(() =>{
    pipe = new DiscountPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the price with no discount if no discount is provided',() =>{
    const price = 100;
    const discount = 0;
    const result = pipe.transform(price,discount);
    expect(result).toBe('100.00');
  })

  it('should return the price with discount if discount is provided',()=>{
    const price = 100;
    const discount = 20;
    const result = pipe.transform(price,discount)
    expect(result).toBe('80.00 (Discounted from 100.00)')
  })
});
