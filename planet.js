import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js";
    
    //three js
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000, 0); //black

    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('imgs/saturnMap.jpg')});
    const materialBase = new THREE.MeshPhongMaterial({ color: 0xFF8001});
    const planet = new THREE.Mesh(geometry, materialBase);
    planet.overdraw = true;
    planet.castShadow = true;

    planet.position.set(0,0,0);
    planet.rotation.set((15/100) * Math.PI, 0 , 0);
    scene.add(planet);

    //Lights 
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(10, 20, 0);
    scene.add(dirLight);

    //Camera
    const width = 10;
    const height = width * (window.innerHeight / window.innerWidth);
    const camera = new THREE.OrthographicCamera(
        width / -2, // left
        width / 2, // right
        height / 2, // top
        height /-2, // bottom
        1, // near
        100 // far
    );

    camera.position.set(4, 4, 4);
    camera.lookAt(0, 0, 0);

    //renderer
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);

    //add it to html
    var planetBox = document.getElementById("planet-box");
    planetBox.appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement);