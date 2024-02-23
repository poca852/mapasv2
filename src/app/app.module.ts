import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
// import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { MapsModule } from "./maps/maps.module";


@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      MapsModule,
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}