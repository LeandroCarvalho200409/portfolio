import './App.css'

function App() {

  const LuxuryTrimBackground = () => (
  <svg
    viewBox="0 0 1440 600"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full"
  >
    <defs>
      {/* Warm base gradient (wood / sunset vibe) */}
      <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0b1220" />
        <stop offset="50%" stopColor="#1a1208" />
        <stop offset="100%" stopColor="#2a1608" />
      </linearGradient>

      {/* Subtle warm glow */}
      <radialGradient id="warmGlow" cx="70%" cy="45%" r="40%">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Base */}
    <rect width="100%" height="100%" fill="url(#baseGradient)" />

    {/* Chrome lines */}
    <g stroke="white" strokeOpacity="0.14" strokeWidth="1">
      {Array.from({ length: 22 }).map((_, i) => (
        <line
          key={i}
          x1={-200 + i * 80}
          y1="0"
          x2={200 + i * 80}
          y2="600"
        >
          <animate
            attributeName="x1"
            from={-200 + i * 80}
            to={-160 + i * 80}
            dur="45s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            from={200 + i * 80}
            to={240 + i * 80}
            dur="45s"
            repeatCount="indefinite"
          />
        </line>
      ))}
    </g>

    {/* Warm glow overlay */}
    <rect width="100%" height="100%" fill="url(#warmGlow)" />
  </svg>
);

  return (
    <div className="relative min-h-screen bg-base-100 text-base-content overflow-hidden">
      <LuxuryTrimBackground />
      <div className="relative z-10">
        {/* Your content */}
      </div>
    </div>
  )
}

export default App
