import "./styles.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// Fix default marker icon issue in Leaflet + Webpack/Vite
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function MapComponent() {
  return (
    <div style={{ height: "75vh", width: "100%" }}>
      <MapContainer
        center={[42.98713769710642, -81.24508836480481]} // Lagos coords
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={[42.98713769710642, -81.24508836480481]} icon={markerIcon}>
          <Popup>Queens location</Popup>
        </Marker>
        <Marker position={[42.982680434689954, -81.2619446456461]} icon={markerIcon}>
          <Popup>Belton location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
