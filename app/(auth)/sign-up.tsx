import { InputField } from "@/components/input-field";
import { icons, images } from "@/constants";
import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";


export default function SignUp() {
    const [form, setForm]= useState({
        name: "",
        email: "",
        password: ""
    });

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View>
                    <Image
                        source={images.signUpCar} className="z-0 w-full h-[250px] object-cover"
                    />
                    <Text className="text-2xl text-neutral-950 font-JakartaSemiBold absolute bottom-5 left-5">
                        Create your account
                    </Text>
                </View>
                <View className="p-5 ">
                    <InputField 
                        label="Name"
                        icon={icons.person}
                        value={form.name}
                        placeholder="Enter your name"
                        onChangeText={(text) => setForm({...form, name: text})}
                    />
                </View>
            </View>
        </ScrollView>
    )
}