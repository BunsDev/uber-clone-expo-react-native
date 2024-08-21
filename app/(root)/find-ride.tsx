import { icons } from "@/constants";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { useLocationStore } from "@/store";
import { RideLayout } from "@/components/ride-layout";
import { CustomButton } from "@/components/custom-button";
import { GoogleTextInput } from "@/components/google-text-input";

export default function FindRide() {
    const {
        userAddress,
        setUserLocation,
        destinationAddress,
        setDestinationLocation
    } = useLocationStore();
    return (
        <RideLayout 
            title="Ride"
            snapPoints={["85%"]}
        >
            <View className="my-3">
                <Text className="text-lg font-JakartaSemiBold mb-3">
                    From
                </Text>
                <GoogleTextInput
                    icon={icons.target}
                    initialLocation={userAddress!}
                    containerStyle="bg-neutral-100"
                    textInputBackgroundColor="#F5F5F5"
                    handlePress={(location) => setUserLocation(location)}
                />
            </View>

            <View className="my-3">
                <Text className="text-lg font-JakartaSemiBold mb-3">
                    To
                </Text>
                <GoogleTextInput
                    icon={icons.map}
                    initialLocation={destinationAddress!}
                    containerStyle="bg-neutral-100"
                    textInputBackgroundColor="transparent"
                    handlePress={(location) => setDestinationLocation(location)}
                />
            </View>

            <CustomButton
                title="Find Rides"
                className="mt-5"
                onPress={() => router.push("/(root)/confirm-ride")}
            />
        </RideLayout>
    )
}