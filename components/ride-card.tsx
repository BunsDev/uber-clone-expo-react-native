import { icons } from "@/constants"
import { formatDate, formatTime } from "@/lib/utils"
import { Ride } from "@/types/type"
import { View, Text, Image } from "react-native"

export const RideCard = ({ ride: {
    driver,
    ride_time,
    created_at,
    payment_status,
    origin_address,
    destination_address,
    destination_latitude,
    destination_longitude,
} }: { ride: Ride }) => {
    return (
        <View className="flex flex-row items-center justify-center bg-neutral-50 rounded-md shadow-sm shadow-neutral-300 mb-3">
            <View className="flex flex-col items-start justify-center p-3">
                <View className="flex flex-row items-center justify-between">
                    <Image
                        source={{
                            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`
                        }}
                        className="w-[80px] h-[90px] rounded-md"
                    />
                    <View className="flex flex-col mx-5 gap-y-5 flex-1">
                        <View className="flex flex-row items-center gap-x-2">
                            <Image
                                source={icons.to}
                                className="w-5 h-5"
                            />
                            <Text
                                numberOfLines={1}
                                className="text-md font-JakartaMedium"
                            >
                                {origin_address}
                            </Text>
                        </View>
                        <View className="flex flex-row items-center gap-x-2">
                            <Image
                                source={icons.point}
                                className="w-5 h-5"
                            />
                            <Text
                                numberOfLines={1}
                                className="text-md font-JakartaMedium"
                            >
                                {destination_address}
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start jsutify-center">
                    <View className="flex flex-row items-center w-full justify-between mb-5">
                        <Text className="text-md font-JakartaMedium text-neutral-500">
                            Date & Time
                        </Text>
                        <Text className="text-md font-JakartaMedium text-neutral-500">
                            {formatDate(created_at)} - {formatTime(ride_time)}
                        </Text>
                    </View>
                    <View className="flex flex-row items-center w-full justify-between mb-5">
                        <Text className="text-md font-JakartaMedium text-neutral-500">
                            Driver
                        </Text>
                        <Text className="text-md font-JakartaMedium text-neutral-500">
                            {driver.first_name} {driver.last_name}
                        </Text>
                    </View>
                    <View className="flex flex-row items-center w-full justify-between mb-5">
                        <Text className="text-md font-JakartaMedium text-neutral-500">
                            Car Seat
                        </Text>
                        <Text className="text-md font-JakartaMedium text-neutral-500">
                            {driver.car_seats}
                        </Text>
                    </View>
                    <View className="flex flex-row items-center w-full justify-between mb-5">
                        <Text className="text-md font-JakartaMedium text-neutral-500">
                            Payment Status
                        </Text>
                        <Text className={`text-md font-JakartaMedium text-neutral-500 capitalize ${payment_status === "paid" ? "text-emerald-500" : "text-rose-500"}`}>
                            {payment_status}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}