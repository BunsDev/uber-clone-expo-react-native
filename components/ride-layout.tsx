import { icons } from "@/constants";
import { router } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Map } from "./Map";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet"
import { useRef } from "react";

export const RideLayout = ({
    children,
    title
}: {
    title: string;
    children: React.ReactNode;
}) => {
    const ref = useRef<BottomSheet>(null);
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View className="flex-1 bg-neutral-50">
                <View className="flex flex-col h-screen bg-neutral-950">
                    <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
                        <Pressable onPress={() => router.back()}>
                            <View className="w-10 h-10 bg-neutral-50 rounded-md items-center justify-center">
                                <Image
                                    source={icons.backArrow}
                                    resizeMode="contain"
                                    className="w-6 h-6"
                                />
                            </View>
                        </Pressable>
                        <Text className="text-xl font-JakartaSemiBold ml-5">
                            {title || "Go Back"}
                        </Text>
                    </View>
                    <Map />
                </View>
                <BottomSheet
                    ref={ref}
                    snapPoints={[
                        "40%",
                        "85%"
                    ]}
                    index={0}
                >
                    <BottomSheetScrollView
                        style={{
                            flex: 1,
                            padding: 20
                        }}
                    >
                        {children}
                    </BottomSheetScrollView>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    )
}