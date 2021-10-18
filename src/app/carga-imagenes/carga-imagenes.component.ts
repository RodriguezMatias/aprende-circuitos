import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carga-imagenes',
  templateUrl: './carga-imagenes.component.html',
  styleUrls: ['./carga-imagenes.component.css'],
})
export class CargaImagenesComponent implements OnInit {
  images:string[] = ["Spa_Black.png","Spa_White.png"];
  constructor() {}

  @Output() imagesOutput = new EventEmitter<string>();


  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }
  selectBackground(image:string){
    this.imagesOutput.emit(image);
  }
}
