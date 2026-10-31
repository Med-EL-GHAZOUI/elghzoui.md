"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const CYAN = "#22d3ee";
const VIOLET = "#8b7cf6";

type SceneProps = { lite: boolean };

/** Evenly distributes `count` points on a sphere (Fibonacci lattice). */
const fibonacciSphere = (count: number, radius: number): THREE.Vector3[] => {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const theta = golden * i;
    return new THREE.Vector3(Math.cos(theta) * ring, y, Math.sin(theta) * ring).multiplyScalar(radius);
  });
};

/** Pointer position normalised to [-1, 1], read from the window so the canvas never intercepts input. */
const usePointer = () => {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return pointer;
};

const Core = () => {
  const wire = useRef<THREE.Mesh>(null);
  const solid = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (wire.current) {
      wire.current.rotation.y += delta * 0.12;
      wire.current.rotation.x += delta * 0.05;
    }
    if (solid.current) solid.current.rotation.y -= delta * 0.18;
    if (ringA.current) ringA.current.rotation.z += delta * 0.22;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.14;
  });

  return (
    <group>
      <mesh ref={solid}>
        <icosahedronGeometry args={[0.95, 0]} />
        <meshStandardMaterial color="#0a1428" emissive={CYAN} emissiveIntensity={0.05} roughness={0.35} metalness={0.6} flatShading />
      </mesh>
      <mesh ref={wire}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.4} />
      </mesh>
      <mesh ref={ringA} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.05, 0.008, 8, 120]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.55} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 1.7, 0.6, 0]}>
        <torusGeometry args={[2.35, 0.006, 8, 120]} />
        <meshBasicMaterial color={VIOLET} transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

/** Floating technical nodes joined to their nearest neighbours, like a service graph. */
const Network = ({ count }: { count: number }) => {
  const nodes = useRef<THREE.InstancedMesh>(null);
  const positions = useMemo(() => fibonacciSphere(count, 2.9), [count]);

  const lineGeometry = useMemo(() => {
    const points: number[] = [];
    positions.forEach((a, i) => {
      positions
        .map((b, j) => ({ j, d: a.distanceTo(b) }))
        .filter(({ j }) => j !== i)
        .sort((x, y) => x.d - y.d)
        .slice(0, 2)
        .forEach(({ j }) => {
          const b = positions[j];
          if (b && j > i) points.push(a.x, a.y, a.z, b.x, b.y, b.z);
        });
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geometry;
  }, [positions]);

  useEffect(() => () => lineGeometry.dispose(), [lineGeometry]);

  useLayoutEffect(() => {
    const mesh = nodes.current;
    if (!mesh) return;
    const matrix = new THREE.Matrix4();
    positions.forEach((position, i) => mesh.setMatrixAt(i, matrix.setPosition(position)));
    mesh.instanceMatrix.needsUpdate = true;
  }, [positions]);

  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.05;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={VIOLET} transparent opacity={0.28} />
      </lineSegments>
      <instancedMesh ref={nodes} args={[undefined, undefined, count]}>
        <octahedronGeometry args={[0.07, 0]} />
        <meshBasicMaterial color={CYAN} />
      </instancedMesh>
    </group>
  );
};

const Dust = ({ count }: { count: number }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 3.4 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      data[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      data[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      data[i * 3 + 2] = radius * Math.cos(phi);
    }
    return data;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#9fb4d6" size={0.025} sizeAttenuation transparent opacity={0.55} depthWrite={false} />
    </points>
  );
};

/** Entrance scale-in plus gentle pointer-driven rotation and parallax. */
const Rig = ({ lite, children }: { lite: boolean; children: React.ReactNode }) => {
  const group = useRef<THREE.Group>(null);
  const pointer = usePointer();
  const intro = useRef(0);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    intro.current = Math.min(1, intro.current + delta / 1.4);
    const eased = 1 - Math.pow(1 - intro.current, 3);
    g.scale.setScalar(0.6 + eased * 0.4);

    const damp = 1 - Math.exp(-delta * 3);
    const strength = lite ? 0 : 1;
    const targetY = pointer.current.x * 0.35 * strength;
    const targetX = pointer.current.y * 0.2 * strength;
    g.rotation.y += (targetY - g.rotation.y) * damp;
    g.rotation.x += (targetX - g.rotation.x) * damp;
    g.position.x += (pointer.current.x * -0.25 * strength - g.position.x) * damp;
    g.position.y += (pointer.current.y * 0.18 * strength - g.position.y) * damp;
  });

  return <group ref={group}>{children}</group>;
};

type HeroSceneProps = SceneProps & { active: boolean; onReady: () => void };

const HeroScene = ({ lite, active, onReady }: HeroSceneProps) => (
  <Canvas
    frameloop={active ? "always" : "never"}
    dpr={lite ? [1, 1.25] : [1, 1.75]}
    camera={{ position: [0, 0, lite ? 13 : 12.5], fov: 40 }}
    gl={{ antialias: !lite, alpha: true, powerPreference: "high-performance" }}
    onCreated={onReady}
    aria-hidden
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[4, 3, 5]} intensity={14} color={CYAN} />
    <pointLight position={[-5, -3, 3]} intensity={10} color={VIOLET} />
    <Rig lite={lite}>
      <Core />
      <Network count={lite ? 9 : 16} />
      {!lite && <Dust count={140} />}
    </Rig>
  </Canvas>
);

export default HeroScene;
