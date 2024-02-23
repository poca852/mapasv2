import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsScreenComponent } from './screens/mapsScreen/mapsScreen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MyLocationComponent } from './components/my-location/my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';



@NgModule({
  declarations: [
    MapsScreenComponent,
    MapViewComponent,
    LoadingComponent,
    MyLocationComponent,
    AngularLogoComponent,
  ],
  exports: [
    MapsScreenComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MapsModule { }
