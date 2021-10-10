import { Component } from '@angular/core';
import { Curva } from './agrega-curva/curva';
import { Notes } from './agrega-curva/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprende-circuitos';
  curva: Curva[] = [];
  notes: Notes[] = [];

  addCurva(newItem:Curva[]) {
    this.curva = newItem;
  }
  addNote(newItem:Notes[]) {
    this.notes = newItem;
  }
}
