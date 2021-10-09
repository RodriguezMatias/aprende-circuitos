import { Component } from '@angular/core';
import { Curva } from './agrega-curva/curva';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprende-circuitos';
  curva: Curva[] = [];

  addCurva(newItem:Curva[]) {
    console.log("Recibimos",newItem);
    this.curva = newItem;
  }
}
