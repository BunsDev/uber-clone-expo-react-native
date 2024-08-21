import { CustomButton } from "@/components/custom-button";
import { DriverCard } from "@/components/driver-card";
import { RideLayout } from "@/components/ride-layout";
import { drivers } from "@/constants";
import { useDriverStore } from "@/store";
import { router } from "expo-router";
import { FlatList, View } from "react-native";

export default function ConfirmRide() {
    const {
        drivers,
        selectedDriver,
        setSelectedDriver,
    } = useDriverStore()
    return (
        <RideLayout title="Choose Driver" snapPoints={["65%", "85%"]}>
            <FlatList 
                data={drivers}
                renderItem={(item) => (
                    <DriverCard 
                        item={item} 
                        selected={selectedDriver}
                        setSelected={() => setSelectedDriver(item.id)}
                    />
                )}
                ListFooterComponent={() => (
                    <View className="mx-5 mt-10">
                        <CustomButton
                            title="Select Ride"
                            onPress={() => router.push("/(root)/book-ride")}
                        />
                    </View>
                )}
            />
        </RideLayout>
    )
}