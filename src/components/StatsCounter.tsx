import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  label,
  decimals = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1600; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const val = easeProgress * value;
      setCurrentValue(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentValue(value);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value]);

  const formattedNumber = decimals > 0 
    ? currentValue.toFixed(decimals) 
    : Math.floor(currentValue).toLocaleString();

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 tabular-nums">
        <span>{prefix}</span>
        <span>{formattedNumber}</span>
        <span className="text-neutral-500 font-medium text-2xl md:text-3xl ml-0.5">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-neutral-600 font-medium leading-snug">
        {label}
      </p>
    </div>
  );
};

export default StatsCounter;
