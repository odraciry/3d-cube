import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Stars } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

export function Animate() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    // const stars = new Stars({
    //   count: 5000,
    //   opacity: 0.5,
    //   radius: 1000,
    //   size: 2,
    //   sizeRandomness: 1,
    //   color: 0xff0000,
    // });

    // stars.position.set(0, 0, 0);
    // stars.rotation.set(Math.PI / 2, 0, 0);
    // stars.scale.set(2, 2, 2);
    // scene.add(stars);

    // Criando a câmera e o renderizador
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Adicionando um cubo para testar
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    function animateFunction() {
      requestAnimationFrame(animateFunction);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animateFunction();
  }, []);

  return <canvas ref={canvasRef} />;
}

