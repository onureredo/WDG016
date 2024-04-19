import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function MyMap({ lat, lng }) {
  const position = [lat, lng];

  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            WBS Coding School Campus <br /> See you in July 🌞
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MyMap;
