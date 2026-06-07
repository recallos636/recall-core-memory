export function BackgroundLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0c0c0c]">
      {/* Vertical guides */}
      <div className="vertical-guides absolute inset-0 opacity-60" />

      {/* Radial cyan glow top */}
      <div
        className="absolute -top-1/3 left-1/2 h-[1100px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,210,255,0.25), rgba(11,37,81,0.18) 45%, transparent 75%)",
        }}
      />

      {/* Deep blue blob bottom-left */}
      <div
        className="absolute bottom-[-20%] left-[-10%] h-[700px] w-[700px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(11,37,81,0.7), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 right-[-15%] h-[600px] w-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(164,244,253,0.18), transparent 70%)",
        }}
      />

      {/* Noise overlay via inline SVG */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
    </div>
  );
}
