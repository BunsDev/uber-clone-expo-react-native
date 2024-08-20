import { drivers, icons } from "@/constants";
import { calculateRegion, generateMarkersFromData } from "@/lib/map";
import { useDriverStore, useLocationStore } from "@/store";
import { MarkerData } from "@/types/type";
import { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";

export const Map = () => {
    const {
        userLatitude,
        userLongitude,
        destinationLatitude,
        destinationLongitude
    } = useLocationStore();
    const { selectedDriver, setDrivers } = useDriverStore();
    const [markers, setMarkers] = useState<MarkerData[]>([]);

    useEffect(() => {
        setDrivers(drivers);
        if (Array.isArray(drivers)) {
            if (!userLatitude || !userLongitude) return;
            const newMarkers = generateMarkersFromData({
                data: drivers,
                userLatitude,
                userLongitude
            });

            setMarkers(newMarkers);
        }
    }, [drivers])

    const region = calculateRegion({
        userLatitude,
        userLongitude,
        destinationLatitude,
        destinationLongitude
    })
    return (
        <MapView
            tintColor="black"
            mapType="mutedStandard"
            userInterfaceStyle="light"
            initialRegion={region}
            showsUserLocation={true}
            provider={PROVIDER_DEFAULT}
            showsPointsOfInterest={false}
            className="w-full h-full rounded-md"
        >
            {markers.map((marker) => (
                <Marker
                    key={marker.id}
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude
                    }}
                    title={marker.title}
                    image={
                        selectedDriver === marker.id ? icons.selectedMarker : icons.marker
                    }
                >

                </Marker>
            ))}
        </MapView>
    )
}