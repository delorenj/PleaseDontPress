import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const imageUrls = [
  "https://picsum.photos/40?random=1",
  "https://picsum.photos/40?random=2",
  "https://picsum.photos/40?random=3",
  "https://picsum.photos/40?random=4",
  "https://picsum.photos/40?random=5",
];

export default function App() {
  const [currentSquare, setCurrentSquare] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const gridSize = 40 * 40; // 1600 squares

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSquare((prev) => (prev + 1) % gridSize);
    }, 50);
    return () => clearInterval(interval);
  }, [gridSize]);

  const handleButtonClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background text-foreground">
      {/* Grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)]">
        {[...Array(gridSize)].map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-full h-full border border-border relative",
              index === currentSquare && "bg-primary/50",
            )}
          >
            {index < clickCount && (
              <img
                src={imageUrls[index % imageUrls.length]}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <Button
        onClick={handleButtonClick}
        size="lg"
        className="z-10 text-4xl sm:text-6xl py-8 px-12 sm:py-16 sm:px-32 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out max-w-[90vw] text-center"
      >
        Please do not press. Please.
      </Button>

      {/* Additional text */}
      <p className="z-10 mt-8 text-xl sm:text-2xl font-bold text-center max-w-[80%]">
        Seriously, we mean it. Don't press that button. It's not a good idea.
        Really.
      </p>
    </main>
  );
}
