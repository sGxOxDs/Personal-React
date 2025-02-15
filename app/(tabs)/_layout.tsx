import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import theme, { generateTitleFromPath } from '@/components/Theme';
import { GoogleAdsense } from '@/components/GoogleAdsense.web';


export default function TabLayout() {
    return (
        <>
        <GoogleAdsense />
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: theme.header,
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: theme.tabBar,
            }}>
            
            <Tabs.Screen name="index" options={{
                title: generateTitleFromPath('/'),
                tabBarLabel: '關於聖鳶',
                tabBarIcon: ({ color, focused }) => (
                    <FontAwesome name={focused ? 'id-card' : 'id-card-o'} color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="works" options={{
                title: generateTitleFromPath('/works'),
                tabBarLabel: '小遊戲',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} color={color} size={24} />
                ),
            }} />
        </Tabs>
        </>
    );
}
