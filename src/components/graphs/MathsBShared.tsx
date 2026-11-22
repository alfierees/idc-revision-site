import type { VNode } from "preact";
import { INK, INK_SOFT, ACCENT, WASH, fmt, type Frame } from "./sketch";

// Helpers shared by the Maths for Economists B explainers: level curves of a
// two-variable function (marching squares) and an augmented-matrix drawing.

type SurfaceFunction = (dataX: number, dataY: number) => number;

// SVG path of the curve f(x, y) = level across the whole frame.
export function contourPath(frame: Frame, surface: SurfaceFunction, level: number, cells = 72): string {
  const cellWidth = (frame.xMax - frame.xMin) / cells, cellHeight = (frame.yMax - frame.yMin) / cells;
  const crossing = (x1: number, y1: number, value1: number, x2: number, y2: number, value2: number): [number, number] => {
    const share = (level - value1) / (value2 - value1 || 1e-9);
    return [frame.x(x1 + (x2 - x1) * share), frame.y(y1 + (y2 - y1) * share)];
  };
  const segments: string[] = [];
  const addSegment = (start: [number, number], end: [number, number]) =>
    segments.push(`M${start[0].toFixed(1)},${start[1].toFixed(1)}L${end[0].toFixed(1)},${end[1].toFixed(1)}`);
  for (let columnIndex = 0; columnIndex < cells; columnIndex++) {
    for (let rowIndex = 0; rowIndex < cells; rowIndex++) {
      const left = frame.xMin + columnIndex * cellWidth, right = left + cellWidth;
      const lower = frame.yMin + rowIndex * cellHeight, upper = lower + cellHeight;
      const lowerLeft = surface(left, lower), lowerRight = surface(right, lower);
      const upperRight = surface(right, upper), upperLeft = surface(left, upper);
      if (![lowerLeft, lowerRight, upperRight, upperLeft].every(Number.isFinite)) continue;
      const caseIndex = (lowerLeft > level ? 1 : 0) | (lowerRight > level ? 2 : 0) | (upperRight > level ? 4 : 0) | (upperLeft > level ? 8 : 0);
      if (caseIndex === 0 || caseIndex === 15) continue;
      const bottomEdge = () => crossing(left, lower, lowerLeft, right, lower, lowerRight);
      const rightEdge = () => crossing(right, lower, lowerRight, right, upper, upperRight);
      const topEdge = () => crossing(left, upper, upperLeft, right, upper, upperRight);
      const leftEdge = () => crossing(left, lower, lowerLeft, left, upper, upperLeft);
      switch (caseIndex) {
        case 1: case 14: addSegment(leftEdge(), bottomEdge()); break;
        case 2: case 13: addSegment(bottomEdge(), rightEdge()); break;
        case 3: case 12: addSegment(leftEdge(), rightEdge()); break;
        case 4: case 11: addSegment(topEdge(), rightEdge()); break;
        case 6: case 9: addSegment(bottomEdge(), topEdge()); break;
        case 7: case 8: addSegment(leftEdge(), topEdge()); break;
        case 5: addSegment(leftEdge(), topEdge()); addSegment(bottomEdge(), rightEdge()); break;
        case 10: addSegment(leftEdge(), bottomEdge()); addSegment(topEdge(), rightEdge()); break;
      }
    }
  }
  return segments.join("");
}

export function ContourLine(props: { frame: Frame; surface: SurfaceFunction; level: number; color: string; width?: number; opacity?: number; draw?: boolean; delay?: number; clipPath?: string }): VNode {
  return (
    <path
      d={contourPath(props.frame, props.surface, props.level)}
      clip-path={props.clipPath}
      class={props.draw ? "sk-fade" : undefined}
      style={`fill:none;stroke:${props.color};stroke-width:${props.width ?? 1.6};stroke-linecap:round;opacity:${props.opacity ?? 1};--d:${props.delay ?? 0}ms`}
    />
  );
}

// An augmented matrix, drawn to fit the frame. `activeRow` gets a wash, and the
// cells listed in `pivots` ("row,column") are ringed in the accent colour.
export function AugmentedMatrix(props: {
  frame: Frame; rows: (number | string)[][]; activeRow?: number; pivots?: string[]; badRow?: number; decimals?: number;
}): VNode {
  const { frame, rows } = props;
  const columnCount = rows[0].length;
  const usableWidth = Math.min(frame.right - frame.left, 420);
  const leftEdge = frame.left + (frame.right - frame.left - usableWidth) / 2;
  const columnWidth = usableWidth / (columnCount + 0.4);
  const rowHeight = Math.min((frame.bottom - frame.top) / rows.length, 52);
  const topEdge = frame.top + (frame.bottom - frame.top - rowHeight * rows.length) / 2;
  const cellX = (columnIndex: number) => leftEdge + columnWidth * (columnIndex + 0.5) + (columnIndex === columnCount - 1 ? columnWidth * 0.4 : 0);
  const cellY = (rowIndex: number) => topEdge + rowHeight * (rowIndex + 0.5);
  const bottomEdge = topEdge + rowHeight * rows.length;
  const rightEdge = leftEdge + usableWidth;
  const bracket = (x: number, direction: 1 | -1) => `M${x + 8 * direction},${topEdge} L${x},${topEdge} L${x},${bottomEdge} L${x + 8 * direction},${bottomEdge}`;
  const separatorX = leftEdge + columnWidth * (columnCount - 1) + columnWidth * 0.2;
  const label = (value: number | string) => (typeof value === "number" ? fmt(value, props.decimals ?? 2) : value);
  return (
    <g>
      {props.activeRow !== undefined && <rect x={leftEdge + 3} y={topEdge + rowHeight * props.activeRow + 2} width={usableWidth - 6} height={rowHeight - 4} rx={6} style={`fill:${WASH.amber}`} />}
      {props.badRow !== undefined && <rect x={leftEdge + 3} y={topEdge + rowHeight * props.badRow + 2} width={usableWidth - 6} height={rowHeight - 4} rx={6} style={`fill:${WASH.red}`} />}
      <path d={bracket(leftEdge, 1)} style={`fill:none;stroke:${INK_SOFT};stroke-width:1.8`} />
      <path d={bracket(rightEdge, -1)} style={`fill:none;stroke:${INK_SOFT};stroke-width:1.8`} />
      <line x1={separatorX} y1={topEdge + 3} x2={separatorX} y2={bottomEdge - 3} style={`stroke:${INK_SOFT};stroke-width:1.2`} />
      {rows.map((row, rowIndex) => row.map((value, columnIndex) => {
        const isPivot = props.pivots?.includes(`${rowIndex},${columnIndex}`);
        return (
          <g>
            {isPivot && <circle cx={cellX(columnIndex)} cy={cellY(rowIndex)} r={Math.min(15, rowHeight * 0.38)} style={`fill:none;stroke:${ACCENT};stroke-width:1.8`} />}
            <text x={cellX(columnIndex)} y={cellY(rowIndex) + 5} text-anchor="middle" style={`font:600 ${String(label(value)).length > 3 ? 13 : 15}px var(--font-sans, sans-serif);fill:${INK}`}>{label(value)}</text>
          </g>
        );
      }))}
    </g>
  );
}
