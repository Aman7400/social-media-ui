import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import  getTabIcon from '../utils/getTabIcon';
import { FeatureExploreStack, FeatureHomeStack, FeatureProfileStack } from './StackNavigation';



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
            <Tab.Screen name="FeatureProfile" component={FeatureProfileStack} />
        </Tab.Navigator>
    )
}

export default TabNavigation