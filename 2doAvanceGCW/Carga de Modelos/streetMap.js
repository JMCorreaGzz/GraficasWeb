// Plane
const planeGeometry = new THREE.PlaneGeometry(256, 256);
const loader = new THREE.TextureLoader();

const height = loader.load("track2.png");
const track = loader.load("circuit.jpg");
const planeMaterial = new THREE.MeshStandardMaterial({
  map: track,
  displacementMap: height,
});

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0, -0.5, 0);
plane.receiveShadow = true;
plane.rotateX(-Math.PI / 2);

// Adding to scene
scene.add(plane);

loaderGLTF.load("Models/streetlamp.glb", function (gltf) {
  //streetlamp 1
  let streetlamp = gltf.scene;
  streetlamp.scale.set(0.1, 0.2, 0.1);
  streetlamp.position.set(10, 0, -60);
  scene.add(streetlamp);
});

loaderGLTF.load("Models/streetlamp.glb", function (gltf) {
  //streetlamp 2
  let streetlamp = gltf.scene;
  streetlamp.scale.set(0.1, 0.2, 0.1);
  streetlamp.rotation.y = 135;
  streetlamp.position.set(10, 0, 60);
  scene.add(streetlamp);
});

loaderGLTF.load("Models/streetlamp.glb", function (gltf) {
  //streetlamp 3
  let streetlamp = gltf.scene;
  streetlamp.scale.set(0.1, 0.2, 0.1);
  streetlamp.rotation.y = 225;
  streetlamp.position.set(75, 0, 0);
  scene.add(streetlamp);
});

loaderGLTF.load("Models/streetlamp.glb", function (gltf) {
  //streetlamp 4
  let streetlamp = gltf.scene;
  streetlamp.scale.set(0.1, 0.2, 0.1);
  streetlamp.rotation.y = -225;
  streetlamp.position.set(-75, 0, 0);
  scene.add(streetlamp);
});

loaderGLTF.load("Models/arbol1.glb", function (gltf) {
  //arbol 1
  let arbol1 = gltf.scene;
  arbol1.scale.set(7.0, 7.0, 7.0);
  arbol1.rotation.y = 0;
  arbol1.position.set(50, 0, 100);
  scene.add(arbol1);
});

loaderGLTF.load("Models/arbol2.glb", function (gltf) {
  //arbol 2
  let arbol2 = gltf.scene;
  arbol2.scale.set(4.0, 6.0, 4.0);
  arbol2.rotation.y = 0;
  arbol2.position.set(-70, 0, -50);
  scene.add(arbol2);
});

loaderGLTF.load("Models/arbol3.glb", function (gltf) {
  //arbol 3
  let arbol3 = gltf.scene;
  arbol3.scale.set(5.0, 5.0, 5.0);
  arbol3.rotation.y = 0;
  arbol3.position.set(60, 0, -100);
  scene.add(arbol3);
});

loaderGLTF.load("Models/arbol4.glb", function (gltf) {
  //arbol 4
  let arbol4 = gltf.scene;
  arbol4.scale.set(15.0, 20.0, 15.0);
  arbol4.rotation.y = 0;
  arbol4.position.set(130, 12, 35);
  scene.add(arbol4);
});

loaderGLTF.load("Models/arbol5.glb", function (gltf) {
  //arbol 5
  let arbol5 = gltf.scene;
  arbol5.scale.set(10.0, 10.0, 10.0);
  arbol5.rotation.y = 0;
  arbol5.position.set(-70, 0, 30);
  scene.add(arbol5);
});

loaderGLTF.load("Models/arbol6.glb", function (gltf) {
  //arbol 6
  let arbol6 = gltf.scene;
  arbol6.scale.set(10.0, 10.0, 10.0);
  arbol6.rotation.y = 0;
  arbol6.position.set(75, 6.4, -30);
  scene.add(arbol6);
});

loaderGLTF.load("Models/arbol7.glb", function (gltf) {
  //arbol 7
  let arbol7 = gltf.scene;
  arbol7.scale.set(15.0, 15.0, 15.0);
  arbol7.rotation.y = 0;
  arbol7.position.set(-50, 9, -100);
  scene.add(arbol7);
});

loaderGLTF.load("Models/arbol8.glb", function (gltf) {
  //arbol 8
  let arbol8 = gltf.scene;
  arbol8.scale.set(14.0, 14.0, 14.0);
  arbol8.rotation.y = 0;
  arbol8.position.set(-80, 8, 100);
  scene.add(arbol8);
});

loaderGLTF.load("Models/arbol9.glb", function (gltf) {
  //arbol 9
  let arbol9 = gltf.scene;
  arbol9.scale.set(10.0, 10.0, 10.0);
  arbol9.rotation.y = 0;
  arbol9.position.set(30, 6, 30);
  scene.add(arbol9);
});

loaderGLTF.load("Models/arbol10.glb", function (gltf) {
  //arbol 10
  let arbol9 = gltf.scene;
  arbol9.scale.set(10.0, 10.0, 10.0);
  arbol9.rotation.y = 0;
  arbol9.position.set(90, 5.5, -80);
  scene.add(arbol9);
});
