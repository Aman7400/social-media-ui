import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Explore from '../screens/feature/Explore';
import Profile from '../screens/feature/Profile';
import  getTabIcon from '../utils/getTabIcon';
import { FeatureExploreStack, FeatureHomeStack } from './StackNavigation';



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
            <Tab.Screen name="FeatureHome" component={FeatureHomeStack} />
            <Tab.Screen name="FeatureExplore" component={FeatureExploreStack} />
            <Tab.Screen name="FeatureProfile" component={Profile} />
        </Tab.Navigator>
    )
}

export default TabNavigation