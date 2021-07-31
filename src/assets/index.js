import "regenerator-runtime/runtime";
import "core-js/stable";
import { Composition } from 'mkcvs'
import * as THREE from 'three';

const DEFAULT = {}

function boot() {
  const container = document.getElementById('container');
  const comp = new Composition(container);
  const layer = comp.newLayer();
  const cloth = new ClothSimulation(layer, DEFAULT, {});

}

class ClothSimulation {
  constructor(layer, defaultConfig, config) {
    this.layer = layer;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ canvas: layer.cvs })
    this.camera = new THREE.PerspectiveCamera();
    this.init();
  }
  init() {
    this.setOnFrame();
  }
  setOnFrame() {
    this.layer.onFrame = () => {
      this.renderer.render(this.scene, this.camera);
    }
  }

}


window.onload = () => {
  boot();
}

