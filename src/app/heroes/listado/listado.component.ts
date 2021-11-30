import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman en 4','Ironmandingo','El impotente Hulk','Torgasmo','Capitanga'];
  heroeBorrado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(){
    // * importante! poner || '' por el retorno undefined de shift()
    this.heroeBorrado = this.heroes.shift() || ''
    console.log(this.heroeBorrado);
  }

}
