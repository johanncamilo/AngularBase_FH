import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    
  constructor() {}

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: 'Yamcha',
    poder: 50
  }
}

/**
 * @error
 * 'app-personajes' is not a known element:
 * 1. If 'app-personajes' is an Angular component, then verify that it is part of this module.
 * 2. If 'app-personajes' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.ngtsc(-998001)
 * main-page.componentOLD.ts(13, 7): Error occurs in the template of component MainPageComponent.
 */
