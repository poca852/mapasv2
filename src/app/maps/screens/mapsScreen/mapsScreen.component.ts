import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
   selector: 'maps-screen',
   templateUrl: './mapsScreen.component.html',
   styleUrls: ['./mapsScreen.component.css'],
})
export class MapsScreenComponent { 

   constructor(
      private placesSvc: PlacesService
   ){}

   get isUserLocationReady() {
      return this.placesSvc.isUserLocationReady;
   }

}
