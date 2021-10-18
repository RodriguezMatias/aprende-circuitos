import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { MapData } from '../dto/MapData';

@Component({
  selector: 'app-muestra-imagenes',
  templateUrl: './muestra-imagenes.component.html',
  styleUrls: ['./muestra-imagenes.component.css']
})
export class MuestraImagenesComponent implements OnInit {

  @Input() mapData: MapData[] = [];
  debug=false;
  @Input() image!:string;

  constructor() {
  }

  ngOnInit(): void {
    this.image = "default.jpg"
  }

  drop(ev:any,d:Data): void {
    //console.log('element dropped');
    //console.log(ev);
    d.x = ev.dropPoint.x;
    d.y = ev.dropPoint.y;
  }

}
