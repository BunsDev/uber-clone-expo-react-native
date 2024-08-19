import { InputFieldProps } from "@/types/type"
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"

export const InputField = ({
    label,
    icon,
    className,
    iconStyle,
    labelStyle,
    inputStyle,
    containerStyle,
    placeholder,
    secureTextEntry = false,
    ...props
} : InputFieldProps) => {
    return (
        <KeyboardAvoidingView
        behavior={`${Platform.OS === "ios" ? "padding" : "height"}`}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    className="my-2 w-full"
                >
                    <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
                        {label}
                    </Text>
                    <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-md border border-neutral-100 focus:border-neutral-500 ${containerStyle}`}>
                        {icon && (
                            <Image 
                                source={icon}
                                className={`w-6 h-6 ml-4 ${iconStyle}`}
                            />
                        )}
                        <TextInput 
                            placeholder={placeholder}
                            className={`rounded-md p-4 font-JakartaSemiBold text-base flex-1 text-left ${inputStyle}`}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}