<template>
  <div ref="canvas" class="w-full h-full z-[1] relative" @mouseenter="mouseEnter" @mouseleave="mouseOut">
    <div class="absolute bottom-[100%] left-[50%] translate-x-[-50%] w-[2px] h-auto overflow-hidden" ref="info">
      <div class="w-[350px] bg-blur rounded-lg flex gap-[8px] flex-col p-[16px] z-[2000]">
        <div class="base-text text-[var(--text-gray)] customFont">
          This work is based on
          <a target="_blank" href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70">"Stylized planet"</a>
          by <a target="_blank" href="https://sketchfab.com/cmzw">cmzw</a> licensed under
          <a target="_blank" href="http://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import * as Three from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { onMounted, ref, render } from 'vue';
import gsap from 'gsap';

const canvas = ref();
const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
const renderer = new Three.WebGLRenderer({ alpha: true, antialias: true });
renderer.shadowMap.enabled = true;

const info = ref();
function mouseEnter() {
  const tl = gsap.timeline();
  tl.to(info.value, { width: 'auto', duration: 0.2, ease: 'power2.in' }, '>');
  info.value.classList.remove('pointer-events-none');
  info.value.classList.add('pointer-events-auto');
}

function mouseOut() {
  const tl = gsap.timeline();
  tl.to(info.value, { width: 0, duration: 0.2, ease: 'power2.in' });
  info.value.classList.remove('pointer-events-auto');
  info.value.classList.add('pointer-events-none');
}

const initializeScene = () => {
  camera.aspect = canvas.value.offsetWidth / canvas.value.offsetHeight;
  camera.updateProjectionMatrix();
  scene.add(camera);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvas.value.offsetWidth, canvas.value.offsetHeight);
  canvas.value.appendChild(renderer.domElement);

  // Add event listener for window resize
  window.addEventListener('resize', handleWindowResize);
  renderer.render(scene, camera);
};

const loader = new GLTFLoader();
loader.load('https://raw.githubusercontent.com/adrianhajdin/project_3D_developer_portfolio/main/public/planet/scene.gltf', gltf => {
  const earth = gltf.scene;
  earth.scale.set(2.5, 2.5, 2.5);
  earth.position.set(0, 0, 0);
  scene.add(earth);
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.enableZoom = false;
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 2;

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

onMounted(() => {
  initializeScene();
  handleWindowResize();
  animate();
});

const handleWindowResize = () => {
  camera.aspect = canvas.value.offsetWidth / canvas.value.offsetHeight;
  renderer.setSize(canvas.value.offsetWidth, canvas.value.offsetHeight);
  const distance = percentageToValue(numberToPercentage(window.innerWidth));
  camera.position.z = distance;
  camera.updateProjectionMatrix();
};

function numberToPercentage(number) {
  let value;
  const minimumValue = 500;
  const maximumValue = 1024;
  value = number;
  if (number < minimumValue) {
    value = minimumValue;
  }
  if (number > maximumValue) {
    value = maximumValue;
  }

  const range = maximumValue - minimumValue;

  // Calculate the position of the number in the range
  const position = (value - minimumValue) / range;

  // Convert the position to a percentage
  const percentage = position * 100;

  return percentage.toFixed(2);
}

function percentageToValue(percentage) {
  const minValue = 6.5;
  const maxValue = 10;

  // Calculate the position of the percentage between 8 and 10
  const position = percentage / 100;

  // Calculate the interpolated value within the range of 8 and 10
  const value = maxValue + position * (minValue - maxValue);

  return value.toFixed(2);
}
</script>
<style lang="scss" scoped>
.bg-blur {
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(3px);
}
a {
  color: var(--primary);
  transition: 0.2s ease-out;
  &:hover {
    color: var(--primary-fade);
  }
}
</style>
