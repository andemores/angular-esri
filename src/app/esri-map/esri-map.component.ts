import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// also import the "angular2-esri-loader" to be able to load JSAPI modules
import { EsriLoaderService } from 'angular2-esri-loader';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  // for JSAPI 4.x you can use the "any for TS types
  public mapView: any;

  // this is needed to be able to create the MapView at the DOM element in this component
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  constructor(
    private esriLoader: EsriLoaderService
  ) { }

  public ngOnInit() {
    // only load the ArcGIS API for JavaScript when this component is loaded
    return this.esriLoader.load({
      // use a specific version of the JSAPI
      url: 'https://js.arcgis.com/4.4/'
    }).then(() => {
      // load the needed Map and MapView modules from the JSAPI
      this.esriLoader.loadModules([
        'esri/Map',
        'esri/views/MapView'
      ]).then(([
        Map,
        MapView
      ]) => {
        const mapProperties: any = {
          basemap: 'hybrid'
        };

        const map: any = new Map(mapProperties);

        const mapViewProperties: any = {
          // create the map view at the DOM element in this component
          container: this.mapViewEl.nativeElement,
          // supply additional options
          center: [-12.287, -37.114],
          zoom: 12,
          map // property shorthand for object literal
        };

        this.mapView = new MapView(mapViewProperties);
      });
    });
  }

}