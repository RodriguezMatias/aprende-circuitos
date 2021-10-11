import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Data } from '../dto/data';
import { MapData } from '../dto/MapData';



@Component({
  selector: 'app-data-adder',
  templateUrl: './data-adder.component.html',
  styleUrls: ['./data-adder.component.css'],
})
export class DataAdderComponent implements OnInit {

  @Output() mapDataOutput = new EventEmitter<MapData[]>();

  data: Data = {};
  mapData:MapData[] = [];


  note:Data = {number: '', gear: '', description: ''};
  curvaNueva:Data =  {number: '', gear: '', description: ''};
  coordX:number;
  coordY:number;;
  editModal = false;


  constructor() {
    this.coordX = 0;
    this.coordY = 0;
  }

  ngOnInit(): void {
    // let self = this;
    // document.body.addEventListener('click', function (e) {
    //   //console.log('cursor-location: ' + e.clientX + ',' + e.clientY);
    //   self.coordX = e.clientX.valueOf();
    //   self.coordY = e.clientY.valueOf();
    // });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.mapData, event.previousIndex, event.currentIndex);
  }

  //adds turn data
  addTurn(){
    //console.log("emitimos",this.mapData);
    this.mapDataOutput.emit(this.mapData);
    const data : MapData = {data: this.curvaNueva,x:this.coordX,y:this.coordY};
    this.mapData.push(data);
    this.curvaNueva = { number: '', gear: '', description: ''};
  }

  addNote(){
    const data : MapData = {data: this.note,x:this.coordX,y:this.coordY};
    this.mapData.push(data);
    this.mapDataOutput.emit(this.mapData);
  }

  acceptEdit(){
    this.editModal = false;
  }

  delete(d:MapData) {
    const index: number = this.mapData.indexOf(d);
    if (index !== -1) {
        this.mapData.splice(index, 1);
    }
    this.mapDataOutput.emit(this.mapData);
}
  editar(c:Data){
    this.editModal=true;
  }
}
