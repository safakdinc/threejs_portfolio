<template>
  <div class="canvas-container aspect-square w-full relative" @mouseleave="mouseOut">
    <div
      class="canvas-container aspect-square w-full"
      @mouseenter="mouseEnter"
      @mousemove="mouseMove"
      @mouseleave="mouseLeave()"
      ref="canvas"></div>
    <div class="absolute bottom-[100%] left-[50%] translate-x-[-50%] w-[2px] h-0 overflow-hidden" ref="info">
      <div class="w-[300px] bg-blur rounded-lg flex gap-[8px] flex-col p-[16px]">
        <div class="md-text font-bold customFont">{{ props.info.title }}</div>
        <div class="base-text text-[var(--text-gray)] customFont">{{ props.info.explanation }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as Three from 'three';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
import { onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
  img: {
    type: String,
    default: '/nuxt.png'
  },
  info: {
    type: Object,
    default: {
      title: '',
      explanation: ''
    }
  }
});

const info = ref();
const info_container = ref();
function mouseEnter() {
  const tl = gsap.timeline();
  tl.to(info.value, { height: 'auto', duration: 0.2, ease: 'power2.in' });
  tl.to(info.value, { width: 'auto', duration: 0.2, ease: 'power2.in' }, '>');
  info.value.classList.remove('pointer-events-none');
  info.value.classList.add('pointer-events-auto');
}

function mouseOut() {
  const tl = gsap.timeline();
  tl.to(info.value, { width: 2, duration: 0.2, ease: 'power2.in' });
  tl.to(info.value, { height: 0, duration: 0.2, ease: 'power2.in' }, '>');
  info.value.classList.remove('pointer-events-auto');
  info.value.classList.add('pointer-events-none');
}

const canvas = ref();
const scene = new Three.Scene();
const renderer = new Three.WebGLRenderer({ alpha: true, antialias: true });
const camera = new Three.PerspectiveCamera(75, 1 / 1, 0.1, 1000);
const spotLight = new Three.SpotLight(0xffffff, 2.3, 1000, Math.PI / 6);
scene.add(spotLight);
spotLight.position.z = 2;
spotLight.position.y = -0.3;

// Create a directional light
const directionalLight = new Three.DirectionalLight(0xffffff, 2.2); // Color white
directionalLight.position.set(0, 0, 0.05); // Set the position

// Add the directional light to the scene
scene.add(directionalLight);

const ambientLight = new Three.AmbientLight(0xffffff, 0);
/* scene.add(ambientLight); */
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = Three.PCFShadowMap;

const initializeScene = () => {
  camera.aspect = canvas.value.offsetWidth / canvas.value.offsetHeight;
  camera.updateProjectionMatrix();
  scene.add(camera);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvas.value.offsetWidth, canvas.value.offsetHeight);
  canvas.value.appendChild(renderer.domElement);
  renderer.outputEncoding = Three.sRGBEncoding;
};

const geometry = new Three.IcosahedronGeometry(1, 1);
const material = new Three.MeshStandardMaterial({ color: '#ffffff', flatShading: true });
const ball = new Three.Mesh(geometry, material);

const decalGeometry = new DecalGeometry(
  ball,
  new Three.Vector3(0, 0, 1),
  new Three.Euler(2 * Math.PI, 0, 6.25),
  new Three.Vector3(1, 0.9, 0.9)
);
const texture = new Three.TextureLoader().load(props.img);
texture.colorSpace = Three.SRGBColorSpace;
const decalMaterial = new Three.MeshStandardMaterial({
  map: texture,
  transparent: true,
  polygonOffset: true,
  polygonOffsetFactor: -100
});
const decalMesh = new Three.Mesh(decalGeometry, decalMaterial);
ball.add(decalMesh);
scene.add(ball);

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

onMounted(() => {
  window.addEventListener('resize', handleWindowResize);
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
  const minimumValue = 400;
  const maximumValue = 784;
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
  const minValue = 2.2;
  const maxValue = 3.2;

  // Calculate the position of the percentage between 8 and 10
  const position = percentage / 100;

  // Calculate the interpolated value within the range of 8 and 10
  const value = maxValue + position * (minValue - maxValue);

  return value.toFixed(2);
}

function mouseMove(event) {
  const rect = event.target.getBoundingClientRect();
  const width = rect.width / 2;
  const height = rect.height / 2;
  const left = event.offsetX;
  const top = event.offsetY;
  const horizontalMove = (left - width) / width; // Normalize movement to [-1, 1]
  const verticalMove = (top - height) / height; // Normalize movement to [-1, 1]

  const maxRotation = Math.PI / 3; // Maximum rotation angle (45 degrees)

  // Calculate rotation angles based on mouse movement
  const rotationX = maxRotation * verticalMove;
  const rotationY = maxRotation * horizontalMove;
  gsap.to(ball.rotation, { duration: 1, ease: 'power2.out', y: rotationY });
  gsap.to(ball.rotation, { duration: 1, ease: 'power2.out', x: rotationX });
}

function mouseLeave() {
  gsap.to(ball.rotation, { duration: 1, ease: 'power2.out', y: 0 });
  gsap.to(ball.rotation, { duration: 1, ease: 'power2.out', x: 0 });
}
</script>

<style scoped>
.canvas-container {
  width: 100%;
  height: 100%;
}
.bg-blur {
  background-color: rgba(16, 16, 16, 0.85);
  backdrop-filter: blur(10px);
}
</style>
