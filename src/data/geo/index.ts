import metroStations from "./metro-stations.json";
import orrAlignment from "./namma-metro-phase-2a-outer-ring-road.json";
import yellowLineAlignment from "./namma-metro-yellow-line-rv-road-bommasandra.json";
import mysuruExpAlignment from "./bengaluru-mysuru-expressway-nh-275.json";
import silkBoardAlignment from "./silk-board-double-decker-flyover-and-ramps.json";
import hebbalLoopAlignment from "./hebbal-flyover-new-loop-kr-puram-mekhri.json";
import ejipuraAlignment from "./ejipura-koramangala-flyover.json";

export { metroStations };

export const projectGeometries: Record<string, any> = {
  "namma-metro-phase-2a-outer-ring-road": orrAlignment,
  "namma-metro-yellow-line-rv-road-bommasandra": yellowLineAlignment,
  "bengaluru-mysuru-expressway-nh-275": mysuruExpAlignment,
  "silk-board-double-decker-flyover-and-ramps": silkBoardAlignment,
  "hebbal-flyover-new-loop-kr-puram-mekhri": hebbalLoopAlignment,
  "ejipura-koramangala-flyover": ejipuraAlignment,
};
