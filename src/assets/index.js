import { Composition } from 'mkcvs'

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

