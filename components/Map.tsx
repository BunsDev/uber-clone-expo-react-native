import { View, Image } from "react-native"
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

export const Map = () => {
    const region = {

    }
    return (
        <MapView
            tintColor="black"
            mapType="mutedStandard"
            provider={PROVIDER_DEFAULT}
            showsUserLocation={true}
            showsPointsOfInterest={false}
            userInterfaceStyle="light"
            className="w-full h-full rounded-md"
        >

        </MapView>
    )
}