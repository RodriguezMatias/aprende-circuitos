import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Curva } from './curva';

@Component({
  selector: 'app-agrega-curva',
  templateUrl: './agrega-curva.component.html',
  styleUrls: ['./agrega-curva.component.css'],
})
export class AgregaCurvaComponent implements OnInit {

  @Output() curvaOutput = new EventEmitter<Curva[]>();

  @Output() curva: Curva[] = [
    { numero: 1, cambio: '5', descripcion: 'Curva 1', x: 1.5, y: 1.5 },
  ];

  curvaNueva:Curva =  { numero: 0, cambio: '', descripcion: '', x: -1, y: -1 };
  coordX = -1;
  coordY = -1;
  editModal =false;


  constructor() {
  }

  ngOnInit(): void {
    let self = this;
    document.body.addEventListener('click', function (e) {
      //console.log('cursor-location: ' + e.clientX + ',' + e.clientY);
      self.coordX = e.clientX.valueOf();
      self.coordY = e.clientY.valueOf();
    });
    this.curvaOutput.emit(this.curva);
  }

  agregar(){
    //console.log("emitimos",this.curvaNueva)
    this.curvaOutput.emit(this.curva);
    this.curva.push(this.curvaNueva);
    this.curvaNueva = { numero: 0, cambio: '', descripcion: '', x: -1, y: -1 };
  }

  eliminar(c:Curva) {
    const index: number = this.curva.indexOf(c);
    if (index !== -1) {
        this.curva.splice(index, 1);
    }
    this.curvaOutput.emit(this.curva);
}
  editar(c:Curva){
    this.editModal=true;
  }
}
