/** @primero importaciones propias de angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** @segundo importaciones de terceros */
import { MainPageComponent } from './main-page/main-page.component';


/** @tercero importaciones propias */

@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
