import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appGrey]'
})
export class GreyDirective {

  constructor(
	private el: ElementRef,
	private renderer: Renderer) {
		renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'grey');
	}

}
