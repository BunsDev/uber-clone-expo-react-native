import { CustomButton } from "@/components/custom-button";
import { InputField } from "@/components/input-field";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";


export default function SignUp() {
    const [form, setForm]= useState({
        name: "",
        email: "",
        password: ""
    });

    const onSignUpPress = async () => {

    }

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
                    <InputField 
                        label="Email"
                        icon={icons.email}
                        value={form.email}
                        placeholder="Enter your email"
                        onChangeText={(text) => setForm({...form, email: text})}
                    />
                    <InputField 
                        label="Password"
                        icon={icons.lock}
                        value={form.password}
                        secureTextEntry={true}
                        placeholder="**********"
                        onChangeText={(text) => setForm({...form, password: text})}
                    />

                    <CustomButton
                        title="Sign Up"
                        onPress={onSignUpPress}
                        className="mt-6"
                    />

                    <Link 
                        href="/sign-in"
                        className="text-lg text-center text-neutral-500 mt-10"
                    >
                        <Text>Already have an account?</Text>{" "}
                        <Text className="font-bold text-neutral-950">Login</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    )
}