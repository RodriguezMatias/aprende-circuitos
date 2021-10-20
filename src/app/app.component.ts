import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapData } from './dto/MapData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aprende-circuitos';
  mapData: MapData[] = [];
  image!:string;
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';

  constructor(private overlay: OverlayContainer) { }
ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
}
  addMapData(newItem:any) {
    console.log("addMapData",this.mapData)
    this.mapData = newItem;
  }
  addImage(newItem:any) {
    console.log("addMapData",this.mapData)
    this.image = newItem;
  }

  loadPreset(preset:number){
    this.image="Spa_White.png";
    this.mapData = [{"data":{"number":"1 ","gear":"V","description":"asd"},"x":672,"y":259},{"data":{"number":"","gear":"","description":"Ojo subida"},"x":1078,"y":164},{"data":{"number":"","gear":"","description":"Ojo"},"x":1016,"y":138}];
  }

}
