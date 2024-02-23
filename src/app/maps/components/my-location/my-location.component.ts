import { Component } from '@angular/core';

@Component({
  selector: 'app-my-location',
  template: `
    <button class="btn btn-primary" (click)="goToMyLocation()">
      Mi Ubicacion
    </button>
  `,
  styles: `
    button{
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 999;
    }
  `
})
export class MyLocationComponent {

  constructor() {}

  goToMyLocation() {
    
  }

}
