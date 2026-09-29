import { projects } from "@/data/projects";
import { BengaluruMap } from "@/components/BengaluruMap";

export default function MapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
          Bengaluru City Map
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-2xl">
          View major infrastructure projects across Outer Ring Road, Hebbal, Koramangala, and peripheral roads.
        </p>
      </div>

      <BengaluruMap projects={projects} />
    </div>
  );
}
