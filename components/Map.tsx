import { icons } from "@/constants";
import { useFetch } from "@/lib/fetch";
import { Driver, MarkerData } from "@/types/type";
import React, { useEffect, useState } from "react";
import { useDriverStore, useLocationStore } from "@/store";
import { ActivityIndicator, Text, View } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { calculateDriverTimes, calculateRegion, generateMarkersFromData } from "@/lib/map";

export const Map = () => {
    const { data: drivers, loading, error } = useFetch<Driver[]>(`/(api)/driver`);
    const {
        userLatitude,
        userLongitude,
        destinationLatitude,
        destinationLongitude
    } = useLocationStore();
    const { selectedDriver, setDrivers } = useDriverStore();
    const [markers, setMarkers] = useState<MarkerData[]>([]);

    useEffect(() => {
        if (Array.isArray(drivers)) {
            if (!userLatitude || !userLongitude) return;
            const newMarkers = generateMarkersFromData({
                data: drivers,
                userLatitude,
                userLongitude
            });

            setMarkers(newMarkers);
        }
    }, [drivers, userLatitude, userLongitude]);

    useEffect(() => {
        if (markers.length > 0 && destinationLatitude && destinationLongitude) {
            calculateDriverTimes({
                markers,
                userLongitude,
                userLatitude,
                destinationLongitude,
                destinationLatitude
            }).then((drivers) => {
                setDrivers(drivers as MarkerData[])
            })
        }
    }, [markers, destinationLatitude, destinationLongitude, userLatitude, userLongitude])

    if (loading || (!userLatitude || !userLongitude)) {
        return (
            <View className="flex justify-center items-center w-full h-full">
                <ActivityIndicator size="large" color="black" />
            </View>
        )
    }

    if (error) {
        return (
            <View className="flex justify-center items-center w-full h-full">
                <Text className="font-medium text-lg">Error: {error}</Text>
            </View>
        )
    }

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
            {destinationLatitude && destinationLongitude && (
                <>
                    <Marker
                        key="destination"
                        coordinate={{
                            latitude: destinationLatitude,
                            longitude: destinationLongitude
                        }}
                        title="Destination"
                        image={icons.pin}
                    />
                    <MapViewDirections
                        origin={{
                            latitude: userLatitude,
                            longitude: userLongitude
                        }}
                        destination={{
                            latitude: destinationLatitude,
                            longitude: destinationLongitude
                        }}
                        apikey={process.env.EXPO_PUBLIC_DIRECTIONS_API_KEY!}
                        strokeWidth={2}
                        strokeColor="black"
                    />
                </>
            )}
        </MapView>
    )
}