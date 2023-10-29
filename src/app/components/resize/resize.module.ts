import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeComponent } from './resize.component';
import { ResizableModule } from 'src/app/shared/directives/resizable/resizable.module';

@NgModule({
  declarations: [ResizeComponent],
  imports: [CommonModule, ResizableModule],
  exports: [ResizeComponent],
})
export class ResizeModule {}
