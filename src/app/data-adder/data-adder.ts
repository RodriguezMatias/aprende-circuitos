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

  fileToUpload: File | null = null;


  constructor() {
    this.coordX = 0;
    this.coordY = 0;
  }

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.mapData, event.previousIndex, event.currentIndex);
  }

  //adds turn data
  addTurn(){
    this.mapDataOutput.emit(this.mapData);
    const data : MapData = {data: this.curvaNueva,x:this.coordX,y:this.coordY};
    this.mapData.push(data);
    this.curvaNueva = { number: '', gear: '', description: ''};
  }

  addNote(){
    const data : MapData = {data: this.note,x:this.coordX,y:this.coordY};
    this.note = {number: '', gear: '', description: ''};
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
  edit(c:Data){
    this.editModal=true;
  }

  saveData(){
    this.saveText( JSON.stringify(this.mapData), "data.json" );
  }

  handleFileInput(files: FileList) {
    console.log("this.fileToUpload",this.fileToUpload)
  }

  saveText(text:string, filename:string){
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
  }
}
