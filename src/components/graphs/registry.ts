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
// econometrics sketch explainers
import DiffInDiff from "./DiffInDiff";
import ParallelTrends from "./ParallelTrends";
import LpmProblems from "./LpmProblems";
import BinaryCurves from "./BinaryCurves";
import WeakInstrument from "./WeakInstrument";
import SampleSelection from "./SampleSelection";
import SupplyShiftIdentification from "./SupplyShiftIdentification";
import SerialCorrelation from "./SerialCorrelation";
import TimeTrends from "./TimeTrends";
import EventStudy from "./EventStudy";
import FixedEffects from "./FixedEffects";
import RegressionDiscontinuity from "./RegressionDiscontinuity";
import CausalDiagram from "./CausalDiagram";
// micro sketch explainers
import ReactionFunctions from "./ReactionFunctions";
import ProfitBars from "./ProfitBars";
import UniformPricing from "./UniformPricing";
import StructureComparison from "./StructureComparison";
import PayoffMatrix from "./PayoffMatrix";
import MixedStrategyBR from "./MixedStrategyBR";
import Bundling from "./Bundling";
import LemonsThreshold from "./LemonsThreshold";
import RiskAversion from "./RiskAversion";
import Signaling from "./Signaling";
import ElasticityMR from "./ElasticityMR";
import DoubleMarginalisation from "./DoubleMarginalisation";
import ComplementaryFirms from "./ComplementaryFirms";
import MergerSurplus from "./MergerSurplus";
import CommonsUtility from "./CommonsUtility";
import CompetitiveMarket from "./CompetitiveMarket";
import SecondDegreePD from "./SecondDegreePD";
import GovernmentChannel from "./GovernmentChannel";
import CoffeeMonopoly from "./CoffeeMonopoly";
import SeparateTariffs from "./SeparateTariffs";
import TariffPriceVsA from "./TariffPriceVsA";

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
  // econometrics sketch explainers
  "diff-in-diff": DiffInDiff,
  "parallel-trends": ParallelTrends,
  "lpm-problems": LpmProblems,
  "binary-curves": BinaryCurves,
  "weak-instrument": WeakInstrument,
  "sample-selection": SampleSelection,
  "supply-shift-identification": SupplyShiftIdentification,
  "serial-correlation": SerialCorrelation,
  "time-trends": TimeTrends,
  "event-study": EventStudy,
  "fixed-effects": FixedEffects,
  "regression-discontinuity": RegressionDiscontinuity,
  "causal-diagram": CausalDiagram,
  // micro sketch explainers
  "reaction-functions": ReactionFunctions,
  "profit-bars": ProfitBars,
  "uniform-pricing": UniformPricing,
  "structure-comparison": StructureComparison,
  "payoff-matrix": PayoffMatrix,
  "mixed-strategy-br": MixedStrategyBR,
  "bundling": Bundling,
  "lemons-threshold": LemonsThreshold,
  "risk-aversion": RiskAversion,
  "signaling": Signaling,
  "elasticity-mr": ElasticityMR,
  "double-marginalisation": DoubleMarginalisation,
  "complementary-firms": ComplementaryFirms,
  "merger-surplus": MergerSurplus,
  "commons-utility": CommonsUtility,
  "competitive-market": CompetitiveMarket,
  "second-degree-pd": SecondDegreePD,
  "government-channel": GovernmentChannel,
  "coffee-monopoly": CoffeeMonopoly,
  "separate-tariffs": SeparateTariffs,
  "tariff-price-vs-a": TariffPriceVsA,
};

// Every registered type, for the /dev/graphs gallery.
export const GRAPH_TYPES = Object.keys(GRAPHS);
