import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  /** @parametro data es un alias para la prop en el child */
  // @Input('alias') personajes: Array<Personaje> = []
  
  get personajes() {
    return this._dbzService.personajes;
  }
  
  constructor(private _dbzService: DbzService) { }
  
  ngOnInit(): void {
  }

}
