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
    this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.pointLight = new THREE.PointLight(0xffffff, 0.5);
    this.pointLight.position.set(0, 0, 100);
    const helper = new THREE.CameraHelper(this.camera);
    const pointLightHelper = new THREE.PointLightHelper(this.pointLight, 50, 0xffffff);
    this.scene.add(this.ambientLight, this.pointLight, helper, pointLightHelper)
    this.camera.position.z = 200;
    this.init();
  }
  init() {
    this.genClothGeometry();
    this.setOnFrame();

  }
  setOnFrame() {
    this.layer.onFrame = () => {
      this.refreshGeometry();
      this.renderer.render(this.scene, this.camera);
    }
  }
  genClothGeometry() {
    const radialware = (u, v, target) => {
      var r = 100;
      var y = u * 2 * r - r;
      var z = 0;
      var x = v * 2 * r - r;
      target.set(x, y, z);
    }
    const geometry = new THREE.ParametricGeometry(radialware, 120, 120, false);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.y = Math.PI;
    this.scene.add(this.mesh);
  }

  refreshGeometry() {
    let period = (this.layer.syncData.frameCount % 100) / 48.5;

    this.mesh.geometry.attributes.position.needsUpdate = true;
    const positions = this.mesh.geometry.attributes.position.array;

    let index = 0;

    for (let i = 0; i <= positions.length; i++) {

      let x = positions[index++];
      let y = positions[index++];
      positions[index++] = Math.sin((period + y / 200) * Math.PI) * 15;

    }

  }


}


window.onload = () => {
  boot();
}

