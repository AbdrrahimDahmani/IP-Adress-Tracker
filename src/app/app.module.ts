import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardIpInfoComponent } from './card-ip-info/card-ip-info.component';
import {MatCardModule} from '@angular/material/card';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { SafePipe } from './pipes/safe.pipe';
@NgModule({
  declarations: [AppComponent, SearchComponent, CardIpInfoComponent, MapComponent, SafePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBeEFRFb10cLOfatjq5HFyUmdi2i2T6OG4'
    })

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
