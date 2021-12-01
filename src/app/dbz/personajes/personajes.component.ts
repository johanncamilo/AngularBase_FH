import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  /** @parametro data es un alias para la prop en el child */
  @Input('alias') personajes: Array<Personaje> = []

  constructor() { }

  ngOnInit(): void {
  }

}
