function happyfun() {
    var scene = new THREE.Scene();
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

    var mouse = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();

    function onMouseMove(event) {
        event.preventDefault();

        mouse.x = event.clientX / window.innerWidth * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    window.addEventListener("mousemove", onMouseMove, false);

    var geometry = new THREE.TetrahedronGeometry(2, 2);
    var material = new THREE.MeshBasicMaterial({
        color: "rgb(41, 235, 211)",
        wireframe: true
    });
    var cube = new THREE.Mesh(geometry, material);
    renderer.setClearColor("#f7f7f7");
    scene.add(cube);
    cube.position.y = 0.7;
    cube.position.x = -3;

    camera.position.z = 5;

    var animate = function() {
        requestAnimationFrame(animate);

        raycaster.setFromCamera(mouse, camera);

        var intersects = raycaster.intersectObjects(scene.children);

        for (var i = 0; i < intersects.length; i++) {
            intersects[i].object.material.color.set({
                color: "#ffff00"
            });
        }

        cube.rotation.x += 0.002;
        cube.rotation.y += 0.002;

        renderer.render(scene, camera);
    };

    animate();

    // // fit your screen--------------------------------------------------------------//
    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
