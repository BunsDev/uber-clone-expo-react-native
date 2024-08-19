import { CustomButton } from "@/components/custom-button";
import { InputField } from "@/components/input-field";
import { OAuth } from "@/components/oauth";
import { icons, images } from "@/constants";
import { fetchAPI } from "@/lib/fetch";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { ReactNativeModal } from "react-native-modal";


export default function SignUp() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [verification, setVerification] = useState({
        state: "success",
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
                await fetchAPI("/(api)/user", {
                    method: "POST",
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        clerkId: completeSignUp.createdUserId,
                    }),
                });
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
                <ReactNativeModal
                    isVisible={verification.state === "pending"}
                    onModalHide={() => {
                        if (verification.state === "success") setShowSuccessModal(true);
                    }}
                >
                    <View className="bg-white px-7 py-9 rounded-md flex min-h-[300px] w-full">
                        <Text className="text-3xl font-JakartaBold mb-2">
                            Verification
                        </Text>
                        <Text className="text-base text-neutral-500 font-Jakarta mb-5">
                            We've sent a verification code to your {form.email}.
                        </Text>
                        <InputField
                            label="Code"
                            icon={icons.lock}
                            value={verification.code}
                            placeholder="Enter code"
                            keyboardType="numeric"
                            inputStyle="w-full"
                            onChangeText={(text) => setVerification({ ...verification, code: text })}
                        />
                        {verification.error && (
                            <Text className="text-red-500 text-center">
                                {verification.error}
                            </Text>
                        )}
                        <CustomButton
                            title="Verify Email"
                            className="mt-5"
                            onPress={onPressVerify}

                        />
                    </View>
                </ReactNativeModal>

                <ReactNativeModal isVisible={showSuccessModal}>
                    <View className="bg-white px-7 py-9 rounded-md items-center min-h-[300px]">
                        <Image
                            source={images.check}
                            className="w-[110px] h-[110px] mx-auto my-5"
                        />
                        <Text className="text-3xl font-JakartaBold text-center">
                            Verified
                        </Text>
                        <Text className="text-base text-neutral-500 font-Jakarta mt-2 text-center">
                            You have successfully verified your account.
                        </Text>

                        <CustomButton
                            title="Browse Home"
                            className="mt-5"
                            onPress={() => {
                                setShowSuccessModal(false);
                                router.push("/(root)/(tabs)/home")
                            }}
                        />
                    </View>
                </ReactNativeModal>
            </View>
        </ScrollView>
    )
}