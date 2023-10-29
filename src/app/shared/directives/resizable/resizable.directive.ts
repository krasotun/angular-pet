import { DOCUMENT } from '@angular/common';
import {
  ContentChild,
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  OnInit,
} from '@angular/core';

import { Observable, fromEvent, of } from 'rxjs';
import { switchMap, map, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appResizable]',
})
export class ResizableDirective implements OnInit {
  @ContentChild('resizeHandler', { static: true })
  private _resizeHandler?: ElementRef;

  private readonly _mouseUp$ = fromEvent(this._document, 'mouseup');
  private readonly _mouseMove$ = fromEvent(this._document, 'mousemove');

  constructor(
    @Inject(DOCUMENT)
    private readonly _document: Document,
    private readonly _el: ElementRef
  ) {}

  ngOnInit(): void {
    if (this._resizeHandler) {
      this._resizeHandler.nativeElement.style.cursor = 'col-resize';

      const dragStart$: Observable<MouseEvent> = fromEvent(
        this._resizeHandler.nativeElement,
        'mousedown'
      );

      const dragMove$ = dragStart$.pipe(
        switchMap((startEvent) =>
          this._mouseMove$.pipe(
            map((moveEvent) => {
              return {
                delta:
                  (moveEvent as MouseEvent).x - (startEvent as MouseEvent).x,
                widthIntoGrag: this._el.nativeElement.offsetWidth,
              };
            }),
            takeUntil(this._mouseUp$)
          )
        )
      );
      let currentWidth = this._el.nativeElement.offsetWidth;

      dragMove$.subscribe(({ delta, widthIntoGrag }) => {
        const newWidth = `${currentWidth + delta}px`;
        this._el.nativeElement.style.width = newWidth;
      });
    }
  }
}
