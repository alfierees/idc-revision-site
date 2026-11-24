// Topic icons for course cards. SVG bodies from Lucide (lucide-static 0.460.0, ISC licence),
// drawn on a 24x24 grid with stroke="currentColor". New course? Add its slug below.

const ICONS: Record<string, string> = {
  "book-open": "<path d=\"M12 7v14\" /> <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />",
  "brain-circuit": "<path d=\"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z\" /> <path d=\"M9 13a4.5 4.5 0 0 0 3-4\" /> <path d=\"M6.003 5.125A3 3 0 0 0 6.401 6.5\" /> <path d=\"M3.477 10.896a4 4 0 0 1 .585-.396\" /> <path d=\"M6 18a4 4 0 0 1-1.967-.516\" /> <path d=\"M12 13h4\" /> <path d=\"M12 18h6a2 2 0 0 1 2 2v1\" /> <path d=\"M12 8h8\" /> <path d=\"M16 8V5a2 2 0 0 1 2-2\" /> <circle cx=\"16\" cy=\"13\" r=\".5\" /> <circle cx=\"18\" cy=\"3\" r=\".5\" /> <circle cx=\"20\" cy=\"21\" r=\".5\" /> <circle cx=\"20\" cy=\"8\" r=\".5\" />",
  "calculator": "<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\" /> <line x1=\"8\" x2=\"16\" y1=\"6\" y2=\"6\" /> <line x1=\"16\" x2=\"16\" y1=\"14\" y2=\"18\" /> <path d=\"M16 10h.01\" /> <path d=\"M12 10h.01\" /> <path d=\"M8 10h.01\" /> <path d=\"M12 14h.01\" /> <path d=\"M8 14h.01\" /> <path d=\"M12 18h.01\" /> <path d=\"M8 18h.01\" />",
  "chart-candlestick": "<path d=\"M9 5v4\" /> <rect width=\"4\" height=\"6\" x=\"7\" y=\"9\" rx=\"1\" /> <path d=\"M9 15v2\" /> <path d=\"M17 3v2\" /> <rect width=\"4\" height=\"8\" x=\"15\" y=\"5\" rx=\"1\" /> <path d=\"M17 13v3\" /> <path d=\"M3 3v16a2 2 0 0 0 2 2h16\" />",
  "chart-column": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /> <path d=\"M18 17V9\" /> <path d=\"M13 17V5\" /> <path d=\"M8 17v-3\" />",
  "chart-network": "<path d=\"m13.11 7.664 1.78 2.672\" /> <path d=\"m14.162 12.788-3.324 1.424\" /> <path d=\"m20 4-6.06 1.515\" /> <path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /> <circle cx=\"12\" cy=\"6\" r=\"2\" /> <circle cx=\"16\" cy=\"12\" r=\"2\" /> <circle cx=\"9\" cy=\"15\" r=\"2\" />",
  "chart-scatter": "<circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\" /> <circle cx=\"18.5\" cy=\"5.5\" r=\".5\" fill=\"currentColor\" /> <circle cx=\"11.5\" cy=\"11.5\" r=\".5\" fill=\"currentColor\" /> <circle cx=\"7.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\" /> <circle cx=\"17.5\" cy=\"14.5\" r=\".5\" fill=\"currentColor\" /> <path d=\"M3 3v16a2 2 0 0 0 2 2h16\" />",
  "chart-spline": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /> <path d=\"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7\" />",
  "code-xml": "<path d=\"m18 16 4-4-4-4\" /> <path d=\"m6 8-4 4 4 4\" /> <path d=\"m14.5 4-5 16\" />",
  "database": "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\" /> <path d=\"M3 5V19A9 3 0 0 0 21 19V5\" /> <path d=\"M3 12A9 3 0 0 0 21 12\" />",
  "dice-5": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" /> <path d=\"M16 8h.01\" /> <path d=\"M8 8h.01\" /> <path d=\"M8 16h.01\" /> <path d=\"M16 16h.01\" /> <path d=\"M12 12h.01\" />",
  "earth": "<path d=\"M21.54 15H17a2 2 0 0 0-2 2v4.54\" /> <path d=\"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17\" /> <path d=\"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\" /> <circle cx=\"12\" cy=\"12\" r=\"10\" />",
  "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\" /> <path d=\"M2 12h20\" />",
  "handshake": "<path d=\"m11 17 2 2a1 1 0 1 0 3-3\" /> <path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\" /> <path d=\"m21 3 1 11h-2\" /> <path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\" /> <path d=\"M3 4h8\" />",
  "landmark": "<line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\" /> <line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\" /> <line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\" /> <line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\" /> <line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\" /> <polygon points=\"12 2 20 7 4 7\" />",
  "megaphone": "<path d=\"m3 11 18-5v12L3 14v-3z\" /> <path d=\"M11.6 16.8a3 3 0 1 1-5.8-1.6\" />",
  "microscope": "<path d=\"M6 18h8\" /> <path d=\"M3 22h18\" /> <path d=\"M14 22a7 7 0 1 0 0-14h-1\" /> <path d=\"M9 14h2\" /> <path d=\"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z\" /> <path d=\"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3\" />",
  "rocket": "<path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z\" /> <path d=\"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z\" /> <path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0\" /> <path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\" />",
  "scale": "<path d=\"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /> <path d=\"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /> <path d=\"M7 21h10\" /> <path d=\"M12 3v18\" /> <path d=\"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2\" />",
  "sheet": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" /> <line x1=\"3\" x2=\"21\" y1=\"9\" y2=\"9\" /> <line x1=\"3\" x2=\"21\" y1=\"15\" y2=\"15\" /> <line x1=\"9\" x2=\"9\" y1=\"9\" y2=\"21\" /> <line x1=\"15\" x2=\"15\" y1=\"9\" y2=\"21\" />",
  "shopping-basket": "<path d=\"m15 11-1 9\" /> <path d=\"m19 11-4-7\" /> <path d=\"M2 11h20\" /> <path d=\"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4\" /> <path d=\"M4.5 15.5h15\" /> <path d=\"m5 11 4-7\" /> <path d=\"m9 11 1 9\" />",
  "shopping-cart": "<circle cx=\"8\" cy=\"21\" r=\"1\" /> <circle cx=\"19\" cy=\"21\" r=\"1\" /> <path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\" />",
  "sigma": "<path d=\"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2\" />",
  "square-function": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" /> <path d=\"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3\" /> <path d=\"M9 11.2h5.7\" />",
  "square-terminal": "<path d=\"m7 11 2-2-2-2\" /> <path d=\"M11 13h4\" /> <rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" />",
  "store": "<path d=\"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7\" /> <path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\" /> <path d=\"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4\" /> <path d=\"M2 7h20\" /> <path d=\"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7\" />",
};

