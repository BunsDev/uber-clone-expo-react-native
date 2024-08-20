import { calculateRegion } from "@/lib/map";
import { useLocationStore } from "@/store";
import { View, Image } from "react-native"
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

export const Map = () => {
    const { 
        userLatitude,
        userLongitude,
        destinationLatitude,
        destinationLongitude
    } = useLocationStore();

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

        </MapView>
    )
}