import { Project } from "@/lib/types";

import { ejipuraFlyover } from "./ejipura-flyover";
import { nammaMetroPhase2a } from "./namma-metro-phase-2a";
import { nammaMetroPhase2b } from "./namma-metro-phase-2b";
import { bdaPeripheralRingRoad } from "./bda-peripheral-ring-road";
import { kRideSuburbanRail } from "./k-ride-suburban-rail";
import { bwssbCauveryStageV } from "./bwssb-cauvery-stage-v";
import { bbmpStormwaterDrain } from "./bbmp-stormwater-drain";

import { nammaMetroYellowLine } from "./namma-metro-yellow-line";
import { nammaMetroPinkLineElevated } from "./namma-metro-pink-line-elevated";
import { hebbalFlyoverNewLoop } from "./hebbal-flyover-new-loop";
import { bengaluruMysuruExpressway } from "./bengaluru-mysuru-expressway";
import { strrDobbaspetHoskote } from "./strr-dobbaspet-hoskote";
import { nammaMetroPinkLineUnderground } from "./namma-metro-pink-line-underground";
import { nammaMetroPhase3OrangeLine } from "./namma-metro-phase-3-orange-line";
import { nammaMetroPhase3aRedLine } from "./namma-metro-phase-3a-red-line";
import { strrHoskoteHosurRemaining } from "./strr-hoskote-hosur-remaining";
import { bengaluruChennaiExpressway } from "./bengaluru-chennai-expressway";
import { silkBoardDoubleDeckerFlyover } from "./silk-board-double-decker-flyover";
import { hebbalJunctionImprovement } from "./hebbal-junction-improvement";

import { bengaluruTwinTunnel } from "./bengaluru-twin-tunnel";
import { secondBengaluruAirport } from "./second-bengaluru-airport";
import { bengaluruHyderabadExpressway } from "./bengaluru-hyderabad-expressway";
import { bengaluruPuneExpressway } from "./bengaluru-pune-expressway";
import { bwssbCauveryStageVi } from "./bwssb-cauvery-stage-vi";
import { varthurLakeRejuvenation } from "./varthur-lake-rejuvenation";
import { bellandurLakeRejuvenation } from "./bellandur-lake-rejuvenation";
import { bmtcElectricBuses } from "./bmtc-fame-ii-electric-buses";
import { ksrBengaluruStationRedevelopment } from "./ksr-bengaluru-station-redevelopment";
import { smvtBaiyappanahalli } from "./smvt-baiyappanahalli";
import { bialTerminal2Phase2 } from "./bial-terminal-2-phase-2";
import { koramangalaValleyK100 } from "./koramangala-valley-k100";
import { bannerghattaRoadWidening } from "./bannerghatta-road-widening";

export const projects: Project[] = [
  // Completed / Recently Commissioned
  nammaMetroYellowLine,
  nammaMetroPinkLineElevated,
  hebbalFlyoverNewLoop,
  bengaluruMysuruExpressway,
  strrDobbaspetHoskote,
  bwssbCauveryStageV,
  bmtcElectricBuses,
  smvtBaiyappanahalli,
  koramangalaValleyK100,

  // Ongoing / Under Construction
  ejipuraFlyover,
  nammaMetroPhase2a,
  nammaMetroPhase2b,
  nammaMetroPinkLineUnderground,
  strrHoskoteHosurRemaining,
  bengaluruChennaiExpressway,
  silkBoardDoubleDeckerFlyover,
  kRideSuburbanRail,
  bbmpStormwaterDrain,
  varthurLakeRejuvenation,
  bellandurLakeRejuvenation,
  bialTerminal2Phase2,
  bannerghattaRoadWidening,

  // Planned / Proposed
  bdaPeripheralRingRoad,
  nammaMetroPhase3OrangeLine,
  nammaMetroPhase3aRedLine,
  hebbalJunctionImprovement,
  bengaluruTwinTunnel,
  secondBengaluruAirport,
  bengaluruHyderabadExpressway,
  bengaluruPuneExpressway,
  bwssbCauveryStageVi,
  ksrBengaluruStationRedevelopment,
];
