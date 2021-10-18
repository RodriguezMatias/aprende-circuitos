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

}
