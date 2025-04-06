// src/components/MapComponent.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import hotspots from '../data/hotspots';

function MapComponent() {
  return (
    <div style={{ height: '500px', width: '100%', marginTop: '30px' }}>
      <MapContainer center={[18.5204, 73.8567]} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        {hotspots.map((spot) => (
          <Marker key={spot.id} position={[spot.lat, spot.lng]}>
            <Popup>
              <strong>{spot.name}</strong><br />
              🌡 Temp: {spot.temperature}°C<br />
              📝 {spot.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
