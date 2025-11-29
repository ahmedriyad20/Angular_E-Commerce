import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowMoreInfo]',
  host: {'(mouseover)': 'onmouserover()', '(mouseout)': 'onmouseout()'}
})
export class ShowMoreInfo {

  constructor(private el: ElementRef) {

   }

  onmouserover()
  {
    this.el.nativeElement.style.display = 'block'
  }

  onmouseout()
  {
    this.el.nativeElement.style.display = 'none';
  }
}
