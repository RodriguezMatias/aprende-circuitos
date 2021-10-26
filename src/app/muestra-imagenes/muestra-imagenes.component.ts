import { Component, ElementRef, Input, OnInit } from '@angular/core';
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
  onDrag=false;

  constructor(private elRef: ElementRef) {
    this.backcolor="red";
  }

  click()
  {
    console.log("click")
  }

  ngOnInit(): void {
    this.image = "default.jpg";
  }
  moveData() {
    throw new Error('Method not implemented.');
  }

   drop(el:any,d:Data) {
    let x = 0;
    let y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
   }

  movementY(y:number){
   // console.log("y",y)
    return y+'px';
  }
  movementX(x:number){
   // console.log("xxx",x)
    return x+'px';
  }
  onDragEnded(event:any,d:Data) {
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.drop(element,d);
    //console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));
    d.x = (boundingClientRect.x - parentPosition.left);
    d.y = (boundingClientRect.y - parentPosition.top);
  }

}
