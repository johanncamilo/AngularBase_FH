import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h3>base: {{ base }}</h3>
        <button (click)="incremento(-base)">-{{ base }}</button>
        <span>{{ numero }}</span>
        <button (click)="incremento(+base)">+{{ base }}</button>
    `,
})
export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    incremento(valor: number) {
        this.numero += valor
    }
}