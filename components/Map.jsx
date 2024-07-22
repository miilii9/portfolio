'use client'
import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useMap } from 'react-leaflet';


export default function MapComponent() {

    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconUrl: markerIcon.src,
            iconRetinaUrl: markerIcon2x.src,
            shadowUrl: markerShadow.src,
        })
    }, [])

    return (
        <MapContainer style={{ width: "100%", height: "300px", zIndex: "0" }} center={[38.0667819, 46.3648069]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CustomMarker isActive />
        </MapContainer>

    )
}
const CustomMarker = ({ isActive }) => {
    const map = useMap()
    const [refReady, setRefReady] = useState(false);
    let popupRef = useRef();

    useEffect(() => {
        if (refReady && isActive) {
            map.openPopup(popupRef);
        }
    }, [isActive, refReady, map]);

    return (
        <Marker position={[38.0667819, 46.3648069]}>
            <Popup
                className='font-hamrah'
                ref={(r) => {
                    popupRef = r;
                    setRefReady(true);
                }}
            >
                من در حال حاظر اینجام :)
            </Popup>
        </Marker>
    );
};