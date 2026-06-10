/**
 * @by oh-my-zerone
 * @date 2026-06-10
 * Adapted from React Bits SpotlightCard
 */
'use client';

import { useRef, type PropsWithChildren, type MouseEventHandler } from 'react';
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

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
