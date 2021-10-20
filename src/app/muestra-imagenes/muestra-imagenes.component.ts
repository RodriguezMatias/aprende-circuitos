import { Component, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';
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

  backcolor:string;

  constructor(private elRef: ElementRef) {
    this.backcolor="red";
  }

  ngOnInit(): void {
    this.image = "default.jpg";
  }

  drop(ev:any,d:Data): void {
     d.x = ev.dropPoint.x;
     d.y = ev.dropPoint.y;
  }

  movementY(y:number){
    return y.toString()+'px';
  }
   movementX(x:number){
     return 'calc(-25vw + '+x.toString()+'px)';
   }

}
