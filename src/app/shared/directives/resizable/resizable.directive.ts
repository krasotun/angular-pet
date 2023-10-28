import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResizable]',
})
export class ResizableDirective {
  constructor(private readonly _el: ElementRef) {
    console.log(this._el);
  }
}
