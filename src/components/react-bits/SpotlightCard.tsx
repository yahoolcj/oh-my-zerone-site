/**
 * @by oh-my-zerone
 * @date 2026-06-10
 * Adapted from React Bits SpotlightCard
 */
'use client';

import { useRef, useEffect, type PropsWithChildren, type MouseEventHandler } from 'react';
import './SpotlightCard.css';

interface SpotlightCardProps extends PropsWithChildren {
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(16, 185, 129, 0.18)',
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const pointerRafRef = useRef<number | null>(null);
  const pendingPointerRef = useRef<{ x: number; y: number } | null>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const el = divRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    pendingPointerRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    if (pointerRafRef.current !== null) return;

    pointerRafRef.current = requestAnimationFrame(() => {
      pointerRafRef.current = null;
      const pending = pendingPointerRef.current;
      const target = divRef.current;
      if (!pending || !target) return;
      target.style.setProperty('--mouse-x', `${pending.x}px`);
      target.style.setProperty('--mouse-y', `${pending.y}px`);
      target.style.setProperty('--spotlight-color', spotlightColor);
    });
  };

  useEffect(() => {
    return () => {
      if (pointerRafRef.current !== null) {
        cancelAnimationFrame(pointerRafRef.current);
      }
    };
  }, []);

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
