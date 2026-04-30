import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true,
})
export class Autofocus implements OnInit {
  elementRef = inject(ElementRef);
  ngOnInit() {
    setTimeout(() => {
      this.elementRef.nativeElement.focus();
    }, 200);
  }
}
