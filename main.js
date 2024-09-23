// cenário
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//criar um personagem
function createCharacter() {
    const group = new THREE.Group();

    const bodyGeometry = new THREE.BoxGeometry(1, 1.5, 0.5);
    const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);

    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    group.add(head);

    const armGeometry = new THREE.BoxGeometry(0.3, 1, 0.3);
    const armMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.8, 0.5, 0);
    group.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.8, 0.5, 0);
    group.add(rightArm);

    const legGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
    const legMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.3, -1.5, 0);
    group.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.3, -1.5, 0);
    group.add(rightLeg);

    return group;
}

const character = createCharacter();
scene.add(character);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    character.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
