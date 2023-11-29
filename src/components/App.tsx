import { HomeScene } from "@/scenes/index";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <main className="app">
        <section className="hero">
          <h1>WEB 3D</h1>
        </section>
      </main>
      <Canvas
        className="canvas"
        shadows
        camera={{ position: [40, 30, 60], fov: 15 }}>
        <HomeScene />
      </Canvas>
    </>
  );
}

export default App;
