import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

/**
 * @notas
 * - los modulos agrupan componentes
 * - aquí se aplica la famosa modularización
 * - hay q importar y registrar todos los modulos en app.module.ts
 * - los componentes van en @declarations
 * - los components que seran usados globalmente van en @exports
 * - siempre los módulos van en @imports
 * - @CommonModule contiene las directivas (*ngIf, ngFor, etc)
 */

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}