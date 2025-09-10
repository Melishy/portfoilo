import React from "react";

const AnimatedGradient: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[rgb(var(--background))]" />

      {/* Gradient blobs that move slowly */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 bg-[rgba(var(--primary),0.3)] blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-20 bg-[rgba(var(--accent),0.2)] blur-[120px] animate-pulse-slow [animation-delay:2s]"></div>
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full opacity-25 bg-[rgba(var(--secondary),0.25)] blur-[80px] animate-pulse-slow [animation-delay:4s]"></div>
    </div>
  );
};

export default AnimatedGradient;
