<template>
  <div ref="canvas" class="w-full h-full z-[0] relative">
    <div class="absolute top-0 left-0 w-full h-full bg-blur"></div>
  </div>
</template>

<script setup>
import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import vertexShader from '@/assets/shaders/vertex.glsl?raw';
import fragmentShader from '@/assets/shaders/fragment.glsl?raw';

const canvas = ref();
const scene = new Three.Scene();
const renderer = new Three.WebGLRenderer({ alpha: true });
const camera = new Three.PerspectiveCamera(75, 1 / 1, 0.1, 1000);
const pointLight = new Three.PointLight(0xffffff, 5.0, 0, 0);
const pointLightHelper = new Three.PointLightHelper(pointLight, 1);
/* scene.add(pointLightHelper); */
pointLight.position.z = 10;
scene.add(pointLight);

const ambientLight = new Three.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = Three.PCFShadowMap;

const initializeScene = () => {
  camera.aspect = canvas.value.offsetWidth / canvas.value.offsetHeight;
  camera.updateProjectionMatrix();
  scene.add(camera);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 5.1;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvas.value.offsetWidth, canvas.value.offsetHeight);
  canvas.value.appendChild(renderer.domElement);
  // Add event listener for window resize
  window.addEventListener('resize', handleWindowResize);
  renderer.render(scene, camera);
};

const geometry = new Three.IcosahedronGeometry(2, 30);
const material = new Three.ShaderMaterial({
  wireframe: false,
  blending: Three.AdditiveBlending,
  transparent: true,
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  uniforms: {
    uFrequency: { value: 0.5 },
    uAmplitude: { value: 1.0 },
    uDensity: { value: 0.9 },
    uStrength: { value: 0.8 },
    uTimeScaleVert: { value: 0.01 },
    uNoiseScaleVert: { value: 0.7 },
    uDisplacementScale: { value: 0.6 },
    uTime: { value: 0 },
    uDeepPurple: { value: 0.2 },
    uOpacity: { value: 1 }
  }
});
const mesh = new Three.Mesh(geometry, material);

scene.add(mesh);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enableRotate = true;
controls.autoRotate = true;
controls.minPolarAngle = Math.PI / 2;
controls.maxPolarAngle = Math.PI / 2;

const clock = new Three.Clock();

function animate() {
  controls.update();
  material.uniforms.uTime.value += 0.3;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

onMounted(() => {
  initializeScene();
  animate();
});

const handleWindowResize = () => {
  camera.aspect = canvas.value.offsetWidth / canvas.value.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.value.offsetWidth, canvas.value.offsetHeight);
};
</script>

<style lang="scss" scoped>
/* Add any necessary styles here */
.bg-blur {
  pointer-events: none;
  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
  }
}
</style>
