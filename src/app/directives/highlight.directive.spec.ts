import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let directive : HighlightDirective;
  let mockElementRef: ElementRef;
  let mockRenderer : Renderer2;

  beforeEach(()=>{
    mockElementRef = {
      nativeElement : document.createElement('div')
    } as ElementRef
    mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle'])
    directive = new HighlightDirective(mockElementRef,mockRenderer)
  })

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
