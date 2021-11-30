import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number = 45

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre():void {
        // * nota: evitar el two way data binding, es mala practica
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        console.log('hey...');
        this.edad = 30;
    }
}