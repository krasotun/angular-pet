import { DOCUMENT } from '@angular/common';
import {
  ContentChild,
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appResizable]',
})
export class ResizableDirective implements OnInit {
  @ContentChild('resizeHandler', { static: true })
  private _resizeHandler?: ElementRef;

  @HostBinding('style.width')
  private _width?: string;

  constructor(
    @Inject(DOCUMENT)
    private readonly _document: Document,
    private readonly _el: ElementRef
  ) {}

  ngOnInit(): void {
    if (this._resizeHandler) {
      this._resizeHandler.nativeElement.style.cursor = 'col-resize';
    }
  }
}
