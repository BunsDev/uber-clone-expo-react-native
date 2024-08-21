import { router } from "expo-router";
import { useDriverStore } from "@/store";
import { FlatList, View } from "react-native";
import { DriverCard } from "@/components/driver-card";
import { RideLayout } from "@/components/ride-layout";
import { CustomButton } from "@/components/custom-button";

export default function ConfirmRide() {
    const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();

    return (
        <RideLayout title={"Choose a Rider"} snapPoints={["65%", "85%"]}>
            <FlatList
                data={drivers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <DriverCard
                        item={item}
                        selected={selectedDriver!}
                        setSelected={() => setSelectedDriver(item.id!)}
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