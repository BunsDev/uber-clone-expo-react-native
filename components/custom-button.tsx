import { ButtonProps } from "@/types/type"
import { Pressable, Text } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
        case "secondary":
            return "bg-neutral-500";
        case "danger":
            return "bg-rose-500";
        case "success":
            return "bg-emerald-500";
        case "outline":
            return "bg-transparent border border-neutral-500 border-[0.5px]";
        default:
            return "bg-neutral-800";
    }
}

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
        case "primary":
            return "text-neutral-950";
        case "secondary":
            return "text-neutral-300";
        case "danger":
            return "text-rose-100";
        case "success":
            return "text-emerald-100";
        default:
            return "text-neutral-50";
    }
}

export const CustomButton = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft,
    IconRight,
    className,
    ...props
}: ButtonProps) => {
    return (
        <Pressable
            {...props}
            onPress={onPress}
            className={`w-full rounded-full flex flex-row justify-center p-2 items-center shadow-md shadow-neutral-400/70  ${getBgVariantStyle(bgVariant)} ${className}`}
        >
            {IconLeft && <IconLeft />}
            <Text
                className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
                {title}
            </Text>
            {IconRight && <IconRight />}
        </Pressable>
    )
}