import { Component, Input, OnInit } from '@angular/core';
import { Curva } from '../agrega-curva/curva';
import { Notes } from '../agrega-curva/note';

@Component({
  selector: 'app-muestra-imagenes',
  templateUrl: './muestra-imagenes.component.html',
  styleUrls: ['./muestra-imagenes.component.css']
})
export class MuestraImagenesComponent implements OnInit {

  @Input() curvas: Curva[] = [];
  @Input() notes: Notes[] = [];


  constructor() { }

  ngOnInit(): void {

  }

  drop(ev:any,c:Curva): void {
    //console.log('element dropped');
    //console.log(ev);
    c.x = ev.dropPoint.x;
    c.y = ev.dropPoint.y;
  }

  dropNote(ev:any,n:Notes): void {
    //console.log('element dropped');
    //console.log(ev);
    n.x = ev.dropPoint.x;
    n.y = ev.dropPoint.y;
  }

}
