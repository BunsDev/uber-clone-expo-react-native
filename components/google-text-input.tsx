
import { icons } from "@/constants";
import { GoogleInputProps } from "@/types/type"
import { View, Image } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GOOGLE_PLACES_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export const GoogleTextInput = ({
    icon,
    initialLocation,
    containerStyle,
    textInputBackgroundColor,
    handlePress
}: GoogleInputProps) => {
    return (
        <View className={`flex flex-row items-center justify-center relative z-50 rounded-md mb-5 ${containerStyle}`}>
            <GooglePlacesAutocomplete
                fetchDetails={true}
                placeholder="Search for a location"
                debounce={200}
                styles={{
                    textInputContainer: {
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 20,
                        marginHorizontal: 20,
                        position: "relative",
                        shadowColor: "#d4d4d4"
                    },
                    textInput: {
                        backgroundColor: textInputBackgroundColor || "white",
                        fontSize: 16,
                        fontWeight: "600",
                        marginTop: 5,
                        width: "100%",
                        borderRadius: 200,
                    },
                    listView: {
                        backgroundColor: textInputBackgroundColor || "white",
                        position: "relative",
                        top: 0,
                        width: "100%",
                        borderRadius: 10,
                        shadowColor: "#d4d4d4",
                        zIndex: 99
                    }
                }}
                onPress={(data, details = null) => {
                    handlePress({
                        latitude: details?.geometry.location.lat!,
                        longitude: details?.geometry.location.lng!,
                        address: data.description
                    })
                }}
                query={{
                    key: GOOGLE_PLACES_API_KEY,
                    language: "en",
                }}
                renderLeftButton={() => (
                    <View className="justify-center items-center w-6 h-6">
                        <Image
                            source={icon ? icon : icons.search}
                            alt="Search Icon"
                            className="w-6 h-6"
                            resizeMode="contain" 
                        />

                    </View>
                )}
                textInputProps={{
                    placeholderTextColor: "#d4d4d4",
                    placeholder: initialLocation ?? "Search for a location"
                }}
            />
        </View>
    )
}