import * as THREE from 'three';
import { useEffect } from 'react';

const Globe = () => {
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    
    // Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(`/images/earth.jpg`); // Provide the path to your Earth texture
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Mesh
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the globe
      globe.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    console.log("Globe rendering")
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // No need to render anything in React, Three.js handles rendering
};

export default Globe;
