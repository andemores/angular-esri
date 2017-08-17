import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


// also import the "angular2-esri-loader" to be able to load JSAPI modules
import { EsriLoaderService } from 'angular2-esri-loader';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {


  constructor() {

  }


  title = 'Geocap';
  version = 2.3;



}
