import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonHover]'
})
export class ButtonHoverDirective {

  constructor(
    private el: ElementRef<any>
  ) { }

  @HostListener('mouseover') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = "gray";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = "lightgray";
  }

}
