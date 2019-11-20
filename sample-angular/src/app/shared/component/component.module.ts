import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    TagComponent
  ]
})
export class ComponentModule { }