const BY_SLUG: Record<string, string> = {
  "accounting": "calculator",
  "computational-thinking-python": "code-xml",
  "databases-sql": "database",
  "digital-marketing": "megaphone",
  "econometrics": "chart-scatter",
  "entrepreneurship": "rocket",
  "excel-data-analysis": "sheet",
  "fundamentals-of-finance": "chart-candlestick",
  "intro-data-science": "chart-network",
  "intro-econometrics": "chart-spline",
  "intro-to-r": "square-terminal",
  "legal-and-tax": "scale",
  "machine-learning": "brain-circuit",
  "macro-economics": "globe",
  "macro-ii": "landmark",
  "maths-for-economists-a": "sigma",
  "maths-for-economists-b": "square-function",
  "micro": "handshake",
  "micro-i": "store",
  "micro-ii": "shopping-basket",
  "principles-of-macro": "earth",
  "principles-of-micro": "shopping-cart",
  "research-methods": "microscope",
  "statistics-a": "dice-5",
  "statistics-b": "chart-column",
};

// Keyword fallback for courses not listed above.
const BY_KEYWORD: [RegExp, string][] = [
  [/python|programming|code/i, "code-xml"],
  [/data ?base|sql/i, "database"],
  [/machine learning|\bai\b/i, "brain-circuit"],
  [/econometric/i, "chart-scatter"],
  [/data/i, "chart-network"],
  [/statistic|probab/i, "chart-column"],
  [/math|calculus|algebra/i, "sigma"],
  [/macro/i, "globe"],
  [/micro/i, "store"],
  [/financ|invest/i, "chart-candlestick"],
  [/account/i, "calculator"],
  [/market/i, "megaphone"],
  [/law|legal|tax/i, "scale"],
  [/entrepreneur|startup|innovation/i, "rocket"],
  [/research|method/i, "microscope"],
  [/excel|spreadsheet/i, "sheet"],
  [/\bR\b/, "square-terminal"],
];

/** Inner SVG markup (24x24, stroked) for a course's topic icon. */
export function courseIconSvg(slug: string, title = ""): string {
  const name = BY_SLUG[slug] ?? BY_KEYWORD.find(([re]) => re.test(title))?.[1] ?? "book-open";
  return ICONS[name] ?? ICONS["book-open"];
}
