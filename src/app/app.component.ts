import { Component } from '@angular/core';
import { MapData } from './dto/MapData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprende-circuitos';
  mapData: MapData[] = [];

  addMapData(newItem:any) {
    console.log("addMapData",this.mapData)
    this.mapData = newItem;
  }
}
