// Small, dependency-free statistics helpers for the econometrics sketch graphs.
// Every simulated dataset is seeded, so a graph shows the same "random" sample
// on every visit (and the sample is labelled as simulated on the graph).

import { seededRandom } from "./sketch";

// Standard normal draws (Box–Muller) from a seeded uniform source.
export function normalSampler(seed: number): () => number {
  const uniform = seededRandom(seed);
  let spare: number | null = null;
  return () => {
    if (spare !== null) { const value = spare; spare = null; return value; }
    let first = 0, second = 0;
    while (first === 0) first = uniform();
    second = uniform();
    const radius = Math.sqrt(-2 * Math.log(first));
    spare = radius * Math.sin(2 * Math.PI * second);
    return radius * Math.cos(2 * Math.PI * second);
  };
}

export const normalPdf = (value: number) => Math.exp(-0.5 * value * value) / Math.sqrt(2 * Math.PI);

// Normal CDF via the Abramowitz–Stegun erf approximation (error < 1.5e-7).
export function normalCdf(value: number): number {
  const scaled = Math.abs(value) / Math.SQRT2;
  const t = 1 / (1 + 0.3275911 * scaled);
  const erf = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-scaled * scaled);
  return value >= 0 ? 0.5 * (1 + erf) : 0.5 * (1 - erf);
}

export const logistic = (value: number) => 1 / (1 + Math.exp(-value));

export interface LineFit { intercept: number; slope: number; rSquared: number; }

// Ordinary least squares of y on x (with an intercept).
export function fitLine(xs: number[], ys: number[]): LineFit {
  const count = xs.length;
  const meanX = xs.reduce((sum, value) => sum + value, 0) / count;
  const meanY = ys.reduce((sum, value) => sum + value, 0) / count;
  let covariance = 0, varianceX = 0, varianceY = 0;
  for (let index = 0; index < count; index++) {
    covariance += (xs[index] - meanX) * (ys[index] - meanY);
    varianceX += (xs[index] - meanX) ** 2;
    varianceY += (ys[index] - meanY) ** 2;
  }
  const slope = varianceX === 0 ? 0 : covariance / varianceX;
  const rSquared = varianceX === 0 || varianceY === 0 ? 0 : (covariance * covariance) / (varianceX * varianceY);
  return { intercept: meanY - slope * meanX, slope, rSquared };
}

export const mean = (values: number[]) => values.reduce((sum, value) => sum + value, 0) / values.length;
