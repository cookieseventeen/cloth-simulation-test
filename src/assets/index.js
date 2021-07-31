import { extend } from 'lodash';
import { Composition, CtxRendering } from 'mkcvs'
// import * as THREE from 'three';

const DEFAULT = {}

function boot() {
  const container = document.getElementById('container');
  const comp = new Composition(container);
  const layer = comp.newLayer('');
  const cloth = new ClothSimulation(layer, DEFAULT, {});

}

class ClothSimulation {
  constructor(layer, defaultConfig, config) {
    // console.log(THREE);
  }
}


window.onload = () => {
  boot();
}

