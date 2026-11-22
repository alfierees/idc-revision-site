import type { VNode } from "preact";
import { useSketch, SketchGraph } from "./sketch";
import { AugmentedMatrix } from "./MathsBShared";

// Lesson 10 slide example: Gauss-Jordan on a 3 × 3 system, one row operation
// per step, ending at the solution (2, −1, 4).

interface ReductionStep { rows: number[][]; operation: string; note: string; activeRow?: number; pivots: string[]; }

const STEPS: ReductionStep[] = [
  { rows: [[2, 8, 6, 20], [4, 2, -2, -2], [3, -1, 1, 11]], operation: "\\text{Start: the augmented matrix}", note: "Write the system as a matrix: coefficients on the left, constants on the right.", pivots: [] },
  { rows: [[1, 4, 3, 10], [4, 2, -2, -2], [3, -1, 1, 11]], operation: "R_1 \\to \\tfrac{1}{2} R_1", note: "Make the first pivot a 1.", activeRow: 0, pivots: ["0,0"] },
  { rows: [[1, 4, 3, 10], [0, -14, -14, -42], [3, -1, 1, 11]], operation: "R_2 \\to R_2 - 4R_1", note: "Cancel x from row 2.", activeRow: 1, pivots: ["0,0"] },
  { rows: [[1, 4, 3, 10], [0, -14, -14, -42], [0, -13, -8, -19]], operation: "R_3 \\to R_3 - 3R_1", note: "Cancel x from row 3. Column 1 is done.", activeRow: 2, pivots: ["0,0"] },
  { rows: [[1, 4, 3, 10], [0, 1, 1, 3], [0, -13, -8, -19]], operation: "R_2 \\to -\\tfrac{1}{14} R_2", note: "Next variable, next row: make the second pivot a 1.", activeRow: 1, pivots: ["0,0", "1,1"] },
  { rows: [[1, 0, -1, -2], [0, 1, 1, 3], [0, -13, -8, -19]], operation: "R_1 \\to R_1 - 4R_2", note: "Cancel y above the pivot.", activeRow: 0, pivots: ["0,0", "1,1"] },
  { rows: [[1, 0, -1, -2], [0, 1, 1, 3], [0, 0, 5, 20]], operation: "R_3 \\to R_3 + 13R_2", note: "Cancel y below the pivot. Column 2 is done.", activeRow: 2, pivots: ["0,0", "1,1"] },
  { rows: [[1, 0, -1, -2], [0, 1, 1, 3], [0, 0, 1, 4]], operation: "R_3 \\to \\tfrac{1}{5} R_3", note: "Make the third pivot a 1.", activeRow: 2, pivots: ["0,0", "1,1", "2,2"] },
  { rows: [[1, 0, 0, 2], [0, 1, 1, 3], [0, 0, 1, 4]], operation: "R_1 \\to R_1 + R_3", note: "Cancel z from row 1.", activeRow: 0, pivots: ["0,0", "1,1", "2,2"] },
  { rows: [[1, 0, 0, 2], [0, 1, 0, -1], [0, 0, 1, 4]], operation: "R_2 \\to R_2 - R_3 \\;\\Rightarrow\\; (x, y, z) = (2, -1, 4)", note: "Reduced echelon form. Read the solution straight off the last column.", activeRow: 1, pivots: ["0,0", "1,1", "2,2"] },
];

export default function MathsBRowReduction(): VNode {
  const sketch = useSketch({
    stepCount: STEPS.length,
    domains: [{ xMax: 1, yMax: 1 }],
    aspect: 0.5, minHeight: 190, maxHeight: 230, maxWidth: 520, padding: { left: 8, right: 8, top: 6, bottom: 6 },
  });
  const current = STEPS[sketch.step];
  return (
    <SketchGraph sketch={sketch} note={current.note} tex={current.operation}
      ariaLabel={`Gauss-Jordan elimination, step ${sketch.step + 1} of ${STEPS.length}. Rows: ${current.rows.map((row) => row.join(" ")).join("; ")}.`}>
      <AugmentedMatrix frame={sketch.frames[0]} rows={current.rows} activeRow={current.activeRow} pivots={current.pivots} />
    </SketchGraph>
  );
}
