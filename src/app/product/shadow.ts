import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  host: {'(mouseover)': 'onMouseEnter()', '(mouseout)': 'onMouseLeave()'}
})
export class Shadow {

  constructor(private el: ElementRef) { }

  // Mouse enters the host element: add bootstrap shadow classes
  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.classList.add('shadow', 'shadow-lg');
    // const native = this.el.nativeElement as HTMLElement;
    // native.classList.add('shadow', 'shadow-lg');
  }

  // Mouse leaves the host element: remove the shadow classes
  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.classList.remove('shadow', 'shadow-lg');
    // const native = this.el.nativeElement as HTMLElement;
    // native.classList.remove('shadow', 'shadow-lg');
  }
}
