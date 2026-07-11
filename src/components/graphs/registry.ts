import type { ComponentType } from "preact";
import TwoPartTariff from "./TwoPartTariff";
import MonopolyCsDwl from "./MonopolyCsDwl";
import PriceDiscrimination3rd from "./PriceDiscrimination3rd";
import OligopolyStructures from "./OligopolyStructures";
import CournotReaction from "./CournotReaction";
import PerfectCompetitionFirm from "./PerfectCompetitionFirm";
import BertrandDiffReaction from "./BertrandDiffReaction";
import GoodsMarketEquilibrium from "./GoodsMarketEquilibrium";

// Maps a ```graph fenced block's `type:` to its component. Add new graphs here.
export const GRAPHS: Record<string, ComponentType<any>> = {
  "two-part-tariff": TwoPartTariff,
  "monopoly-cs-dwl": MonopolyCsDwl,
  "price-discrimination-3rd": PriceDiscrimination3rd,
  "oligopoly-structures": OligopolyStructures,
  "cournot-reaction": CournotReaction,
  "perfect-competition-firm": PerfectCompetitionFirm,
  "bertrand-diff-reaction": BertrandDiffReaction,
  "goods-market": GoodsMarketEquilibrium,
};
