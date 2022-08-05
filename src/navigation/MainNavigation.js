import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './TabNavigation'
import { AuthStack } from './StackNavigation';
import { AuthContext } from '../contexts/AuthContext';

const MainNavigation = () => {
    const {isLoggedIn} = React.useContext(AuthContext);
    return (
        <NavigationContainer>
            {
                !isLoggedIn ? <TabNavigation /> : <AuthStack/>
            }
        </NavigationContainer>
    )
}

export default MainNavigation