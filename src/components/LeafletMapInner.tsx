"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import { Project } from "@/lib/types";
import { projectGeometries, metroStations } from "@/data/geo";
import { RotateCcw } from "lucide-react";

interface LeafletMapInnerProps {
  projects: Project[];
  selectedProject: Project | null;
  onSelectProject: (p: Project) => void;
  onResetView?: () => void;
}

const DEFAULT_CENTER: [number, number] = [12.9716, 77.5946];
const DEFAULT_ZOOM = 11;

export default function LeafletMapInner({
  projects,
  selectedProject,
  onSelectProject,
}: LeafletMapInnerProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<L.LayerGroup | null>(null);
  const stationsLayerRef = useRef<L.LayerGroup | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
      zoomControl: true,
      minZoom: 9,
      maxZoom: 18,
    });

    // Standard OpenStreetMap Tiles (Overridable via NEXT_PUBLIC_MAP_TILES_URL)
    const tileUrl =
      process.env.NEXT_PUBLIC_MAP_TILES_URL ||
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

    L.tileLayer(tileUrl, {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Metro Stations Layer (from OSM)
    const stationsLayer = L.layerGroup().addTo(map);
    stationsLayerRef.current = stationsLayer;

    if (metroStations && Array.isArray(metroStations.features)) {
      metroStations.features.forEach((st: any) => {
        if (!st.geometry || !st.geometry.coordinates) return;
        const [lng, lat] = st.geometry.coordinates;

        const stationMarker = L.circleMarker([lat, lng], {
          radius: 3.5,
          fillColor: "#64748b",
          fillOpacity: 0.8,
          color: "#ffffff",
          weight: 1.5,
        });

        stationMarker.bindTooltip(
          `<div style="font-family:system-ui,sans-serif;font-size:11px;font-weight:500;">
            🚉 ${st.properties?.name || "Metro Station"}
          </div>`,
          { direction: "top", offset: [0, -4] }
        );

        stationMarker.addTo(stationsLayer);
      });
    }

    const layersGroup = L.layerGroup().addTo(map);
    layersRef.current = layersGroup;
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update Layers & Corridors when projects change
  useEffect(() => {
    const map = mapRef.current;
    const layersGroup = layersRef.current;
    if (!map || !layersGroup) return;

    layersGroup.clearLayers();

    const bounds: [number, number][] = [];

    projects.forEach((proj) => {
      let color = "#f59e0b"; // ongoing: amber
      if (proj.status === "stalled") color = "#e11d48"; // stalled: rose
      if (proj.status === "completed") color = "#10b981"; // completed: emerald
      if (proj.category === "planned") color = "#3b82f6"; // planned: blue

      const isSelected = selectedProject?.id === proj.id;

      // 1. Check if real OSM GeoJSON alignment exists for this project
      const geoData = projectGeometries[proj.slug];
      if (geoData && geoData.features) {
        geoData.features.forEach((feature: any) => {
          if (
            feature.geometry &&
            feature.geometry.type === "LineString" &&
            Array.isArray(feature.geometry.coordinates)
          ) {
            // Convert GeoJSON [lng, lat] to Leaflet [lat, lng]
            const latLngs: [number, number][] = feature.geometry.coordinates.map(
              (pt: [number, number]) => [pt[1], pt[0]]
            );

            if (latLngs.length > 1) {
              bounds.push(...latLngs);

              // Visible polyline
              const polyline = L.polyline(latLngs, {
                color: isSelected ? "#1e293b" : color,
                weight: isSelected ? 5.5 : 3.5,
                opacity: isSelected ? 1 : 0.8,
                dashArray: proj.category === "planned" ? "6, 6" : undefined,
              });

              // Wide invisible hit area for easy clicking
              const hitArea = L.polyline(latLngs, {
                weight: 18,
                opacity: 0,
                color: "transparent",
              });

              const tooltipHtml = `<strong>${proj.title}</strong><br/><span style="font-size:11px;color:#666">${proj.sector} • ${proj.status.replace(/_/g, " ")}</span>`;

              polyline.bindTooltip(tooltipHtml, { sticky: true });
              hitArea.bindTooltip(tooltipHtml, { sticky: true });

              const handleMouseOver = () => {
                polyline.setStyle({
                  weight: isSelected ? 7 : 5.5,
                  opacity: 1,
                  color: "#0f172a",
                });
              };

              const handleMouseOut = () => {
                polyline.setStyle({
                  weight: isSelected ? 5.5 : 3.5,
                  opacity: isSelected ? 1 : 0.8,
                  color: isSelected ? "#1e293b" : color,
                });
              };

              const handleClick = () => {
                onSelectProject(proj);
              };

              polyline.on("mouseover", handleMouseOver);
              polyline.on("mouseout", handleMouseOut);
              polyline.on("click", handleClick);

              hitArea.on("mouseover", handleMouseOver);
              hitArea.on("mouseout", handleMouseOut);
              hitArea.on("click", handleClick);

              polyline.addTo(layersGroup);
              hitArea.addTo(layersGroup);
            }
          }
        });
      }

      // 2. Draw point marker
      const markerPos: [number, number] = [proj.coordinates.lat, proj.coordinates.lng];
      bounds.push(markerPos);

      const marker = L.circleMarker(markerPos, {
        radius: isSelected ? 10 : 7,
        fillColor: color,
        fillOpacity: isSelected ? 1 : 0.85,
        color: "#ffffff",
        weight: isSelected ? 3 : 2,
      });

      marker.on("click", () => {
        onSelectProject(proj);
        map.panTo(markerPos, { animate: true });
      });

      marker.bindTooltip(
        `<div style="font-family:system-ui,sans-serif;">
          <div style="font-weight:600;font-size:12px;color:#111;">${proj.title}</div>
          <div style="font-size:11px;color:#666;margin-top:2px;">
            ${proj.agencyCode} • ${proj.sector} • <span style="text-transform:capitalize;">${proj.status.replace(/_/g, " ")}</span>
          </div>
        </div>`,
        { direction: "top", offset: [0, -6] }
      );

      marker.addTo(layersGroup);
    });

    // Fit to bounds on filter change if multiple coordinates exist
    if (bounds.length > 1) {
      try {
        const leafletBounds = L.latLngBounds(bounds);
        map.fitBounds(leafletBounds, { padding: [35, 35], maxZoom: 14 });
      } catch (err) {}
    }
  }, [projects, selectedProject, onSelectProject]);

  // Center on selected project when it changes
  useEffect(() => {
    if (!mapRef.current || !selectedProject) return;
    mapRef.current.panTo(
      [selectedProject.coordinates.lat, selectedProject.coordinates.lng],
      { animate: true }
    );
  }, [selectedProject]);

  const handleReset = () => {
    if (mapRef.current) {
      mapRef.current.setView(DEFAULT_CENTER, DEFAULT_ZOOM, { animate: true });
    }
  };

  return (
    <div className="relative w-full h-full min-h-[60vh] lg:min-h-[460px]">
      <div ref={containerRef} className="w-full h-full min-h-[60vh] lg:min-h-[460px] z-0" />

      {/* Reset View Button */}
      <button
        onClick={handleReset}
        title="Reset map view"
        className="absolute top-3 right-3 z-[1000] bg-white/95 hover:bg-white text-neutral-700 text-xs font-medium px-2.5 py-1.5 rounded-lg shadow-sm border border-neutral-200/90 flex items-center gap-1.5 transition-colors"
      >
        <RotateCcw className="h-3.5 w-3.5 text-neutral-500" />
        <span>Reset View</span>
      </button>
    </div>
  );
}
