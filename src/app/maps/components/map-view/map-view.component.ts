import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: `
  
    .map-container{
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 100vw;
    }
  `
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('map') divMap: ElementRef

  constructor(
    private placesSvc: PlacesService,
  ) { }

  ngAfterViewInit(): void {
    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesSvc.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Estoy aqui</h6>
        <span>Estoy en este lugar del mundo</span>
      `)

    new Marker({
      color: 'red'
    })
      .setLngLat(this.placesSvc.userLocation)
      .setPopup(popup)
      .addTo(map)
  }

}
