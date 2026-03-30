"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

/* ── Origami Crane geometry built from triangular faces ── */
function CraneMesh({
  hovered,
  activeSection,
}: {
  hovered: string | null;
  activeSection: string | null;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Fold state drives morph
  const foldTarget = useRef(0);
  const foldCurrent = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Determine target fold based on active section
    foldTarget.current = activeSection ? 1 : 0;
    foldCurrent.current = THREE.MathUtils.lerp(
      foldCurrent.current,
      foldTarget.current,
      delta * 3
    );

    // Gentle idle rotation
    groupRef.current.rotation.y += delta * 0.15;

    // Scale pulse on hover
    const targetScale = hovered ? 1.08 : 1;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      delta * 5
    );
  });

  // Crane body geometry – stylized origami triangles
  const bodyGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      // Main body diamond
      0, 0, 1,    -0.8, 0, 0,    0, 0.3, 0,
      0, 0, 1,    0.8, 0, 0,     0, 0.3, 0,
      0, 0, 1,    -0.8, 0, 0,    0, -0.3, 0,
      0, 0, 1,    0.8, 0, 0,     0, -0.3, 0,
      // Tail
      0, 0, -1.2, -0.3, 0, 0,   0, 0.15, 0,
      0, 0, -1.2, 0.3, 0, 0,    0, 0.15, 0,
      0, 0, -1.2, -0.3, 0, 0,   0, -0.15, 0,
      0, 0, -1.2, 0.3, 0, 0,    0, -0.15, 0,
      // Head / neck
      0, 0.4, 1.6,  -0.15, 0.1, 0.9,  0.15, 0.1, 0.9,
      0, 0.4, 1.6,  -0.15, -0.05, 0.9, 0.15, -0.05, 0.9,
      // Beak
      0, 0.45, 2.0,  -0.05, 0.4, 1.6, 0.05, 0.4, 1.6,
    ]);
    geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Wings
  const leftWingGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      -0.8, 0, 0,    -2.2, 0.3, -0.3,  -0.4, 0, -0.6,
      -0.8, 0, 0,    -2.2, 0.3, -0.3,  -0.6, 0.1, 0.4,
      -2.2, 0.3, -0.3, -3.0, 0.6, -0.8, -1.5, 0.2, -0.7,
    ]);
    geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  const rightWingGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0.8, 0, 0,    2.2, 0.3, -0.3,  0.4, 0, -0.6,
      0.8, 0, 0,    2.2, 0.3, -0.3,  0.6, 0.1, 0.4,
      2.2, 0.3, -0.3, 3.0, 0.6, -0.8, 1.5, 0.2, -0.7,
    ]);
    geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  const materialProps = {
    color: hovered === "projects" ? "#3b82f6" : hovered === "research" ? "#60a5fa" : hovered === "hobbies" ? "#38bdf8" : "#e2e8f0",
    side: THREE.DoubleSide as THREE.Side,
    flatShading: true,
    metalness: 0.3,
    roughness: 0.4,
  };

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} scale={0.9}>
        {/* Body */}
        <mesh geometry={bodyGeometry}>
          <meshStandardMaterial {...materialProps} />
        </mesh>
        {/* Left wing */}
        <mesh geometry={leftWingGeo}>
          <meshStandardMaterial {...materialProps} />
        </mesh>
        {/* Right wing */}
        <mesh geometry={rightWingGeo}>
          <meshStandardMaterial {...materialProps} />
        </mesh>

        {/* Subtle glow */}
        <pointLight
          position={[0, 0.5, 1]}
          intensity={0.5}
          color="#60a5fa"
          distance={4}
        />
      </group>
    </Float>
  );
}

/* ── Navigation branches around the crane ── */
function NavBranch({
  label,
  position,
  onClick,
  onHover,
  onLeave,
  isActive,
}: {
  label: string;
  position: [number, number, number];
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
  isActive: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const targetScale = isActive ? 1.3 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      delta * 5
    );
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerEnter={(e) => {
        e.stopPropagation();
        onHover();
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        onLeave();
      }}
    >
      <octahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial
        color={isActive ? "#3b82f6" : "#dbeafe"}
        emissive={isActive ? "#3b82f6" : "#bfdbfe"}
        emissiveIntensity={isActive ? 0.5 : 0.1}
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

/* ── Main exported component ── */
export default function OrigamiCrane({
  activeSection,
  onSectionChange,
}: {
  activeSection: string | null;
  onSectionChange: (section: string | null) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  const sections = [
    { key: "projects", label: "Projects", position: [-2.5, -0.5, 0] as [number, number, number] },
    { key: "research", label: "Research & Awards", position: [0, -1.8, 0] as [number, number, number] },
    { key: "hobbies", label: "Hobbies", position: [2.5, -0.5, 0] as [number, number, number] },
  ];

  return (
    <div className="relative w-full h-[600px] md:h-[700px]">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-3, 3, -3]} intensity={0.35} color="#60a5fa" />

        <CraneMesh hovered={hovered} activeSection={activeSection} />

        {sections.map((s) => (
          <NavBranch
            key={s.key}
            label={s.label}
            position={s.position}
            isActive={activeSection === s.key}
            onClick={() =>
              onSectionChange(activeSection === s.key ? null : s.key)
            }
            onHover={() => setHovered(s.key)}
            onLeave={() => setHovered(null)}
          />
        ))}

        <Environment preset="city" />
      </Canvas>

      {/* Labels overlaid on the 3D scene */}
      <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-8">
        <div className="flex gap-12 md:gap-24">
          {sections.map((s) => (
            <motion.button
              key={s.key}
              className="pointer-events-auto text-xs md:text-sm uppercase tracking-[0.25em] font-medium transition-colors duration-300"
              style={{
                color:
                  activeSection === s.key
                    ? "#2563eb"
                    : hovered === s.key
                    ? "#3b82f6"
                    : "#64748b",
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                onSectionChange(activeSection === s.key ? null : s.key)
              }
              onMouseEnter={() => setHovered(s.key)}
              onMouseLeave={() => setHovered(null)}
            >
              {s.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
