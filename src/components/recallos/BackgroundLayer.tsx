export function BackgroundLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050A07]">
      <style>{`
        @keyframes beam-travel {
          0% { transform: translateY(100vh); opacity: 0; }
          10% { opacity: 0.15; }
          90% { opacity: 0.15; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
      `}</style>

      {/* Vertical guides base */}
      <div className="vertical-guides absolute inset-0 opacity-20" />

      {/* Moving vertical green light beams */}
      <div className="absolute inset-0 flex justify-evenly opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-[1px] h-[50vh] bg-gradient-to-b from-transparent via-[#7CFF8A] to-transparent"
            style={{
              animation: `beam-travel ${15 + (i % 5) * 5}s linear infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Large radial green glow top center */}
      <div
        className="absolute -top-1/4 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full blur-[120px] opacity-40 animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(124, 255, 138, 0.15) 0%, rgba(15, 42, 24, 0.4) 40%, transparent 70%)",
          animationDuration: "8s",
        }}
      />

      {/* Breathing green aura effects bottom-left */}
      <div
        className="absolute bottom-[-10%] left-[-10%] h-[800px] w-[800px] rounded-full blur-[100px] opacity-30 pulse-dot"
        style={{
          background: "radial-gradient(circle, rgba(101, 255, 154, 0.1) 0%, rgba(15, 42, 24, 0.6) 50%, transparent 70%)",
          animationDuration: "12s",
        }}
      />

      {/* Floating green aura top-right */}
      <div
        className="absolute top-[20%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[100px] opacity-20 float-slow"
        style={{
          background: "radial-gradient(circle, rgba(74, 255, 113, 0.15) 0%, transparent 70%)",
          animationDuration: "10s",
        }}
      />

      {/* Subtle animated particle field using SVG */}
      <svg className="absolute inset-0 h-full w-full opacity-50">
        <defs>
          <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7CFF8A" stopOpacity="1" />
            <stop offset="100%" stopColor="#7CFF8A" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(40)].map((_, i) => {
          const cx = Math.random() * 100;
          const cy = Math.random() * 100;
          const r = Math.random() * 2 + 1;
          const dur = Math.random() * 15 + 10;
          return (
            <circle
              key={i}
              cx={`${cx}%`}
              cy={`${cy}%`}
              r={r}
              fill="url(#particleGlow)"
            >
              <animate
                attributeName="cy"
                values={`${cy}%; ${cy - 10}%; ${cy}%`}
                dur={`${dur}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.2; 0.8; 0.2"
                dur={`${dur / 2}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay" />

      {/* Top and bottom fade for smooth blending */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050A07] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050A07] to-transparent" />
    </div>
  );
}
