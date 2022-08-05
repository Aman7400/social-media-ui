import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../screens/auth/GetStarted";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Home from "../screens/feature/Home";
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

// const FeatureStack = () => {
//     return (
//         <>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="Profile" component={Profile} />
//         </>

//     )
// }

export { AuthStack }