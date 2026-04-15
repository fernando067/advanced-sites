

## Analysis: WebGPU Hero Component

### Critical Issues

This component **cannot work** in this environment for several reasons:

1. **WebGPU dependency** — It uses `three/webgpu`, `THREE.WebGPURenderer`, and `three/tsl` (Three Shading Language). WebGPU is not supported in the sandbox preview browser (`navigator.gpu` is undefined), so the component would render nothing or crash.

2. **Incomplete JSX** — The pasted code has all JSX markup stripped from the `Scene` return, the `Html` return, and the `Canvas` section. The mesh geometry, material assignments, div containers, CSS classes, and Canvas props are all missing. This makes it impossible to reconstruct the exact intended output.

3. **`'use client'` directive** — This is a Next.js convention; the project uses Vite + React, so it's irrelevant (harmless but unnecessary).

4. **Heavy bundle impact** — `three` adds ~600KB+ to the bundle, which conflicts with the "tempo de carregamento otimizado" goal for this landing page.

### Proposed Alternative

Instead of the broken WebGPU component, I can create a **visually equivalent hero effect** using technologies that actually work:

- **Canvas 2D or WebGL (standard)** — A depth-parallax image effect with the same scanning red line animation and bloom glow, using standard Three.js WebGL renderer (`@react-three/fiber` with the default renderer)
- **Same visual concept** — Depth map displacement on mouse move, scanning line effect, dot-grid overlay, bloom post-processing (all achievable with standard WebGL/shaders)
- **Same animated text** — Glitch-style word-by-word reveal with the scroll indicator
- **Fallback safe** — Works in all modern browsers including the sandbox

### Implementation Plan

1. **Install dependencies**: `three@^0.160`, `@react-three/fiber@^8.18`, `@react-three/drei@^9.122.0`
2. **Create `src/components/ui/hero-futuristic.tsx`** — Rewrite the component using standard WebGL:
   - Replace `THREE.WebGPURenderer` with default WebGL renderer
   - Convert TSL node materials to GLSL shader materials (same visual: depth displacement, dot grid, scan line, bloom)
   - Use `@react-three/postprocessing` (UnrealBloomPass) instead of TSL bloom
   - Keep the animated text overlay and scroll indicator
3. **Integrate into HeroSection** — Replace or augment the current hero mockup image with the 3D depth-parallax effect
4. **Add WebGL fallback** — If WebGL is unavailable, fall back to the existing static hero image

### What You Get

The same premium visual effect — a depth-aware parallax image with a red scanning line, dot-grid overlay, bloom glow, and animated text — but built on WebGL which works everywhere.

