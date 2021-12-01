import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 8000
    },
    {
      nombre: 'Vegeta',
      poder: 8000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: 'Yamcha',
    poder: 50
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  agregarNuevoPersonaje(arg: Personaje) {
    this.personajes.push(arg)
  }
  
  agregarTradicional(event: any) {
    event.preventDefault();
    console.log('Kame hame ha!');
  }

}
