import { icons } from '@/constants';
import { Stack, Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View } from 'react-native';

interface TabIconProps {
    focused: boolean;
    source: ImageSourcePropType;
}

const TabIcon = ({
    source,
    focused
}: TabIconProps) => (
    <View className={`flex flex-row justify-center items-center rounded-md ${focused ? "bg-neutral-800" : ""}`}>
        <View className={`rounded-md w-12 h-12 items-center justify-center ${focused ? "bg-neutral-950" : ""}`}>
            <Image
                tintColor={focused ? "#FFFFFF" : "#000000"}
                source={source}
                alt="Home Icon"
                className="w-6 h-6"
                resizeMode='contain'
            />
        </View>
    </View>
)

export default function AuthLayout() {
    return (
        <Tabs initialRouteName='index' screenOptions={{
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#000000',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#FFFFFF',
                borderRadius: 25,
                paddingBottom: 0,
                overflow: "hidden",
                marginHorizontal: 20,
                marginBottom: 20,
                height: 78,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                position: "absolute"
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            source={icons.home}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="rides"
                options={{
                    title: 'Rides',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            source={icons.list}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="chats"
                options={{
                    title: 'Chat',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            source={icons.chat}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            source={icons.profile}
                        />
                    )
                }}
            />
        </Tabs>
    );
}
