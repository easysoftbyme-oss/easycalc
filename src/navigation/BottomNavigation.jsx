import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


  const BottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
  }

  export default BottomNavigation
const styles = StyleSheet.create({})
