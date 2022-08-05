import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Explore from '../screens/feature/Explore';
import Home from '../screens/feature/Home';
import Profile from '../screens/feature/Profile';
import  getTabIcon from '../utils/getTabIcon';



const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: (props) => getTabIcon(props, route),
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingVertical: 16,
                },
                swipeEnabled:true
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default TabNavigation