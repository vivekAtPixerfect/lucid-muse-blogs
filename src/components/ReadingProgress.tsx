
import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Call once to set initial progress
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted/50 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-150 ease-out shadow-sm"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
