// import * as THREE from 'three';
// import {
//     Box,
//     Heading,
//     Container,
//     Flex,
//     Text,
//     Button,
//     Stack,
//     Icon,
//     useColorModeValue,
//     createIcon,
// } from "@chakra-ui/react";
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { MeshBasicMaterial } from "three";


// import { useEffect, useRef } from "react";

// export default function Thee() {
   
//   const refContainer = useRef(null);
//   useEffect(() => {
//     var loader = new GLTFLoader();
//         // === THREE.JS CODE START ===
//         var scene = new THREE.Scene();
//         var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         var renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for a transparent background
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild( renderer.domElement );
//         // use ref as a mount point of the Three.js scene instead of the document.body
//         // var geometry = new THREE.BoxGeometry(1, 1, 1);
//         // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//         // var cube = new THREE.Mesh(geometry, material);
//         //scene.add(cube);
//         var fitman = null;
//     loader.load('/items/FitnessChar.glb', function (gltf) {
//         refContainer.current && refContainer.current.appendChild(renderer.domElement);
//           fitman = gltf.scene;  // sword 3D object is loaded
//           fitman.scale.set(2, 2, 2);
//           fitman.position.y = -1;
//           fitman.position.x = 0;
//           scene.add(fitman);
//           // scene.overrideMaterial = new MeshBasicMaterial({ color: "white" });
//           animate();
//         }); 
//         camera.position.z = 10;
//         var animate = function () {
//           requestAnimationFrame(animate);
//           // fitman.rotation.x += 0.01;
//           // fitman.rotation.y += 0.01;
//           renderer.render(scene, camera);
//         };
//     }, []);
//     return (
//     <Box position="fixed">
//       <Container
//         maxW="container.sm" // Adjust the max width as needed
//         id="thee"
//         position="fixed"
//         right="50%"
        
//         zIndex={3}
//       >
//         <Stack spacing={4}>
//                     <div ref={refContainer}></div>
//         </Stack>
//       </Container>
//     </Box>
                

//     );
// }
