---
title: 3D Guassian Splitting WebGL渲染
image: https://bulma.io/assets/images/placeholders/128x128.png
date: 2023-12-24 17:05:34
layout: _post/project
desc: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officiis iusto quia assumenda dolorum temporibus, doloribus illum a iste, ea nesciunt est repellendus nam rerum voluptates corrupti esse inventore dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga atque

type: xxxxxx基金
status: 进行中
start: 2023/12/24

---

<script type="importmap">
  {
    "imports": {
      "three": "/hexo-theme-lab/assets/js/three.min.js",
      "luma-web": "/hexo-theme-lab/assets/js/luma-web.module.min.js",
      "OrbitControls": "/hexo-theme-lab/assets/js/OrbitControls.min.js"
    }
  }
</script>

<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
  <canvas id="scene" style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);"></canvas>
</div>

<script type="module">
  import * as THREE from "three";
  import { LumaSplatsThree } from "luma-web";
  import { OrbitControls } from "OrbitControls";

  let splats = new LumaSplatsThree({
		source: 'https://lumalabs.ai/capture/c63b154c-dfa5-4fe7-9aac-9cb66fcde007',
		enableThreeShaderIntegration: false,
	});

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera( 75, 800 / 600, 0.1, 1000 );
  let renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#scene')});
  renderer.setSize( 800, 600 );
  scene.add(splats);
  camera.position.z = 5;
  
  const controls = new OrbitControls( camera, renderer.domElement );
  controls.maxPolarAngle = 0.9 * Math.PI / 2;
  controls.target.set( 0, 0.1, 0 );

  function createText(text, options = {}) {
    // default options
    const defaults = {
      canvasWidth: 1024,
      canvasHeight: 512,
      font: '100px sans-serif',
      textColor: 'white',
      strokeColor: 'rgba(0, 0, 0, 0.5)',
      strokeWidth: 5,
      planeWidth: 5,
      planeHeight: 2.5,
      position: { x: 0.8, y: -0.9, z: 0 },
      rotation: { y: Math.PI / 2 },
      scale: 0.6,
    };

    const opts = { ...defaults, ...options };

    // create texture from canvas
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    // create plane geometry and mesh with the texture
    const geometry = new THREE.PlaneGeometry(opts.planeWidth, opts.planeHeight);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      transparent: false,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
      premultipliedAlpha: true,
      emissive: opts.textColor,
      emissiveIntensity: 2,
    });
    const textPlane = new THREE.Mesh(geometry, material);

    // position and rotate
    textPlane.position.set(opts.position.x, opts.position.y, opts.position.z);
    textPlane.rotation.y = opts.rotation.y;
    textPlane.scale.setScalar(opts.scale);

    return textPlane;
  }

  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
  }
  animate();
</script>