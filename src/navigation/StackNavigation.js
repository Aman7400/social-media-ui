import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../screens/auth/GetStarted";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import EditProfile from "../screens/feature/EditProfile";
import Explore from "../screens/feature/Explore";
import Home from "../screens/feature/Home";
import PostDetails from "../screens/feature/PostDetails";
import Profile from "../screens/feature/Profile";


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

const FeatureHomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

    )
}

const FeatureExploreStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen name="Exlpore" component={Explore} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
        </Stack.Navigator>

    )
}

const FeatureProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>

    )
}

export { AuthStack,FeatureHomeStack,FeatureExploreStack,FeatureProfileStack }