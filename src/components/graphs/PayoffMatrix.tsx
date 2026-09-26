import type { VNode } from "preact";
import { useSketch, SketchGraph, InkLine, Note, Ring, Arrow, INK, INK_SOFT, ACCENT, MARKER } from "./sketch";

// A hand-drawn payoff matrix, solved by best responses. Config:
//   type: payoff-matrix
//   rows: Quantity,Price            (player 1's strategies)
//   cols: Quantity,Price            (player 2's strategies)
//   payoffs: 92.16,92.16;92.02,85.21|85.21,92.02;85.33,85.33   (rows by |, cells by ;)
//   player1: Firm 1
//   player2: Firm 2
// Steps: the game → player 1's best replies (to each column) → player 2's
// best replies (to each row) → Nash cells (both circled), or the chase when
// there is no pure equilibrium (rock-paper-scissors).

interface Props { rows?: string; cols?: string; payoffs?: string; player1?: string; player2?: string; }

export default function PayoffMatrix({ rows = "Up,Down", cols = "Left,Right", payoffs = "3,3;0,5|5,0;1,1", player1 = "Player 1", player2 = "Player 2" }: Props): VNode {
  const rowNames = String(rows).split(",").map((name) => name.trim());
  const colNames = String(cols).split(",").map((name) => name.trim());
  const cells = String(payoffs).split("|").map((row) => row.split(";").map((cell) => cell.split(",").map(Number) as [number, number]));
  const rowCount = rowNames.length, colCount = colNames.length;

  // player 1 best reply to each column; player 2 best reply to each row
  const bestRowForCol = colNames.map((_, col) => {
    const best = Math.max(...cells.map((row) => row[col][0]));
    return cells.map((row, rowIndex) => (row[col][0] === best ? rowIndex : -1)).filter((rowIndex) => rowIndex >= 0);
  });
  const bestColForRow = rowNames.map((_, row) => {
    const best = Math.max(...cells[row].map((cell) => cell[1]));
    return cells[row].map((cell, colIndex) => (cell[1] === best ? colIndex : -1)).filter((colIndex) => colIndex >= 0);
  });
  const nashCells: [number, number][] = [];
  rowNames.forEach((_, row) => colNames.forEach((__, col) => {
    if (bestRowForCol[col].includes(row) && bestColForRow[row].includes(col)) nashCells.push([row, col]);
  }));
  const hasPureNash = nashCells.length > 0;
  const nashText = nashCells.map(([row, col]) => `(${rowNames[row]}, ${colNames[col]})`).join(" and ");

  const NOTES = [
    `${player1} picks a row, ${player2} picks a column. Payoffs are (${player1}, ${player2}).`,
    `${player1}'s best reply to each of ${player2}'s choices: circle the highest first number in each column.`,
    `${player2}'s best reply to each of ${player1}'s choices: circle the highest second number in each row.`,
    hasPureNash
      ? `Nash equilibrium: ${nashText}. Both payoffs are circled, so nobody wants to deviate.`
      : "No cell has both payoffs circled: best replies chase each other round in a cycle. No pure-strategy equilibrium.",
  ];
  const TEX = [
    "u = (u_1,\\ u_2)",
    `\\text{${player1} best replies circled}`,
    `\\text{${player2} best replies circled}`,
    hasPureNash ? `\\text{NE} = ${nashCells.map(([row, col]) => `(\\text{${rowNames[row]}},\\ \\text{${colNames[col]}})`).join(",\\ ")}` : "\\text{no pure NE}",
  ];

  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 1, yMax: 1 }], aspect: 0.52 + 0.1 * rowCount, maxWidth: 560, minHeight: 200, padding: { left: 0, right: 0, top: 0, bottom: 0 } });
  const { show, drawNow, step } = sketch;
  const width = sketch.width, height = sketch.height;
  const headerWidth = Math.min(120, width * 0.24), headerHeight = 44;
  const gridLeft = headerWidth, gridTop = headerHeight;
  const cellWidth = (width - gridLeft - 8) / colCount, cellHeight = (height - gridTop - 8) / rowCount;
  const cellCenter = (row: number, col: number): [number, number] => [gridLeft + (col + 0.5) * cellWidth, gridTop + (row + 0.5) * cellHeight];
  const payoffSize = Math.max(16, Math.min(24, cellWidth / 7));
  const formatPayoff = (value: number) => String(Math.round(value * 100) / 100);

  const drawing: VNode[] = [];
  for (let line = 0; line <= rowCount; line++) drawing.push(<InkLine x1={gridLeft} y1={gridTop + line * cellHeight} x2={gridLeft + colCount * cellWidth} y2={gridTop + line * cellHeight} id={`h-${line}`} color={INK_SOFT} width={1.5} />);
  for (let line = 0; line <= colCount; line++) drawing.push(<InkLine x1={gridLeft + line * cellWidth} y1={gridTop} x2={gridLeft + line * cellWidth} y2={gridTop + rowCount * cellHeight} id={`v-${line}`} color={INK_SOFT} width={1.5} />);
  colNames.forEach((name, col) => drawing.push(<Note x={gridLeft + (col + 0.5) * cellWidth} y={gridTop - 12} text={name} color={MARKER.green} anchor="middle" size={20} />));
  rowNames.forEach((name, row) => drawing.push(<Note x={gridLeft - 12} y={gridTop + (row + 0.5) * cellHeight + 6} text={name} color={MARKER.blue} anchor="end" size={20} />));
  drawing.push(<text x={4} y={16} class="sk-axis-label">{player1} ↓ · {player2} →</text>);

  cells.forEach((row, rowIndex) => row.forEach(([first, second], colIndex) => {
    const [centerX, centerY] = cellCenter(rowIndex, colIndex);
    const firstX = centerX - cellWidth * 0.18, secondX = centerX + cellWidth * 0.18;
    drawing.push(<Note x={firstX} y={centerY + 7} text={formatPayoff(first)} color={MARKER.blue} anchor="middle" size={payoffSize} />);
    drawing.push(<Note x={centerX} y={centerY + 7} text="," color={INK_SOFT} anchor="middle" size={payoffSize} />);
    drawing.push(<Note x={secondX} y={centerY + 7} text={formatPayoff(second)} color={MARKER.green} anchor="middle" size={payoffSize} />);
    const ringRadius = payoffSize * 0.95;
    if (show(1) && bestRowForCol[colIndex].includes(rowIndex)) drawing.push(<Ring x={firstX} y={centerY} radius={ringRadius} id={`p1-${rowIndex}-${colIndex}`} color={MARKER.blue} delay={colIndex * 300} draw={drawNow(1)} />);
    if (show(2) && bestColForRow[rowIndex].includes(colIndex)) drawing.push(<Ring x={secondX} y={centerY} radius={ringRadius} id={`p2-${rowIndex}-${colIndex}`} color={MARKER.green} delay={rowIndex * 300} draw={drawNow(2)} />);
  }));
  if (show(3) && hasPureNash) {
    nashCells.forEach(([row, col]) => {
      const [centerX, centerY] = cellCenter(row, col);
      const left = centerX - cellWidth / 2 + 6, right = centerX + cellWidth / 2 - 6, top = centerY - cellHeight / 2 + 6, bottom = centerY + cellHeight / 2 - 6;
      [[left, top, right, top], [right, top, right, bottom], [right, bottom, left, bottom], [left, bottom, left, top]].forEach(([x1, y1, x2, y2], index) => {
        drawing.push(<InkLine x1={x1} y1={y1} x2={x2} y2={y2} id={`nash-${row}-${col}-${index}`} color={ACCENT} width={2.2} delay={index * 150} duration={220} draw={drawNow(3)} />);
      });
    });
  }
  if (show(3) && !hasPureNash) {
    // chase: from each column's best reply row, player 2 then switches to its best reply, and so on
    let row = 0, col = bestColForRow[0][0];
    for (let move = 0; move < rowCount * 2; move++) {
      const [centerFromX, centerFromY] = cellCenter(row, col);
      const isRowPlayersMove = move % 2 === 0; // player 1 switches row (vertical), then player 2 switches column
      const nextRow = isRowPlayersMove ? bestRowForCol[col][0] : row;
      const nextCol = isRowPlayersMove ? col : bestColForRow[row][0];
      const [centerToX, centerToY] = cellCenter(nextRow, nextCol);
      if (centerFromX === centerToX && centerFromY === centerToY) break;
      // vertical moves run down the right of the cells, horizontal ones along their bottoms
      const fromX = centerFromX + (isRowPlayersMove ? cellWidth * 0.36 : 0), toX = centerToX + (isRowPlayersMove ? cellWidth * 0.36 : 0);
      const fromY = centerFromY + (isRowPlayersMove ? 0 : cellHeight * 0.3), toY = centerToY + (isRowPlayersMove ? 0 : cellHeight * 0.3);
      drawing.push(<Arrow x1={fromX + (toX > fromX ? 14 : toX < fromX ? -14 : 0)} y1={fromY + (toY > fromY ? 16 : toY < fromY ? -16 : 0)} x2={toX} y2={toY} id={`chase-${move}`} color={ACCENT} bend={10} delay={move * 350} draw={drawNow(3)} />);
      row = nextRow; col = nextCol;
    }
  }

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Payoff matrix: ${player1} chooses ${rowNames.join(" or ")}, ${player2} chooses ${colNames.join(" or ")}. ${hasPureNash ? `Nash equilibrium ${nashText}.` : "No pure-strategy Nash equilibrium."}`}>
      {drawing}
    </SketchGraph>
  );
}
