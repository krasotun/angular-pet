import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeComponent } from './resize.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableModule } from 'src/app/shared/directives/resizable/resizable.module';

@NgModule({
  declarations: [ResizeComponent],
  imports: [CommonModule, DragDropModule, ResizableModule],
  exports: [ResizeComponent],
})
export class ResizeModule {}
