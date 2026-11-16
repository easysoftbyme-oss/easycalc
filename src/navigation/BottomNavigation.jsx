import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { Home2, Settings, ProfileCircle, Notification } from 'iconsax-react-nativejs'

  const BottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:()=>(<Home2
 size="32"
 color="#37d67a"
 variant="Bulk"
/>)}}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarIcon:()=>(<Settings
 size="32"
 color="#37d67a"
 variant="Bulk"
/>)}}/>
            <Tab.Screen name="Notifications" component={NotificationsScreen} options={{tabBarIcon:()=>(<Notification
 size="32"
 color="#37d67a"
 variant="Bulk"
/>)}}/>
            <Tab.Screen name="Profiles" component={ProfileScreen} options={{tabBarIcon:()=>(<ProfileCircle
 size="32"
 color="#37d67a"
 variant="Bulk"
/>)}}/>
        </Tab.Navigator>
    )
  }

  export default BottomNavigation
const styles = StyleSheet.create({})
