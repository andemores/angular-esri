// Lifted from : https://github.com/tomwayson/angular2-esri-example
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

  constructor(private esriLoader: EsriLoaderService) {

  }

  private createWidget() {

  }

  // Load map from Online
  private createMapId() {
    // only load the ArcGIS API for JavaScript when this component is loaded
    return this.esriLoader.load({
      // use a specific version of the JSAPI
      url: 'https://js.arcgis.com/4.3/'
    }).then(() => {
      // load the needed Map and MapView modules from the JSAPI
      this.esriLoader.loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/WebMap',
        'esri/layers/FeatureLayer',
        'esri/widgets/Home',
        'esri/widgets/LayerList',

      ]).then(([
        Map,
        MapView,
        WebMap,
        FeatureLayer,
        Home,
        LayerList
      ]) => {



        var webmap = new WebMap({
          portalItem: { // autocasts as new PortalItem()
            id: "dafeb14c6dff4522a0360c82c024905a"
          }
        });

        let norway_coast_url = "https://geocap.geodata.no/arcgis/rest/services/scandinavia/MapServer/3";
        var featureLayer = new FeatureLayer({
          url: norway_coast_url
        });

        webmap.add(featureLayer);

        var view = new MapView({
          map: webmap,
          container: this.mapViewEl.nativeElement
        });


        // Home
        var homeWidget = new Home({
          view: view
        });

        // adds the home widget to the top left corner of the MapView
        view.ui.add(homeWidget, "top-left");

        var layerList = new LayerList({
          view: view
        });
        // Adds widget below other elements in the top left corner of the view
        view.ui.add(layerList, {
          position: "top-right"
        });

      });
    });

  }

  // Load empty basemap
  private createMap() {
    // only load the ArcGIS API for JavaScript when this component is loaded
    return this.esriLoader.load({
      // use a specific version of the JSAPI
      url: 'https://js.arcgis.com/4.3/'
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

  public ngOnInit() {
    return this.createMapId();
  }

}