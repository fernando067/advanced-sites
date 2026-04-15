import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, useAspect } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useMemo, useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';

const TEXTUREMAP = 'https://i.postimg.cc/XYwvXN8D/img-4.png';
const DEPTHMAP = 'https://i.postimg.cc/2SHKQh2q/raw-4.webp';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform sampler2D uDepth;
  uniform vec2 uPointer;
  uniform float uProgress;
  uniform float uTime;
  uniform float uAspect;
  varying vec2 vUv;

  // Simple cell noise approximation
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    float depth = texture2D(uDepth, vUv).r;
    
    // Depth-based parallax displacement
    float strength = 0.01;
    vec2 displaced = vUv + depth * uPointer * strength;
    vec4 color = texture2D(uTexture, displaced);
    
    // Dot grid overlay
    float aspect = uAspect;
    vec2 tUv = vec2(vUv.x * aspect, vUv.y);
    vec2 tiling = vec2(120.0);
    vec2 tiledUv = mod(tUv * tiling, 2.0) - 1.0;
    float brightness = hash(floor(tUv * tiling * 0.5));
    float dist = length(tiledUv);
    float dot = smoothstep(0.5, 0.49, dist) * brightness;
    
    // Scanning flow effect
    float flow = 1.0 - smoothstep(0.0, 0.02, abs(depth - uProgress));
    vec3 mask = vec3(dot * flow) * vec3(10.0, 0.0, 0.0);
    
    // Blend screen
    vec3 result = 1.0 - (1.0 - color.rgb) * (1.0 - mask);
    
    // Scan line overlay
    float scanWidth = 0.05;
    float scanLine = smoothstep(0.0, scanWidth, abs(vUv.y - uProgress));
    vec3 redOverlay = vec3(1.0, 0.0, 0.0) * (1.0 - scanLine) * 0.4;
    float scanMix = smoothstep(0.9, 1.0, 1.0 - scanLine);
    result = mix(result, result + redOverlay, scanMix);
    
    gl_FragColor = vec4(result, 1.0);
  }
`;

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP, DEPTHMAP]);
  const meshRef = useRef<THREE.Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) setVisible(true);
  }, [rawMap, depthMap]);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: rawMap },
      uDepth: { value: depthMap },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uProgress: { value: 0 },
      uTime: { value: 0 },
      uAspect: { value: WIDTH / HEIGHT },
    }),
    [rawMap, depthMap]
  );

  const [w, h] = useAspect(WIDTH, HEIGHT);
  const scaleFactor = 0.4;

  useFrame(({ clock, pointer }) => {
    uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uPointer.value.set(pointer.x, pointer.y);

    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, visible ? 1 : 0, 0.07);
    }
  });

  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        opacity={0}
      />
    </mesh>
  );
};

const FuturisticCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 50 }}
    style={{ position: 'absolute', inset: 0 }}
    gl={{ antialias: true, alpha: true }}
  >
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
    <EffectComposer>
      <Bloom luminanceThreshold={1} luminanceSmoothing={0.5} intensity={1} />
    </EffectComposer>
  </Canvas>
);

// Animated text overlay
export const HeroFuturisticOverlay = () => {
  const titleWords = 'Seu site não vende?'.split(' ');
  const subtitle = 'Nós criamos o que converte.';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords((v) => v + 1), 500);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 600);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
      <div className="text-center px-4">
        <h1 className="heading-xl mb-4">
          {titleWords.map((word, index) => (
            <span
              key={index}
              className="inline-block mr-3 transition-all duration-500"
              style={{
                opacity: index < visibleWords ? 1 : 0,
                transform: index < visibleWords ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 0.05}s`,
              }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p
          className="body-lg gradient-text transition-all duration-700"
          style={{
            opacity: subtitleVisible ? 1 : 0,
            transform: subtitleVisible ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground text-sm transition-opacity duration-1000"
        style={{ opacity: subtitleVisible ? 1 : 0 }}
      >
        <span>Role para explorar</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-bounce">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export { FuturisticCanvas };
export default FuturisticCanvas;
