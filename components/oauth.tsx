import { Text, View, Image } from "react-native"
import { CustomButton } from "./custom-button"
import { icons } from "@/constants"

export const OAuth = () => {
    const handleGoogleSignin = async () => {
        
    }
    return (
        <View>
            <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
                <View className="flex-1 h-[1px] bg-general-100" />
                <Text className="text-base">
                    OR
                </Text>
                <View className="flex-1 h-[1px] bg-general-100" />
            </View>
            <CustomButton
                title="Google"
                className="mt-5 w-full shadow-none"
                IconLeft={() => (
                    <Image  
                        source={icons.google}
                        alt="Google Icon"
                        resizeMode="contain"
                        className="w-5 h-5 mx-2"
                    />
                )}
                bgVariant="outline"
                textVariant="primary"
                onPress={handleGoogleSignin}
            />
        </View>
    )
}