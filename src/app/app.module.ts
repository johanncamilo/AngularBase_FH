import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


// * MÓDULOS
import { HeroesModule } from './heroes/heroes.module';
// TODO: Crear un módulo llamado ContadorModule, declaraciones y exportaciones
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
