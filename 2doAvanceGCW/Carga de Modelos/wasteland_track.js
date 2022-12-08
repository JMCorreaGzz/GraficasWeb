// Plane

const planeGeometry = new THREE.PlaneGeometry(256, 256);
const loader = new THREE.TextureLoader();

const height = loader.load("track2.png");
const track = loader.load("wasteLand.jpg");
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
  streetlamp.rotation.y = 90;
  streetlamp.position.set(10, 0, -115);
  scene.add(streetlamp);
});

loaderGLTF.load("Models/streetlamp.glb", function (gltf) {
  //streetlamp 2
  let streetlamp = gltf.scene;
  streetlamp.scale.set(0.1, 0.2, 0.1);
  streetlamp.rotation.y = 0;
  streetlamp.position.set(10, 0, 110);
  scene.add(streetlamp);
});

loaderGLTF.load("Models/streetlamp.glb", function (gltf) {
  //streetlamp 3
  let streetlamp = gltf.scene;
  streetlamp.scale.set(0.1, 0.2, 0.1);
  streetlamp.rotation.y = 90;
  streetlamp.position.set(115, 0, 0);
  scene.add(streetlamp);
});

loaderGLTF.load("Models/streetlamp.glb", function (gltf) {
  //streetlamp 4
  let streetlamp = gltf.scene;
  streetlamp.scale.set(0.1, 0.2, 0.1);
  streetlamp.rotation.y = 225;
  streetlamp.position.set(-115, 0, 0);
  scene.add(streetlamp);
});

loaderGLTF.load("Models/barrel.glb", function (gltf) {
  //arbol

  let barrel = gltf.scene;
  barrel.scale.set(1.5, 1.5, 1.5);
  barrel.rotation.y = 0;
  barrel.position.set(-50, 2.5, 30);
  scene.add(barrel);
});

loaderGLTF.load("Models/barrel.glb", function (gltf) {
  //arbol

  let barrel2 = gltf.scene;
  barrel2.scale.set(1.5, 1.5, 1.5);
  barrel2.rotation.y = 0;
  barrel2.position.set(-30, 2.5, 20);
  scene.add(barrel2);
});

loaderGLTF.load("Models/barrel.glb", function (gltf) {
  //arbol

  let barrel3 = gltf.scene;
  barrel3.scale.set(1.5, 1.5, 1.5);
  barrel3.rotation.y = 0;
  barrel3.position.set(90, 2.5, -110);
  scene.add(barrel3);
});

loaderGLTF.load("Models/barrel.glb", function (gltf) {
  //arbol

  let barrel = gltf.scene;
  barrel.scale.set(1.5, 1.5, 1.5);
  barrel.rotation.x = 0;
  barrel.position.set(115, 2.5, -100);
  scene.add(barrel);
});

loaderGLTF.load("Models/barrel.glb", function (gltf) {
  //arbol

  let barrel2 = gltf.scene;
  barrel2.scale.set(1.5, 1.5, 1.5);
  barrel2.rotation.x = 1.5708;
  barrel2.position.set(110, 2.5, -120);
  scene.add(barrel2);
});

loaderGLTF.load("Models/barrel.glb", function (gltf) {
  //arbol

  let barrel3 = gltf.scene;
  barrel3.scale.set(1.5, 1.5, 1.5);
  barrel3.rotation.x = 1.5708;
  barrel3.position.set(-30, 2.5, 40);
  scene.add(barrel3);
});

loaderGLTF.load("Models/stopSign.glb", function (gltf) {
  //arbol 4
  let barrier = gltf.scene;
  barrier.scale.set(1.0, 1.0, 1.0);
  barrier.rotation.y = 0;
  barrier.position.set(75, 0, 45);
  scene.add(barrier);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.y = 0;
  cone.position.set(30, 0.5, 30);
  scene.add(cone);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.y = 0;
  cone.position.set(20, 0.5, 40);
  scene.add(cone);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.y = 0;
  cone.position.set(35, 0.5, 40);
  scene.add(cone);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.x = 1.5708;
  cone.position.set(70, 10, -70);
  scene.add(cone);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.y = 0;
  cone.position.set(60, 0.5, -80);
  scene.add(cone);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.y = 0;
  cone.position.set(50, 0.5, -80);
  scene.add(cone);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.x = 1.5708;
  cone.position.set(40, 10, -70);
  scene.add(cone);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.y = 0;
  cone.position.set(30, 0.5, -80);
  scene.add(cone);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.y = 0;
  cone.position.set(20, 0.5, -80);
  scene.add(cone);
});
loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.x = 1.5708;
  cone.position.set(10, 10, -70);
  scene.add(cone);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.y = 0;
  cone.position.set(0, 0.5, -80);
  scene.add(cone);
});

loaderGLTF.load("Models/cone2.glb", function (gltf) {
  //arbol 5
  let cone = gltf.scene;
  cone.scale.set(1, 1, 1);
  cone.rotation.x = 1.5708;
  cone.position.set(-10, 10.0, -70);
  scene.add(cone);
});

loaderGLTF.load("Models/barrier.glb", function (gltf) {
  //streetlamp 1
  let barrier = gltf.scene;
  barrier.scale.set(5.0, 5.0, 5.0);
  barrier.position.set(-10, 0, 10);
  barrier.rotation.y = 90;
  scene.add(barrier);
});

loaderGLTF.load("Models/barrier.glb", function (gltf) {
  //streetlamp 1
  let barrier = gltf.scene;
  barrier.scale.set(5.0, 5.0, 5.0);
  barrier.position.set(-100, 0, 100);
  barrier.rotation.y = 90;
  scene.add(barrier);
});

loaderGLTF.load("Models/barrier.glb", function (gltf) {
  //streetlamp 1
  let barrier = gltf.scene;
  barrier.scale.set(5.0, 5.0, 5.0);
  barrier.position.set(-60, 0, 100);
  barrier.rotation.y = 90;
  scene.add(barrier);
});

loaderGLTF.load("Models/barrier.glb", function (gltf) {
  //streetlamp 1
  let barrier = gltf.scene;
  barrier.scale.set(5.0, 5.0, 5.0);
  barrier.position.set(-90, 0, 60);
  barrier.rotation.y = 90;
  scene.add(barrier);
});

loaderGLTF.load("Models/tank.glb", function (gltf) {
  //streetlamp 1
  let tank = gltf.scene;
  tank.scale.set(20.0, 20.0, 20.0);
  tank.position.set(-85, 0, 90);
  tank.rotation.y = 0;
  scene.add(tank);
});
