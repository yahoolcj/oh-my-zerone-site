/**
 * @by oh-my-zerone
 * @date 2026-06-10
 * React Bits Light Pillar 官方演示参数
 */
'use client';

import { useReducedMotion } from 'motion/react';
import LightPillar from './LightPillar';

export function HeroLightPillar() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className="hero-pillar-fallback pointer-events-none absolute inset-0" aria-hidden="true" />;
  }

  return (
    <LightPillar
      topColor="#00e95c"
      bottomColor="#2d7b2b"
      intensity={1}
      rotationSpeed={0.3}
      glowAmount={0.002}
      pillarWidth={3}
      pillarHeight={0.4}
      noiseIntensity={0.5}
      pillarRotation={25}
      quality="medium"
      mixBlendMode="screen"
      interactive={false}
      className="pointer-events-none"
    />
  );
}
