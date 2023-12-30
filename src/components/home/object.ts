import * as THREE from 'three';


export function createScene(containerId: string):void {
    console.log("Loading animation scene...")
    
    const container = document.getElementById(containerId);

    if(!container){
        console.error(`Container with ID '${containerId}' not found`)
        return;
    }

    // Clear container before appending renderer
    container.innerHTML = "";

    // New Scene
    const scene = new THREE.Scene();

    // New Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.lookAt(0,0,0)

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Add a light to the scene
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 10);
    scene.add(light);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x228B22, transparent: true, opacity: 0.5 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 0); // Adjust the position of the cube
    scene.add(cube);

    // Animation
    const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Render the scene
        renderer.render(scene, camera);
    };

    animate();
}