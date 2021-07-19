import { Composition } from 'mkcvs'


function initComp(ele) {
  const comp = new Composition(ele);
  return comp;
}

function boot() {
  const containerEle = document.getElementById('container');
  const comp = initComp(containerEle);
  // add one layer for cloth entity;
  const clothLayer = comp.newLayer('2d');
  const clothSimulation = new ClothSimulation(clothLayer, DEFAULT, {});
}

const DEFAULT = {}

class ClothSimulation {
  constructor(layer, defaultConfig, config) {
    this.cvs = layer.cvs;
    this.ctx = layer.ctx;
    this.syncData = layer.syncData;
  }
}


window.onload = () => {
  boot();
}

