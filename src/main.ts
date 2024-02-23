import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import mapboxgl from 'mapbox-gl';

if(!navigator.geolocation) {
  alert('El navegador no soporta la ubicacion');

  throw new Error('Sim geolocalizacion')
}

mapboxgl.accessToken = environment.MAPBOX

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));