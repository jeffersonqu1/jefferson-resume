import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Ship() {
  const group = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    group.current.position.y = Math.sin(t * 0.8) * 0.15
    group.current.rotation.z = Math.sin(t * 0.6) * 0.04
    group.current.rotation.x = Math.sin(t * 0.5) * 0.02
  })

  return (
    <group ref={group}>
      {/* Hull */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.6, 1.2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Bow (front wedge) */}
      <mesh position={[1.95, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.6, 0.9, 4]} />
        <meshStandardMaterial color="#A0522D" />
      </mesh>

      {/* Deck */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[2.8, 0.08, 1.1]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>

      {/* Cabin */}
      <mesh position={[-0.8, 0.75, 0]}>
        <boxGeometry args={[0.9, 0.7, 0.8]} />
        <meshStandardMaterial color="#D2691E" />
      </mesh>

      {/* Cabin roof */}
      <mesh position={[-0.8, 1.18, 0]}>
        <boxGeometry args={[1, 0.1, 0.9]} />
        <meshStandardMaterial color="#A52A2A" />
      </mesh>

      {/* Mast */}
      <mesh position={[0.3, 1.5, 0]}>
        <cylinderGeometry args={[0.04, 0.05, 2.4, 8]} />
        <meshStandardMaterial color="#F5DEB3" />
      </mesh>

      {/* Sail */}
      <mesh position={[0.65, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <coneGeometry args={[1, 1.2, 3]} />
        <meshStandardMaterial color="#FFFAF0" opacity={0.92} transparent />
      </mesh>

      {/* Flag */}
      <mesh position={[0.3, 2.8, 0]}>
        <boxGeometry args={[0.35, 0.2, 0.02]} />
        <meshStandardMaterial color="#DC143C" />
      </mesh>

      {/* Rudder */}
      <mesh position={[-1.55, -0.25, 0]}>
        <boxGeometry args={[0.08, 0.5, 0.3]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Railing posts */}
      {[-0.6, 0, 0.6, 1.2].map((x, i) => (
        <mesh key={i} position={[x, 0.55, 0.55]}>
          <cylinderGeometry args={[0.02, 0.02, 0.35, 6]} />
          <meshStandardMaterial color="#DEB887" />
        </mesh>
      ))}
      {[-0.6, 0, 0.6, 1.2].map((x, i) => (
        <mesh key={`r${i}`} position={[x, 0.55, -0.55]}>
          <cylinderGeometry args={[0.02, 0.02, 0.35, 6]} />
          <meshStandardMaterial color="#DEB887" />
        </mesh>
      ))}

      {/* Water plane */}
      <mesh position={[0, -0.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#1a6ea0" opacity={0.35} transparent />
      </mesh>
    </group>
  )
}
