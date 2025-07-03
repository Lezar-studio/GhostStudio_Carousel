import "./style.css";
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import textVertex from '../shaders/textVertex.glsl';
import gsap from 'gsap';
import { createStore } from 'zustand/vanilla';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import {Text} from 'troika-three-text';

// Zustand vanilla store for state management
const carouselStore = createStore((set, get) => ({
    currentIndex: 0,
    isAnimating: false,
    totalBlobs: 0,
    isOrthographic: true, // Start with orthographic by default
    
    setCurrentIndex: (index) => set({ currentIndex: index }),
    setIsAnimating: (animating) => set({ isAnimating: animating }),
    setTotalBlobs: (total) => set({ totalBlobs: total }),
    setIsOrthographic: (ortho) => set({ isOrthographic: ortho }),
    
    navigateToNext: () => {
        const { currentIndex, totalBlobs } = get();
        const nextIndex = (currentIndex + 1) % totalBlobs;
        set({ currentIndex: nextIndex });
        return nextIndex;
    },
    
    navigateToPrevious: () => {
        const { currentIndex, totalBlobs } = get();
        const prevIndex = (currentIndex - 1 + totalBlobs) % totalBlobs;
        set({ currentIndex: prevIndex });
        return prevIndex;
    },
    
    toggleCamera: () => {
        const { isOrthographic } = get();
        set({ isOrthographic: !isOrthographic });
        return !isOrthographic;
    }
}));

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);
const gltfLoader = new GLTFLoader(loadingManager);

// Enhanced navigation variables
let isDragging = false;
let dragStartX = 0;
let dragThreshold = 50; // pixels
let touchStartX = 0;
let wheelAccumulator = 0;
const wheelThreshold = 100; // accumulated wheel delta threshold
let lastWheelTime = 0;
const wheelDebounceDelay = 100; // milliseconds

const blobs = [
    {
        name: 'A brand image studio',
        background: '#001EFF',
        gradientEnd: '#000843',
        useGradient: true,
        materialTexture: './materials/TGG1.png',
        backgroundTexture: './backgrounds/BG 1.png'
    },
    {
        name: 'Crafting Artistic direction',
        background: '#06E6FF',
        gradientEnd: '#FDFDFD',
        useGradient: true,
        materialTexture: './materials/TGG2.png',
        backgroundTexture: './backgrounds/BG 2.png'
    },
    {
        name: '& Web dev agency',
        background: '#FF0000',
        useGradient: false,
        materialTexture: './materials/TGG3.png',
        backgroundTexture: './backgrounds/BG 3.png'
    },
    {
        name: 'Product design',
        background: '#FFFFFF',
        useGradient: false,
        materialTexture: './materials/TGG4.png',
        backgroundTexture: './backgrounds/BG 4.png'
    },
    {
        name: 'And immersive websites',
        background: '#000000',
        useGradient: false,
        materialTexture: './materials/TGG5.png',
        backgroundTexture: './backgrounds/BG 5.png'
    },
]

const scene = new THREE.Scene();

// Create both perspective and orthographic cameras
const perspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const aspect = window.innerWidth / window.innerHeight;
const orthographicCamera = new THREE.OrthographicCamera(
    -2 * aspect, 2 * aspect, 2, -2, 0.1, 1000
);

// Set initial camera to orthographic
let camera = orthographicCamera;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),
    antialias: true
});

// Initialize store
const store = carouselStore.getState();
store.setTotalBlobs(blobs.length);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2; // Increased for more vibrant colors
renderer.outputColorSpace = THREE.SRGBColorSpace;

// Global variables for the model and texture materials
let ghostModel = null;
let embeddedMaterials = {}; // Store original embedded materials from GLB
let textureMaterials = {}; // Store PNG texture-based materials
let currentMaterialIndex = 0;
let backgroundPlanes = [];
let backgroundMaterials = [];
let videoPlane = null;

