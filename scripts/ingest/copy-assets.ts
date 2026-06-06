import { copyFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname } from "node:path";
import type { ImageOp, DocOp } from "./types.js";

export interface CopyAssetsInput {
  imageOps: ImageOp[];
  docOps: DocOp[];
}

export async function copyAssets(input: CopyAssetsInput): Promise<void> {
  for (const op of [...input.imageOps, ...input.docOps]) {
    if (!existsSync(op.from)) continue; // silent skip
    if (existsSync(op.to)) continue;    // never overwrite
    await mkdir(dirname(op.to), { recursive: true });
    await copyFile(op.from, op.to);
  }
}
