import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


// also import the "angular2-esri-loader" to be able to load JSAPI modules
import { EsriLoaderService } from 'angular2-esri-loader';

import * as THREE from 'three';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('threecanvas') private threeCanvas: ElementRef;

  constructor() {

  }


  title = 'Geocap';
  version = 2.3;
  scene: any;
  camera: any;
  renderer: any;
  mesh: any;

  public ngAfterViewInit() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    let geometry = new THREE.BoxGeometry(200, 200, 200);
    let material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setSize(600, 600);

    this.animate();




  }

  private get canvas(): HTMLCanvasElement {
    return this.threeCanvas.nativeElement;
  }



  private animate() {

    requestAnimationFrame( this.animate.bind (this));

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

    this.renderer.render(this.scene, this.camera);

  }


}
