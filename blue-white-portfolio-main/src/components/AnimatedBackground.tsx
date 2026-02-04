const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient blob 1 */}
      <div
        className="absolute w-[600px] h-[600px] animate-blob opacity-30"
        style={{
          top: "-10%",
          right: "-5%",
          background: "linear-gradient(135deg, hsla(262, 83%, 58%, 0.4) 0%, hsla(339, 90%, 51%, 0.3) 100%)",
          filter: "blur(80px)",
        }}
      />

      {/* Gradient blob 2 */}
      <div
        className="absolute w-[500px] h-[500px] animate-blob opacity-20"
        style={{
          bottom: "10%",
          left: "-10%",
          background: "linear-gradient(135deg, hsla(339, 90%, 51%, 0.3) 0%, hsla(262, 83%, 58%, 0.2) 100%)",
          filter: "blur(60px)",
          animationDelay: "4s",
        }}
      />

      {/* Gradient blob 3 */}
      <div
        className="absolute w-[400px] h-[400px] animate-blob opacity-15"
        style={{
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "linear-gradient(135deg, hsla(262, 83%, 58%, 0.2) 0%, hsla(339, 90%, 51%, 0.15) 100%)",
          filter: "blur(70px)",
          animationDelay: "2s",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(hsla(262, 83%, 58%, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsla(262, 83%, 58%, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-float"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            backgroundColor: i % 2 === 0 ? "hsla(262, 83%, 58%, 0.3)" : "hsla(339, 90%, 51%, 0.25)",
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${5 + i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
