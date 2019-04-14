import React from 'react';
import * as THREE from 'three';
import { colors } from '../theme';

import image from '../../assets/hh_logo.png';
class threeDMOdel extends React.Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 4;
    // this.initializeOrbits();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(colors.mainColor);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const material = new THREE.MeshBasicMaterial({ color: colors.blueGreen });
    material.map = THREE.ImageUtils.loadTexture(image);
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div
        style={{ width: '90vw', height: '90vh' }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default threeDMOdel;
