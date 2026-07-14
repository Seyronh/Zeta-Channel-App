import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUbi from '../assets/img/icon/icon-ubi.svg'

// 1. Creamos el icono verde personalizado para el marcador
const customIcon = new L.Icon({
    iconUrl: iconUbi,
    iconSize: [50, 50], // Ajusta el tamaño que mejor le venga a tu logo (ancho, alto)
    iconAnchor: [25, 50], // El punto del icono que se ancla a las coordenadas (mitad de ancho, total de alto)
    popupAnchor: [0, -50], // Dónde se abre el globito de texto respecto al ancla
});

const MapaFestival = () => {
    const posicionAutocine = [40.4862, -3.67776]; // Coordenadas del Autocine Madrid

    return (
        // El secreto del Blanco y Negro está en estas clases de Tailwind:
        // "grayscale contrast-[1.1] invert-[0.05]" apaga los colores del mapa de OpenStreetMap
        <div className="w-full h-120 z-0  contrast-[1.15]">
            <style>{`
                .leaflet-tile-container {
                    filter: grayscale(100%) invert(5%);
                }
            `}</style>
            <MapContainer
                center={posicionAutocine}
                zoom={14}
                scrollWheelZoom={false}
                className="w-full h-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={posicionAutocine} icon={customIcon}>
                    <Popup>
                        <div className="flex flex-col items-center gap-0.5">
                            <span className="font-sans font-bold text-black">
                                ¡Zeta Channel Festival!
                            </span>
                            <span className="font-sans font-bold text-black">
                                Autocine Madrid
                            </span>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapaFestival;