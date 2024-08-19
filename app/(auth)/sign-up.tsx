import { CustomButton } from "@/components/custom-button";
import { InputField } from "@/components/input-field";
import { OAuth } from "@/components/oauth";
import { icons, images } from "@/constants";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";


export default function SignUp() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [verification, setVerification] = useState({
        state: "default",
        error: "",
        code: "",
    });

    const onSignUpPress = async () => {
        if (!isLoaded) return;
        try {
            await signUp.create({
                emailAddress: form.email,
                password: form.password,
            });
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setVerification({
                ...verification,
                state: "pending",
            });
        } catch (err: any) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.log(JSON.stringify(err, null, 2));
            Alert.alert("Error", err.errors[0].longMessage);
        }
    };
    const onPressVerify = async () => {
        if (!isLoaded) return;
        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code: verification.code,
            });
            if (completeSignUp.status === "complete") {
                // await fetchAPI("/(api)/user", {
                //     method: "POST",
                //     body: JSON.stringify({
                //         name: form.name,
                //         email: form.email,
                //         clerkId: completeSignUp.createdUserId,
                //     }),
                // });
                await setActive({ session: completeSignUp.createdSessionId });
                setVerification({
                    ...verification,
                    state: "success",
                });
            } else {
                setVerification({
                    ...verification,
                    error: "Verification failed. Please try again.",
                    state: "failed",
                });
            }
        } catch (err: any) {
            setVerification({
                ...verification,
                error: err.errors[0].longMessage,
                state: "failed",
            });
        }
    };

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
                        onChangeText={(text) => setForm({ ...form, name: text })}
                    />
                    <InputField
                        label="Email"
                        icon={icons.email}
                        value={form.email}
                        placeholder="Enter your email"
                        onChangeText={(text) => setForm({ ...form, email: text })}
                    />
                    <InputField
                        label="Password"
                        icon={icons.lock}
                        value={form.password}
                        secureTextEntry={true}
                        placeholder="**********"
                        onChangeText={(text) => setForm({ ...form, password: text })}
                    />

                    <CustomButton
                        title="Sign Up"
                        onPress={onSignUpPress}
                        className="mt-6"
                    />

                    <OAuth />

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