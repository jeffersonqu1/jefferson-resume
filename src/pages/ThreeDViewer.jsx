import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { Link } from "react-router-dom"
import Ship from "../components/Ship"

export default function ThreeDViewer() {
  return (
    <div className="h-screen w-full bg-[#0a0a0a] relative">
      <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 3]} intensity={1} />
        <pointLight position={[-3, 2, -2]} intensity={0.6} color="#4fc3f7" />
        <Stars radius={100} depth={60} count={4000} factor={4} fade speed={1} />
        <Ship />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom
          enablePan
          enableRotate
          minDistance={3}
          maxDistance={20}
        />
      </Canvas>

      {/* Title overlay */}
      <div className="absolute top-20 left-0 right-0 text-center pointer-events-none">
        <h1 className="text-3xl md:text-4xl font-bold text-white/90 tracking-wide">
          Low-Poly Ship Viewer
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Drag to rotate &middot; Scroll to zoom &middot; Right-click to pan
        </p>
      </div>

      {/* Back link */}
      <Link
        to="/"
        className="absolute top-20 left-4 text-sm text-gray-400 hover:text-white transition-colors duration-200 z-10"
      >
        &larr; Back to Home
      </Link>
    </div>
  )
}
