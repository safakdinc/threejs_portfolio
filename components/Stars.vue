<template>
  <div ref="canvasContainer" class="w-full h-full z-[-1]"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';

const canvasContainer = ref(null);

onMounted(() => {
  // Setup Three.js scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 1;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvasContainer.value.appendChild(renderer.domElement);

  // Create Stars
  const starGeometry = new THREE.BufferGeometry();
  const sphere = new Float32Array(2000 * 3); // 5000 points with x, y, z coordinates
  for (let i = 0; i < sphere.length; i++) {
    sphere[i] = Math.random() * 2 - 1; // Random position between -1 and 1
  }
  starGeometry.setAttribute('position', new THREE.BufferAttribute(sphere, 3));

  const starMaterial = new THREE.PointsMaterial({
    color: '#d1d1d1',
    size: 0.002,
    sizeAttenuation: true,
    transparent: true,
    depthWrite: false
  });

  const stars = new THREE.Points(starGeometry, starMaterial);
  stars.rotation.set(0, 0, Math.PI / 4);
  scene.add(stars);

  // Animation
  function animate() {
    requestAnimationFrame(animate);
    stars.rotation.x -= 0.001;
    stars.rotation.y -= 0.0015;
    renderer.render(scene, camera);
  }
  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>
