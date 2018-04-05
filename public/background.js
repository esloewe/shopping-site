var scene = new THREE.Scene();
var mouse = new THREE.Vector2(),
    INTERSECTED;
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
var threeElem = document.querySelector("#three-js-item");
threeElem.appendChild(renderer.domElement);
renderer.setClearColor("#f7f7f7");

// geometries------------------------------------------------------ //
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove(event) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components

    mouse.x = event.clientX / window.innerWidth * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // console.log("mouse something", mouse);
}

window.addEventListener("mousemove", onMouseMove, false);

var geometry = new THREE.TorusGeometry(5, 1.5, 8, 50);
var material = new THREE.MeshBasicMaterial({
    color: 0xffff00
});

var torus = new THREE.Mesh(geometry, material);

torus.position.x = 0;
torus.position.y = 1;
torus.name = "Clarence";

torus.callback = function() {
    // console.log("oh shit clicks", this.name);
};

// Scene adds ------------------------------------------------------ //
scene.add(torus);
// scene.add(line);

// camera and geometry pos ------------------------------------------------------ //

camera.position.z = 17;

// animate ------------------------------------------------------ //

var animate = function() {
    requestAnimationFrame(animate);

    raycaster.setFromCamera(mouse, camera);

    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects(scene.children);

    for (var i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set("rgb(41, 235, 211)");
    }

    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
};

animate();

// fit your screen--------------------------------------------------------------//
window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
