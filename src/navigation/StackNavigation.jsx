import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator({
  
});

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import AnimalsScreen from '../screenss/AnimalsScreen';
import QuizScreen from '../screenss/QuizScreen';



const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
        headerStyle: {
backgroundColor: '#E9F5FF'
        },
        headerTintColor:'#7246C8',
        headerBackTitleStyle:{
            fontWeight:'bold'
        }
}}
>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Animals" component={AnimalsScreen}/>
        <Stack.Screen name="Quiz" component={QuizScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>

</Stack.Navigator>        
  )
}

export default StackNavigation