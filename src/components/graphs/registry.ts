import type { ComponentType } from "preact";
import TwoPartTariff from "./TwoPartTariff";
import MonopolyCsDwl from "./MonopolyCsDwl";
import PriceDiscrimination3rd from "./PriceDiscrimination3rd";
import OligopolyStructures from "./OligopolyStructures";
import CournotReaction from "./CournotReaction";
import PerfectCompetitionFirm from "./PerfectCompetitionFirm";
import BertrandDiffReaction from "./BertrandDiffReaction";
import GoodsMarketEquilibrium from "./GoodsMarketEquilibrium";
import LeakageTimeline from "./LeakageTimeline";
import SplitShuffler from "./SplitShuffler";
import IncomeMixup from "./IncomeMixup";
import ZeroFill from "./ZeroFill";
import BaselineMachine from "./BaselineMachine";
import ThresholdMoney from "./ThresholdMoney";
import OverfitCurves from "./OverfitCurves";
import AxisTruncation from "./AxisTruncation";

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
  // ML loan-pipeline walkthrough interactives
  "leakage-timeline": LeakageTimeline,
  "split-shuffler": SplitShuffler,
  "income-mixup": IncomeMixup,
  "zero-fill": ZeroFill,
  "baseline-machine": BaselineMachine,
  "threshold-money": ThresholdMoney,
  "overfit-curves": OverfitCurves,
  "axis-truncation": AxisTruncation,
};
