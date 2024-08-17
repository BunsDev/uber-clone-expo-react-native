import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView>
            <View className="h-full flex justify-center items-center w-full">
                <Text className="text-center text-blue-500 font-bold text-3xl">Welcome to Ryde</Text>
            </View>
        </SafeAreaView>

    )
}