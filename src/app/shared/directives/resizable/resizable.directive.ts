import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appResizable]',
})
export class ResizableDirective {
  @HostBinding('style.width')
  private _width?: string;

  constructor(private readonly _el: ElementRef) {}
}