// Load HDRI - Using studio_small_09 for better contrast and vibrant colors
const rgbeLoader = new RGBELoader(loadingManager);
rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr', function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;

    // Load GLB model
    gltfLoader.load('./GHOST-FINAL.glb', function(gltf) {
        ghostModel = gltf.scene;

        // Store embedded materials from GLB file and create PNG texture materials
        console.log('=== WELCOME TO GHOST STUDIO! ===');
        console.log('-- CHECK OUR SITE NOT THE CONSOLE LOGS! :)');
        console.log('=== LOADING CLEAN TEXTURE MATERIALS ===');
        console.log(`📦 Loading ${blobs.length} blob configurations with backgrounds and materials`);
        
        // Load PNG textures and create materials
        const loadPromises = blobs.map((blob, index) => {
            return new Promise((resolve) => {
                textureLoader.load(blob.materialTexture, (texture) => {
                    // Create simple material with PNG texture only (no metallic modifications)
                    const material = new THREE.MeshStandardMaterial({
                        map: texture,
                        transparent: true,
                        opacity: index === 0 ? 1.0 : 0.0, // First material visible, others hidden
                        side: THREE.DoubleSide
                    });
                    
                    // Keep materials pure - no metalness, roughness, or other modifications
                    
                    textureMaterials[`TGG${index + 1}`] = material;
                    resolve();
                }, undefined, (error) => {
                    // Create simple fallback material without texture
                    const fallbackMaterial = new THREE.MeshStandardMaterial({
                        color: '#ffffff', // Default white fallback
                        transparent: true,
                        opacity: index === 0 ? 1.0 : 0.0,
                        side: THREE.DoubleSide
                    });
                    textureMaterials[`TGG${index + 1}`] = fallbackMaterial;
                    resolve();
                });
            });
        });
        
        // Wait for all textures to load, then apply materials
        Promise.all(loadPromises).then(() => {
            
            // Apply texture materials to ghost body (preserve eyes)
            ghostModel.traverse((child) => {
                if (child.isMesh) {
                    if (Array.isArray(child.material)) {
                        child.material = child.material.map(mat => {
                            if (mat.name.toLowerCase().includes('eye') || mat.name === '1 eyes') {
                                // Preserve original eyes material
                                embeddedMaterials[mat.name] = mat.clone();
                                return mat;
                            } else {
                                // Replace body materials with texture materials
                                return textureMaterials['TGG1']; // Start with first texture
                            }
                        });
                    } else {
                        if (child.material.name.toLowerCase().includes('eye') || child.material.name === '1 eyes') {
                            // Preserve original eyes material
                            embeddedMaterials[child.material.name] = child.material.clone();
                        } else {
                            // Replace body material with texture material
                            child.material = textureMaterials['TGG1']; // Start with first texture
                        }
                    }
                }
            });
        });

        
        // Set up material traversal for shadows
        ghostModel.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        
        // Define texture material switching functions immediately (before texture loading)
        // Helper functions for simultaneous cross-fade (no gaps)
        function fadeOutOldMaterial(material, duration) {
            material.transparent = true;
            gsap.to(material, {
                opacity: 0,
                duration: duration,
                ease: 'power2.inOut'
            });
        }
        
        function fadeInNewMaterial(material, duration) {
            const originalOpacity = 1.0;
            material.transparent = true;
            material.opacity = 0;
            
            gsap.to(material, {
                opacity: originalOpacity,
                duration: duration,
                ease: 'power2.inOut',
                onComplete: () => {
                    material.transparent = originalOpacity < 1.0;
                }
            });
        }

        // Improved crossfade function that keeps both materials active during transition
        function crossfadeMaterials(oldMaterial, newMaterial, duration, onComplete) {
            // Set up new material to start invisible
            newMaterial.transparent = true;
            newMaterial.opacity = 0;
            
            // Set up old material for fading
            oldMaterial.transparent = true;
            
            // Start both animations simultaneously
            gsap.to(oldMaterial, {
                opacity: 0,
                duration: duration,
                ease: 'power2.inOut'
            });
            
            gsap.to(newMaterial, {
                opacity: 1,
                duration: duration,
                ease: 'power2.inOut',
                onComplete: () => {
                    newMaterial.transparent = false; // Optimize rendering after fade
                    if (onComplete) onComplete();
                }
            });
        }

        // Add PNG texture material switching with smooth cross-fade
        window.switchToTextureMaterial = function(materialName, duration = 0.5) {
                if (!textureMaterials[materialName]) {
                    return;
                }                
                const targetMaterial = textureMaterials[materialName].clone();
                let transitionCount = 0;
                const transitionMeshes = []; // Track temporary meshes for cleanup
                
                ghostModel.traverse((child) => {
                    if (child.isMesh) {
                        if (Array.isArray(child.material)) {
                            // Handle multi-material meshes
                            child.material.forEach((mat, index) => {
                                if (mat.name && (mat.name.toLowerCase().includes('eye') || mat.name === '1 eyes')) {
                                    // Preserve eyes material - no change
                                } else {
                                    // Create overlay mesh for crossfade
                                    const overlayMesh = new THREE.Mesh(child.geometry, targetMaterial.clone());
                                    overlayMesh.position.copy(child.position);
                                    overlayMesh.rotation.copy(child.rotation);
                                    overlayMesh.scale.copy(child.scale);
                                    overlayMesh.matrix.copy(child.matrix);
                                    overlayMesh.matrixWorld.copy(child.matrixWorld);
                                    
                                    // Start overlay invisible
                                    overlayMesh.material.transparent = true;
                                    overlayMesh.material.opacity = 0;
                                    
                                    // Add to scene
                                    child.parent.add(overlayMesh);
                                    transitionMeshes.push(overlayMesh);
                                    
                                    // Start crossfade
                                    crossfadeMaterials(mat, overlayMesh.material, duration, () => {
                                        // After crossfade, replace original material and cleanup
                                        child.material[index] = overlayMesh.material.clone();
                                        child.parent.remove(overlayMesh);
                                    });
                                    
                                    transitionCount++;
                                }
                            });
                        } else {
                            // Handle single material meshes
                            if (child.material.name && (child.material.name.toLowerCase().includes('eye') || child.material.name === '1 eyes')) {
                                // Preserve eyes material - no change
                            } else {
                                // Create overlay mesh for crossfade
                                const overlayMesh = new THREE.Mesh(child.geometry, targetMaterial.clone());
                                overlayMesh.position.copy(child.position);
                                overlayMesh.rotation.copy(child.rotation);
                                overlayMesh.scale.copy(child.scale);
                                overlayMesh.matrix.copy(child.matrix);
                                overlayMesh.matrixWorld.copy(child.matrixWorld);
                                
                                // Start overlay invisible
                                overlayMesh.material.transparent = true;
                                overlayMesh.material.opacity = 0;
                                
                                // Add to scene
                                child.parent.add(overlayMesh);
                                transitionMeshes.push(overlayMesh);
                                
                                // Start crossfade
                                crossfadeMaterials(child.material, overlayMesh.material, duration, () => {
                                    // After crossfade, replace original material and cleanup
                                    child.material = overlayMesh.material.clone();
                                    child.parent.remove(overlayMesh);
                                });
                                
                                transitionCount++;
                            }
                        }
                    }
                });
                
                // Update current material index
                const materialIndex = parseInt(materialName.replace('TGG', '')) - 1;
                currentMaterialIndex = materialIndex;
        
            };

        // Add cycling through PNG texture materials
        window.cycleTextureMaterials = function() {
            const textureMaterialNames = Object.keys(textureMaterials);
            if (textureMaterialNames.length === 0) {
                return;
            }
            
            const materialName = textureMaterialNames[currentMaterialIndex];
            switchToTextureMaterial(materialName, 0.5);
            
            currentMaterialIndex = (currentMaterialIndex + 1) % textureMaterialNames.length;
        };

            // Add keyboard shortcuts
    window.addEventListener('keydown', (e) => {
        if (e.key === 'm' || e.key === 'M') {
            cycleTextureMaterials();
        }
        if (e.key === 'b' || e.key === 'B') {
            cycleBackgrounds();
        }
    });

        // Add function to change texture material opacity/alpha
        window.changeTextureMaterialOpacity = function(materialName, opacity) {
            if (!textureMaterials[materialName]) {
                return;
            }
            
            const targetMaterial = textureMaterials[materialName];
            
            // Update the stored material
            targetMaterial.transparent = opacity < 1.0;
            targetMaterial.opacity = opacity;
            
            // Apply to all meshes using this material
            ghostModel.traverse((child) => {
                if (child.isMesh) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach((mat) => {
                            if (mat.name && (mat.name.toLowerCase().includes('eye') || mat.name === '1 eyes')) {
                                // Skip eyes materials
                            } else {
                                // Apply to body materials
                                mat.transparent = opacity < 1.0;
                                gsap.to(mat, {opacity: opacity, duration: 1, ease: 'power2.inOut'});
                            }
                        });
                    } else {
                        if (child.material.name && (child.material.name.toLowerCase().includes('eye') || child.material.name === '1 eyes')) {
                            // Skip eyes materials
                        } else {
                            // Apply to body material
                            child.material.transparent = opacity < 1.0;
                            gsap.to(child.material, {opacity: opacity, duration: 1, ease: 'power2.inOut'});
                        }
                    }
                }
            });
        };

        // Scale and position the model (maintain natural proportions)
        ghostModel.scale.setScalar(1.2); // Slightly larger to fill orthographic view better
        ghostModel.position.set(0, 0, 0); // Center the ghost model
        
        scene.add(ghostModel);
    });

    // Responsive background system with Zustand state management
    function getResponsiveSize() {
        const aspect = window.innerWidth / window.innerHeight;
        const size = Math.max(window.innerWidth, window.innerHeight) * 0.002; // Responsive scaling
        return { width: size * aspect * 2, height: size * 2 };
    }
    
    const bgSize = getResponsiveSize();
    const backgroundGeometry = new THREE.PlaneGeometry(bgSize.width, bgSize.height);
    const videoGeometry = new THREE.PlaneGeometry(bgSize.width * 1.2, bgSize.height * 1.2); // Slightly larger for video
    
    // Background planes with Zustand state (using global variables)
    
    // Load background textures
    blobs.forEach((blob, index) => {
        const bgTexture = textureLoader.load(blob.backgroundTexture);
        const bgMaterial = new THREE.MeshBasicMaterial({
            map: bgTexture,
            transparent: true,
            opacity: index === 0 ? 1.0 : 0.0 // Only first background visible
        });
        
        const bgPlane = new THREE.Mesh(backgroundGeometry, bgMaterial);
        bgPlane.position.z = -15;
        bgPlane.renderOrder = -5;
        scene.add(bgPlane);
        
        backgroundPlanes.push(bgPlane);
        backgroundMaterials.push(bgMaterial);
    });
    
    // Video texture
    const video = document.createElement('video');
    video.src = './gh0st_loop.mp4';
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    
    const videoTexture = new THREE.VideoTexture(video);
    const videoMaterial = new THREE.MeshBasicMaterial({
        map: videoTexture,
        transparent: true,
        opacity: 0.2
    });
    
    videoPlane = new THREE.Mesh(videoGeometry, videoMaterial);
    videoPlane.position.z = -12;
    videoPlane.renderOrder = -3;
    scene.add(videoPlane);
    
    video.play().catch(console.error);
    
    // Background switching with Zustand
    function switchBackground(backgroundIndex, duration = 0.5) {
        const { setCurrentIndex } = carouselStore.getState();
        
        if (backgroundIndex < 0 || backgroundIndex >= blobs.length) return;
                
        backgroundMaterials.forEach((material, index) => {
            gsap.to(material, {
                opacity: index === backgroundIndex ? 1.0 : 0.0,
                duration: duration,
                ease: 'power2.inOut'
            });
        });
    }
    
    window.switchBackground = switchBackground;
    window.cycleBackgrounds = function() {
        const { currentIndex } = carouselStore.getState();
        const nextIndex = (currentIndex + 1) % blobs.length;
        switchBackground(nextIndex);
    };

    // Position both cameras (closer for better zoom)
    perspectiveCamera.position.z = 3;
    orthographicCamera.position.z = 3;

    const clock = new THREE.Clock();
    
    // Start animation loop immediately
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    const textMaterial = new THREE.ShaderMaterial({
        vertexShader : textVertex,
        fragmentShader : `void main(){ gl_FragColor = vec4(1.0); }`,
        side : THREE.DoubleSide,
        uniforms : {
            progress : {value: 0},
            direction : {value: 1}
        }
    });
    
    const texts = blobs.map((blob, index) =>{
      const myText =  new Text();
      myText.text = blob.name;
      myText.font = `./TT Norms Pro DemiBold.ttf`;
      myText.anchorX = 'center';
      myText.anchorY = 'middle';
      myText.material = textMaterial;
      myText.position.set(0,0,2);
      if(index !== 0) myText.scale.set(0,0,0);
      myText.letterSpacing = -0.08;
      myText.fontSize = 0.4; // Fixed size for orthographic camera
      myText.glyphGeometryDetail = 20;
      myText.sync();
      scene.add(myText);
      return myText;
    });

    loadingManager.onLoad = ()=>{
        
        // Set initial material for the first blob (no fade for initial setup)
        const initialBlob = blobs[store.currentIndex];
        updateBlob(initialBlob, 0); // No transition duration for initial setup
    }
    
    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
    };
    
    loadingManager.onError = (url) => {
    };
    
    // Unified navigation function
    function navigateCarousel(direction) {
        const { isAnimating, setIsAnimating, currentIndex } = carouselStore.getState();
        if (isAnimating) return;
        
        setIsAnimating(true);
        
        // Get current index BEFORE updating it
        const previousIndex = currentIndex;
        
        // Use store navigation methods to get next index
        let nextIndex;
        if (direction > 0) {
            nextIndex = carouselStore.getState().navigateToNext();
        } else {
            nextIndex = carouselStore.getState().navigateToPrevious();
        }
        animateToBlob(previousIndex, nextIndex);
        
        // Set animation complete callback
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000); // Match animation duration
    }
    
    // Enhanced wheel event handler for better trackpad support
    window.addEventListener('wheel', (e) => {
        const { isAnimating } = carouselStore.getState();
        if (isAnimating) return;
        
        e.preventDefault();
        
        // Accumulate wheel delta to handle trackpad momentum and sensitivity
        wheelAccumulator += Math.abs(e.deltaY);
        
        // Debounce rapid events
        const currentTime = Date.now();
        if (currentTime - lastWheelTime < wheelDebounceDelay) {
            return;
        }
        
        // Only trigger navigation when accumulated delta exceeds threshold
        if (wheelAccumulator >= wheelThreshold) {
            lastWheelTime = currentTime;
            wheelAccumulator = 0; // Reset accumulator
            
            const direction = e.deltaY > 0 ? 1 : -1;
            navigateCarousel(direction);
        }
    }, { passive: false });
    
    // Camera switching function
    function switchCamera() {
        const newIsOrthographic = carouselStore.getState().toggleCamera();
        
        if (newIsOrthographic) {
            camera = orthographicCamera;
            // Copy position from perspective camera
            orthographicCamera.position.copy(perspectiveCamera.position);
        } else {
            camera = perspectiveCamera;
            // Copy position from orthographic camera
            perspectiveCamera.position.copy(orthographicCamera.position);
        }
    }
    
    // Enhanced keyboard navigation with camera switching
    window.addEventListener('keydown', (e) => {
        const { isAnimating } = carouselStore.getState();
        if (isAnimating) return;
        
        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                navigateCarousel(1);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                navigateCarousel(-1);
                break;
            case 'c':
            case 'C':
                e.preventDefault();
                switchCamera();
                break;
        }
    });
    
    // Mouse drag navigation
    window.addEventListener('mousedown', (e) => {
        const { isAnimating } = carouselStore.getState();
        if (isAnimating) return;
        isDragging = true;
        dragStartX = e.clientX;
        document.body.style.cursor = 'grabbing';
    });
    
    window.addEventListener('mousemove', (e) => {
        const { isAnimating } = carouselStore.getState();
        if (!isDragging || isAnimating) return;
        
        const deltaX = e.clientX - dragStartX;
        if (Math.abs(deltaX) > dragThreshold) {
            const direction = deltaX > 0 ? -1 : 1; // Inverted for natural feel
            navigateCarousel(direction);
            isDragging = false;
            document.body.style.cursor = 'default';
        }
    });
    
    window.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.cursor = 'default';
    });
    
    // Touch navigation for mobile
    window.addEventListener('touchstart', (e) => {
        const { isAnimating } = carouselStore.getState();
        if (isAnimating) return;
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    
    window.addEventListener('touchend', (e) => {
        const { isAnimating } = carouselStore.getState();
        if (isAnimating) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;
        
        if (Math.abs(deltaX) > dragThreshold) {
            const direction = deltaX > 0 ? -1 : 1; // Inverted for natural feel
            navigateCarousel(direction);
        }
    }, { passive: true });

    function updateBlob(blobConfig, transitionDuration = 0.2){ // 0.2s transition duration
        if (!ghostModel || Object.keys(textureMaterials).length === 0) return;
                
        // Find the corresponding texture material based on blob index
        const blobIndex = blobs.indexOf(blobConfig);
        const materialName = `TGG${blobIndex + 1}`;
        
        if (textureMaterials[materialName]) {
            switchToTextureMaterial(materialName, transitionDuration);
                } else {
        }
    }
    

    function animateToBlob(previousIndex, nextIndex) {
        
        const nextBlob = blobs[nextIndex];
        
        // Calculate direction accounting for infinite loop wrap-around
        let direction;
        const totalBlobs = blobs.length;
        const diff = nextIndex - previousIndex;
        
        if (Math.abs(diff) === 1) {
            // Normal adjacent navigation
            direction = diff > 0 ? 1 : -1;
        } else if (diff === -(totalBlobs - 1)) {
            // Wrap forward: 4 -> 0
            direction = 1;
        } else if (diff === (totalBlobs - 1)) {
            // Wrap backward: 0 -> 4
            direction = -1;
        } else {
            // Fallback
            direction = nextIndex > previousIndex ? 1 : -1;
        }
        
        // Switch background (each blob gets its own background)
        switchBackground(nextIndex, 1.0); // 1 second transition
        
        // Animate ghost model rotation - full 360 spin in correct direction
        if (ghostModel) {
            const currentRotation = ghostModel.rotation.y;
            const spinDirection = direction > 0 ? 1 : -1; // 1 for forward, -1 for backward
            const targetRotation = currentRotation + (spinDirection * Math.PI * 2); // Full 360 degree spin
            
            gsap.to(ghostModel.rotation, {
                y: targetRotation,
                duration: 1,
                ease: 'power2.inOut'
            });
        }
        
        // Animate text
        texts[nextIndex].scale.set(1,1,1);
        texts[nextIndex].position.x = direction * 6; // Moved further to the sides

        gsap.to(textMaterial.uniforms.progress, {
            value: .5,
            duration: 1,
            ease: 'linear',
            onComplete: () => {
                textMaterial.uniforms.progress.value = 0;
            }
        });

        // Animate from the PREVIOUS index, not the current (which is now next)
        gsap.to(texts[previousIndex].position, {
            x: -direction * 8, // Moved further to the sides
            duration: 1,
            ease: 'power2.inOut'
        });

        gsap.to(texts[nextIndex].position, {
            x: 0,
            duration: 1,
            ease: 'power2.inOut',
        });
        
        // Update blob properties with smooth material transition
        updateBlob(nextBlob, 0.8); // Slightly longer transition for blob navigation
    }

    // Handle window resize for both cameras and backgrounds
    window.addEventListener('resize', () => {
        const aspect = window.innerWidth / window.innerHeight;
        
        // Update perspective camera
        perspectiveCamera.aspect = aspect;
        perspectiveCamera.updateProjectionMatrix();
        
        // Update orthographic camera to maintain proper aspect ratio
        orthographicCamera.left = -2 * aspect;
        orthographicCamera.right = 2 * aspect;
        orthographicCamera.top = 2;
        orthographicCamera.bottom = -2;
        orthographicCamera.updateProjectionMatrix();
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Update background and video plane sizes responsively
        const newSize = getResponsiveSize();
        backgroundPlanes.forEach(plane => {
            plane.geometry.dispose();
            plane.geometry = new THREE.PlaneGeometry(newSize.width, newSize.height);
        });
        
        if (videoPlane) {
            videoPlane.geometry.dispose();
            videoPlane.geometry = new THREE.PlaneGeometry(newSize.width * 1.2, newSize.height * 1.2);
        }
    });

});
