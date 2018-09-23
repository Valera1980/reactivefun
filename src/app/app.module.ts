import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateComponent } from './translate/translate.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'../lang/','.json');
  // return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ForkJoinComponent,
    ParentComponent,
    ChildComponent,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide : TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
