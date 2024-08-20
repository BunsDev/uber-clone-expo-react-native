import { GoogleTextInput } from '@/components/google-text-input'
import { Map } from '@/components/Map'
import { RideCard } from '@/components/ride-card'
import { icons, images, rides } from '@/constants'
import { useUser } from '@clerk/clerk-expo'
import { FlatList, Text, View, Image, ActivityIndicator, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const { user } = useUser();
  const loading = true;

  const handleSignout = () => {

  }

  const handleDestinationPress = () => {

  }

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={rides.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  alt="No recent rides found"
                  className="w-40 h-40"
                  resizeMode="contain"
                />
                <Text className="text-sm">No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator
                size="small"
                color="#000000"
              />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-xl capitalize font-JakartaBold">Hello, {user?.emailAddresses[0].emailAddress.split("@")[0]} 🚀</Text>
              <Pressable
                onPress={handleSignout}
                className="justify-center items-center w-10 h-10 rounded-md bg-neutral-50"
              >
                <Image
                  source={icons.out}
                  className="w-4 h-4"
                />
              </Pressable>
            </View>

            <GoogleTextInput
              icon={icons.search}
              handlePress={handleDestinationPress}
              containerStyle="bg-neutral-50 shadow-md shadow-neutral-300"
            />
            <>
              <Text className="text-lg font-JakartaBold mt-5 mb-3">
                Your Current Location
              </Text>
              <View className="flex flex-row items-center bg-transparent w-[300px]">
                <Map />
              </View>
            </>

            <Text className="text-lg font-JakartaBold mt-5 mb-3">
              Recent Rides
            </Text>
          </>
        )}
      />
    </SafeAreaView>
  )
}