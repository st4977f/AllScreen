// Adaptive scaling: 1440px → 0.55, 3440px → 1, interpolate/extrapolate for others

export function getAdaptiveScale(width: number) { 
  const minW = 1440, maxW = 3440, minS = 0.55, maxS = 1; 
  if (width <= minW) return minS * (width / minW);  // extrapolate down
  if (width >= maxW) return maxS * (width / maxW); // extrapolate up
  return minS + ((width - minW) / (maxW - minW)) * (maxS - minS); //interpolate
}