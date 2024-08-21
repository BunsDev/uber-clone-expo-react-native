import { router } from "expo-router";
import { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import { onboarding } from '@/constants/index';
import { 
    View, 
    Text, 
    Image,
    Pressable,  
} from "react-native";

import { CustomButton } from "@/components/custom-button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
    const ref = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === onboarding.length - 1;

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-neutral-50">
            <Pressable
                onPress={() => router.replace("/(auth)/sign-up")}
                className="w-full flex justify-end items-end p-5"
            >
                <Text className="text-neutral-800 text-md font-JakartaBold">
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
                {onboarding.map((item) => (
                    <View key={item.id} className="flex items-center justify-center p-5">
                        <Image
                            source={item.image}
                            resizeMode="contain"
                            alt="Onboarding Images"
                            className="w-full h-[300px] object-cover"
                        />
                        <View
                            className="flex flex-row items-center justify-center w-full mt-10"
                        >
                            <Text className="text-neutral-950 text-3xl font-bold mx-10 text-center">
                                {item.title}
                            </Text>
                        </View>
                        <Text className="text-lg font-JakartaSemiBold text-neutral-500 mx-10 mt-3 text-center">
                            {item.description}
                        </Text>
                    </View>
                ))}
            </Swiper>

            <CustomButton
                onPress={() => isLastSlide ? router.replace("/(auth)/sign-up") : ref.current?.scrollBy(1)}
                className="w-11/12 mt-10"
                title={isLastSlide ? "Get Started" : "Next"}
            />
        </SafeAreaView>
    )
}