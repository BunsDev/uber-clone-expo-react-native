import { images } from "@/constants";
import { View, Text, ScrollView, Image } from "react-native";


export default function SignUp() {
    return (
        <ScrollView className="flex-1 bg-neutral-200">
            <View className="flex-1 bg-neutral-200">
                <View>
                    <Image
                        source={images.signUpCar} className="z-0 w-full h-[250px] object-cover"
                    />
                    <Text className="text-3xl text-neutral-950 font-JakartaSemiBold absolute bottom-5 left-5">
                        Create your account
                    </Text>
                </View>
                <View className="p-5 ">
                    <InputField />
                </View>
            </View>
        </ScrollView>
    )
}