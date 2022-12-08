// Plane

const planeGeometry = new THREE.PlaneGeometry(256, 256);
const loader = new THREE.TextureLoader();

const height = loader.load("track2.png");
const track = loader.load("desertTrack.jpg");
const planeMaterial = new THREE.MeshStandardMaterial({
  map: track,
  displacementMap: height,
});

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0, -0.5, 0);
plane.receiveShadow = true;
plane.rotateX(-Math.PI / 2);

scene.add(plane);

loaderGLTF.load("Models/roca1.glb", function (gltf) {
  //arbol 1
  let roca1 = gltf.scene;
  roca1.scale.set(7.0, 7.0, 7.0);
  roca1.rotation.y = 0;
  roca1.position.set(50, 0, 100);
  scene.add(roca1);
});

loaderGLTF.load("Models/roca3.glb", function (gltf) {
  //roca 2
  let roca2 = gltf.scene;
  roca2.scale.set(10.0, 12.0, 10.0);
  roca2.rotation.y = 0;
  roca2.position.set(80, 0, -80);
  scene.add(roca2);
});

loaderGLTF.load("Models/roca4.glb", function (gltf) {
  //roca 3
  let roca3 = gltf.scene;
  roca3.scale.set(15.0, 15.0, 15.0);
  roca3.rotation.y = 0;
  roca3.position.set(-150, 0, 100);
  scene.add(roca3);
});

loaderGLTF.load("Models/roca5.glb", function (gltf) {
  //roca 4
  let roca4 = gltf.scene;
  roca4.scale.set(15.0, 20.0, 15.0);
  roca4.rotation.y = 0;
  roca4.position.set(-90, 0, 50);
  scene.add(roca4);
});

loaderGLTF.load("Models/roca6.glb", function (gltf) {
  //roca 5
  let roca5 = gltf.scene;
  roca5.scale.set(20.0, 20.0, 20.0);
  roca5.rotation.y = 0;
  roca5.position.set(120, 0, 30);
  scene.add(roca5);
});

loaderGLTF.load("Models/roca7.glb", function (gltf) {
  //roca 6
  let roca6 = gltf.scene;
  roca6.scale.set(10.0, 10.0, 10.0);
  roca6.rotation.y = 0;
  roca6.position.set(75, 0, -30);
  scene.add(roca6);
});

loaderGLTF.load("Models/roca8.glb", function (gltf) {
  //roca 7
  let roca7 = gltf.scene;
  roca7.scale.set(15.0, 15.0, 15.0);
  roca7.rotation.y = 0;
  roca7.position.set(-75, 0, -120);
  scene.add(roca7);
});

loaderGLTF.load("Models/roca9.glb", function (gltf) {
  //roca 8
  let roca8 = gltf.scene;
  roca8.scale.set(20.0, 20.0, 20.0);
  roca8.rotation.y = 0;
  roca8.position.set(-80, 0, 80);
  scene.add(roca8);
});

loaderGLTF.load("Models/roca10.glb", function (gltf) {
  //roca 9
  let roca9 = gltf.scene;
  roca9.scale.set(5.0, 5.0, 5.0);
  roca9.rotation.y = 0;
  roca9.position.set(40, 0, 30);
  scene.add(roca9);
});

loaderGLTF.load("Models/roca6.glb", function (gltf) {
  //roca 10
  let roca10 = gltf.scene;
  roca10.scale.set(20.0, 20.0, 20.0);
  roca10.rotation.y = 0;
  roca10.position.set(150, 0, -80);
  scene.add(roca10);
});

loaderGLTF.load("Models/arbol1.glb", function (gltf) {
  //arbol 1
  let arbol1 = gltf.scene;
  arbol1.scale.set(5.0, 5.0, 5.0);
  arbol1.rotation.y = 0;
  arbol1.position.set(90, 0, 30);
  scene.add(arbol1);
});

loaderGLTF.load("Models/arbol1.glb", function (gltf) {
  //arbol 2
  let arbol2 = gltf.scene;
  arbol2.scale.set(5.0, 5.0, 5.0);
  arbol2.rotation.y = 0;
  arbol2.position.set(-80, 0, 20);
  scene.add(arbol2);
});

loaderGLTF.load("Models/arbol1.glb", function (gltf) {
  //arbol 3
  let arbol3 = gltf.scene;
  arbol3.scale.set(5.0, 5.0, 5.0);
  arbol3.rotation.y = 0;
  arbol3.position.set(40, 0, -100);
  scene.add(arbol3);
});