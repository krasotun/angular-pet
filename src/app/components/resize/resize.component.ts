import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss'],
})
export class ResizeComponent implements OnInit {
  left = 150;
  right = 20;
  containerWidth = 100;
  x = 0;
  offsetX = 0;

  constructor(public el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.containerWidth = this.el.nativeElement.getBoundingClientRect().width;
    const container = document.getElementById('container');

    if (container) {
      this.offsetX = container.offsetLeft;
    }

    const handleLeft = document.getElementById('handler-left');

    if (handleLeft) {
      handleLeft.style.left = this.left + this.offsetX + 'px';
    }

    const handleRight = document.getElementById('handler-right');

    if (handleRight) {
      handleRight.style.left =
        this.containerWidth - this.right + this.offsetX + 'px';
    }
  }

  ngDoCheck() {}

  onResizeLeftColumn(e: CdkDragMove) {
    this.x = (e.event as MouseEvent).pageX - this.offsetX;

    const next = this.x;

    const isOverRightColumnSize = next > this.containerWidth - this.right;
    if (isOverRightColumnSize) {
      return;
    }

    this.left = next;
  }
}
