import { RideCard } from '@/components/ride-card'
import { rides } from '@/constants'
import { useUser } from '@clerk/clerk-expo'
import { FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const { user } = useUser()

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList 
        data={rides.slice(0, 5)}
        renderItem={({ item }) => <RideCard rides={item}}
      />
    </SafeAreaView>
  )
}