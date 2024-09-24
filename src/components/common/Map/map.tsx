import React, { useEffect, useRef } from 'react';

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  console.log("in Map :: " + latitude, ", ", longitude);
  useEffect(() => {
    if (mapContainer.current) {
      const map = new kakao.maps.Map(mapContainer.current, {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      });

      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(latitude, longitude),
      });
      marker.setMap(map);
    }
  }, [latitude, longitude]);

  return <div ref={mapContainer} style={{marginLeft:'20px', width:'350px', height:'216px' }} />;
};

export default Map;
