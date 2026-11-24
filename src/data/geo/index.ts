import metroStations from "./metro-stations.json";
import yellowLineAlignment from "./namma-metro-yellow-line-rv-road-bommasandra.json";
import silkBoardAlignment from "./silk-board-double-decker-flyover-and-ramps.json";
import hebbalLoopAlignment from "./hebbal-flyover-new-loop-kr-puram-mekhri.json";
import ejipuraAlignment from "./ejipura-koramangala-flyover.json";

export { metroStations };

// Phase 2A and Mysuru expressway alignments removed: the OSM extracts were unordered road
// segments that rendered as tangled lines. Show point markers until a real alignment is sourced.
export const projectGeometries: Record<string, any> = {
  "namma-metro-yellow-line-rv-road-bommasandra": yellowLineAlignment,
  "silk-board-double-decker-flyover-and-ramps": silkBoardAlignment,
  "hebbal-flyover-new-loop-kr-puram-mekhri": hebbalLoopAlignment,
  "ejipura-koramangala-flyover": ejipuraAlignment,
};
