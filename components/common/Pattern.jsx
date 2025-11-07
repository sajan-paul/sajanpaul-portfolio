import React from 'react';

const Pattern = () => {
  return (
    <div className="min-h-screen w-full fixed inset-0 z-0" style={{ backgroundColor: '#000' }}>
      {/* Striped Dark */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "repeating-linear-gradient(45deg, #0a0a0a 0px, #121212 3px, #0a0a0a 6px, #1a1a1a 9px)",
        }}
      />
      {/* Very subtle glaze (reduced for visibility) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "rgba(255, 255, 255, 0.01)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />
    </div>
  );
};

export default Pattern;

