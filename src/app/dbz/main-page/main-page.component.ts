import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    console.log('Big Bang Attack!');
  }
  agregarTradicional(event: any) {
    event.preventDefault();
    console.log('Kame hame ha!');
  }

}
