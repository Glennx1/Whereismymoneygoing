"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import { Project } from "@/lib/types";

interface LeafletMapInnerProps {
  projects: Project[];
  selectedProject: Project | null;
  onSelectProject: (p: Project) => void;
}

export default function LeafletMapInner({
  projects,
  selectedProject,
  onSelectProject,
}: LeafletMapInnerProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [12.9716, 77.5946],
      zoom: 11,
      zoomControl: true,
      minZoom: 9,
      maxZoom: 18,
    });

    // CARTO Positron Light Tiles
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    const layerGroup = L.layerGroup().addTo(map);
    markersRef.current = layerGroup;
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update Layers & Polylines when projects change
  useEffect(() => {
    const map = mapRef.current;
    const layerGroup = markersRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();

    projects.forEach((proj) => {
      let color = "#f59e0b"; // ongoing: amber
      if (proj.status === "stalled") color = "#e11d48"; // stalled: rose
      if (proj.status === "completed") color = "#10b981"; // completed: emerald
      if (proj.category === "planned") color = "#3b82f6"; // planned: blue

      const isSelected = selectedProject?.id === proj.id;

      // 1. Draw route polyline if coordinates available
      if (proj.routeCoordinates && proj.routeCoordinates.length > 1) {
        const polyline = L.polyline(proj.routeCoordinates, {
          color: color,
          weight: isSelected ? 5 : 3.5,
          opacity: isSelected ? 0.95 : 0.75,
          dashArray: proj.category === "planned" ? "6, 6" : undefined,
        });

        polyline.on("click", () => {
          onSelectProject(proj);
        });

        polyline.bindTooltip(
          `<strong>${proj.title}</strong><br/><span style="font-size:11px;color:#666">${proj.sector} • ${proj.status}</span>`,
          { sticky: true }
        );

        polyline.addTo(layerGroup);
      }

      // 2. Draw point marker
      const marker = L.circleMarker([proj.coordinates.lat, proj.coordinates.lng], {
        radius: isSelected ? 10 : 7,
        fillColor: color,
        fillOpacity: isSelected ? 1 : 0.85,
        color: "#ffffff",
        weight: isSelected ? 3 : 2,
      });

      marker.on("click", () => {
        onSelectProject(proj);
        map.panTo([proj.coordinates.lat, proj.coordinates.lng], { animate: true });
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

      marker.addTo(layerGroup);
    });
  }, [projects, selectedProject, onSelectProject]);

  // Center on selected project when it changes
  useEffect(() => {
    if (!mapRef.current || !selectedProject) return;
    mapRef.current.panTo(
      [selectedProject.coordinates.lat, selectedProject.coordinates.lng],
      { animate: true }
    );
  }, [selectedProject]);

  return <div ref={containerRef} className="w-full h-full min-h-[440px] z-0" />;
}
