import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "../components/Model";
import { Suspense, useRef } from "react";
import CanvasLoader from "../components/CanvasLoader";

export default function Hero() {
  const ref = useRef();

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi! <span className="waving-hand">🎆</span>
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 80 }}>
          <Suspense fallback={<CanvasLoader />}>
            <Stage
              controls={ref}
              preset="rembrandt"
              intensity={1}
              environment="city"
            >
              <Model />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
