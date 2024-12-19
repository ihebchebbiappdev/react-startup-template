import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 8000; // 8 seconds
    const steps = 30;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= 30) {
          clearInterval(timer);
          onLoadingComplete();
          return 30;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
    >
      <div className="relative flex flex-col items-center justify-center">
        <svg className="w-40 h-40" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#ffffff20"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#700000"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${(count / 30) * 283} 283`}
            transform="rotate(-90 50 50)"
            className="transition-all duration-300 ease-out"
          />
        </svg>
        <div className="absolute text-4xl font-bold text-white">
          {count}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;