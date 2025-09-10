import React from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator: React.FC = () => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <button
        onClick={scrollToContent}
        className="flex flex-col items-center text-[rgba(var(--foreground),0.6)] hover:text-[rgba(var(--primary),0.8)] transition-colors duration-300 group"
        aria-label="Scroll to content"
      >
        <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
          scroll down to explore
        </span>
        <ChevronDown
          size={24}
          className="animate-bounce-slow group-hover:text-[rgba(var(--primary),0.9)]"
        />
      </button>
    </div>
  );
};

export default ScrollIndicator;
