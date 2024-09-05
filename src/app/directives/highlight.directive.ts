import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
// export class HighlightDirective implements OnChanges {
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
 
  @Input() appHighlight: string | null = '';

  //HostListners not required for conditional highlight
@HostListener('mouseenter') onMouseEnter(){
  this.highlight(this.appHighlight || 'lightblue')
}

@HostListener('mouseleave') onMouseLeave(){
  this.highlight(null)
}


//for on condition highlight- no need for hostlistner
// ngOnChanges(changes: SimpleChanges): void {
//   if (changes['appHighlight']) {
//     this.highlight(this.appHighlight)
//   }
// }

private highlight(color:string | null){
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color)

}
}
