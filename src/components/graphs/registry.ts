import type { ComponentType } from "preact";
import TwoPartTariff from "./TwoPartTariff";

// Maps a ```graph fenced block's `type:` to its component. Add new graphs here.
export const GRAPHS: Record<string, ComponentType<any>> = {
  "two-part-tariff": TwoPartTariff,
};
