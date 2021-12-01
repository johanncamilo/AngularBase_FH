import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  // todo: @Iput() personajes, @Input() nuevo
  // @Input() personajes: Array<Personaje> = []
  @Input() nuevo!: Personaje

  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    // validación
    if(this.nuevo.nombre.trim().length === 0){ return }
    console.log(this.nuevo);

    this.onNewCharacter.emit(this.nuevo)
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }

}
