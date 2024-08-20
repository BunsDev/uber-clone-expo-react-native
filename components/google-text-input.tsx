import { GoogleInputProps } from "@/types/type"
import { Text, View } from "react-native"

export const GoogleTextInput = ({
    icon,
    initialLocation,
    containerStyle,
    textInputBackgroundColor,
    handlePress
} : GoogleInputProps) => {
    return (
        <View className={`flex flex-row items-center justify-center relative z-50 rounded-md mb-5 ${containerStyle}`}>
            <Text>
                Search
            </Text>
        </View>
    )
}