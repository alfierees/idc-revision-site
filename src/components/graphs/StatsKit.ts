// Shared maths for the Statistics A graphs: the standard normal CDF (what the
// Z table holds), its inverse, the normal density, and the discrete PMFs from
// Lec 06 and Lec 07.

// Abramowitz and Stegun 7.1.26: |error| < 1.5e-7, far below the table's 4 decimals.
function erf(value: number): number {
  const sign = value < 0 ? -1 : 1;
  const x = Math.abs(value);
  const t = 1 / (1 + 0.3275911 * x);
  const poly = ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t;
  return sign * (1 - poly * Math.exp(-x * x));
}

export const phi = (z: number) => 0.5 * (1 + erf(z / Math.SQRT2));

// The exam reads Φ from a table at z rounded to 2 decimals; do the same so the
// graph's numbers match worked answers (Φ(1.2) = 0.8849, Φ(0.4) = 0.6554).
export const roundZ = (z: number) => Math.round(z * 100) / 100;
export const tablePhi = (z: number) => Math.round(phi(roundZ(z)) * 10000) / 10000;

// Bisection is plenty: Φ is monotone and we only need 2 decimals of z.
export function phiInverse(probability: number): number {
  const p = Math.min(0.9999, Math.max(0.0001, probability));
  let low = -5, high = 5;
  for (let index = 0; index < 60; index++) {
    const mid = (low + high) / 2;
    if (phi(mid) < p) low = mid; else high = mid;
  }
  return (low + high) / 2;
}

export const normalPdf = (x: number, mu: number, sigma: number) =>
  Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma)) / (sigma * Math.sqrt(2 * Math.PI));

export function choose(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  const small = Math.min(k, n - k);
  let result = 1;
  for (let index = 1; index <= small; index++) result = (result * (n - small + index)) / index;
  return result;
}

function factorial(k: number): number {
  let result = 1;
  for (let index = 2; index <= k; index++) result *= index;
  return result;
}

export const binomialPmf = (k: number, n: number, p: number) => choose(n, k) * p ** k * (1 - p) ** (n - k);
export const geometricPmf = (k: number, p: number) => (k < 1 ? 0 : (1 - p) ** (k - 1) * p);
export const poissonPmf = (k: number, lambda: number) => Math.exp(-lambda) * lambda ** k / factorial(k);
export const hypergeometricPmf = (k: number, N: number, D: number, n: number) =>
  (choose(D, k) * choose(N - D, n - k)) / choose(N, n);
