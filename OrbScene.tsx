'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vec3 p = position;
    float fold = sin(p.y * 3.7 + p.x * 2.2) * cos(p.z * 2.8) * 0.095;
    p += normal * fold;
    vec4 world = modelMatrix * vec4(p, 1.0);
    vPosition = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

// Original analytic studio reflections: no HDR downloads or external textures.
const fragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vec3 n = normalize(vNormal);
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 r = reflect(viewDirection, n);
    float band = pow(max(0.0, 1.0 - abs(r.y + 0.12)), 13.0);
    float whiteStrip = pow(max(0.0, 1.0 - abs(r.x + 0.37)), 28.0);
    float rim = pow(1.0 - max(0.0, dot(-viewDirection, n)), 2.5);
    vec3 base = mix(vec3(0.055, 0.064, 0.08), vec3(0.66, 0.71, 0.76), band);
    base += vec3(0.82, 0.86, 0.9) * whiteStrip * 0.85;
    base += vec3(0.34, 0.41, 0.39) * rim * 0.7;
    base += vec3(0.52, 0.085, 0.055) * pow(max(0.0, r.x), 9.0) * 0.26;
    gl_FragColor = vec4(base, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function Sculpture() {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useMemo(() => new THREE.ShaderMaterial({ vertexShader, fragmentShader }), []);
  useEffect(() => () => material.dispose(), [material]);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += Math.min(delta, 0.05) * 0.1;
    mesh.current.rotation.x = THREE.MathUtils.damp(mesh.current.rotation.x, state.pointer.y * 0.14 + 0.15, 2, delta);
    mesh.current.rotation.z = THREE.MathUtils.damp(mesh.current.rotation.z, -state.pointer.x * 0.12 - 0.15, 2, delta);
  });
  return <mesh ref={mesh} material={material} scale={[1.02, 1.1, 0.98]}><sphereGeometry args={[1, 64, 48]} /></mesh>;
}

function Lifecycle({ onReady, onFailure }: { onReady: () => void; onFailure: () => void }) {
  const { gl } = useThree();
  useEffect(() => {
    const element = gl.domElement;
    const handleLoss = (event: Event) => { event.preventDefault(); onFailure(); };
    element.addEventListener('webglcontextlost', handleLoss, false);
    onReady();
    return () => element.removeEventListener('webglcontextlost', handleLoss);
  }, [gl, onReady, onFailure]);
  return null;
}

export default function OrbScene({ active, onReady, onFailure }: { active: boolean; onReady: () => void; onFailure: () => void }) {
  return (
    <Canvas className="chromeOrbCanvas" style={{ position: 'absolute', inset: 0 }} frameloop={active ? 'always' : 'never'} dpr={[1, 1.5]} camera={{ position: [0, 0, 4], fov: 36 }} gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }} fallback={null}>
      <Sculpture />
      <Lifecycle onReady={onReady} onFailure={onFailure} />
    </Canvas>
  );
}
