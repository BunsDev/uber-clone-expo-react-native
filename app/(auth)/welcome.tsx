import { router } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function Welcome() {
    const ref = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-neutral-50">
            <Pressable 
                onPress={() => router.replace("/(auth)/sign-up")}
                className="w-full flex justify-end items-end p-5"
            >
                <Text className="text-blue-500 text-md font-JakartaBold">
                    Skip
                </Text>
            </Pressable>
            <Swiper
                ref={ref}
                loop={false}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-neutral-200" />}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-neutral-800" />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                [
                    {
                        title: "Welcome",
                        image: "../assets/images/welcome.png",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    }
                ]
            </Swiper>
        </SafeAreaView>
    )
}