"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const hubsData = [
  { name: "Delhi", lat: 28.6139, lng: 77.2090, align: "left" },
  { name: "Meerut", lat: 28.9845, lng: 77.7064, align: "right" },
  { name: "Ludhiana", lat: 30.9000, lng: 75.8573, align: "right" },
  { name: "Jalandhar", lat: 31.3260, lng: 75.5762, align: "left" },
  { name: "Bengaluru", lat: 12.9716, lng: 77.5946, align: "right" },
  { name: "Tiruppur", lat: 11.1085, lng: 77.3411, align: "right" }
];

export default function NetworkMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <div className="w-full h-full flex items-center justify-center text-white/50 text-xs tracking-widest uppercase bg-[#050505]">
      Initializing Map...
    </div>
  );

  return (
    <div className="w-full h-full relative" style={{ filter: 'brightness(0.65) contrast(1.2)' }}>
      <MapContainer 
        center={[21.5, 79.0]} 
        zoom={4.2} 
        zoomSnap={0.1}
        style={{ width: '100%', height: '100%', backgroundColor: '#050505' }}
        zoomControl={true}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        {/* Free Esri World Imagery (Satellite) */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        
        {/* Free CartoDB Dark Labels overlaid on top of the satellite */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
          opacity={0.8}
        />

        {hubsData.map((hub, i) => {
          const customIcon = L.divIcon({
            className: 'custom-leaflet-marker',
            html: `
              <div class="absolute -translate-x-1/2 -translate-y-1/2 flex items-center group/dot cursor-pointer z-50 hover:z-[60]">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75" style="animation-delay: ${i * 0.3}s"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-[#3b82f6] border border-white shadow-[0_0_12px_rgba(59,130,246,1)]"></span>
                </span>
                <span class="absolute top-1/2 -translate-y-1/2 text-white text-[11px] font-semibold tracking-wider whitespace-nowrap drop-shadow-md ${hub.align === 'right' ? 'left-3' : 'right-3'}">
                  ${hub.name}
                </span>
              </div>
            `,
            iconSize: [0, 0],
            iconAnchor: [0, 0]
          });

          return (
            <Marker key={i} position={[hub.lat, hub.lng]} icon={customIcon} />
          );
        })}
      </MapContainer>
      
      {/* Dark vignette overlay for premium cinematic feel */}
      <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[inset_0_0_80px_rgba(0,0,0,1)] z-[400]"></div>
    </div>
  );
}
