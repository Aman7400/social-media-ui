import * as React from "react"
import * as SecureStore from "expo-secure-store"
import axios from "axios";
// import { BACKEND_URL } from "@env"

const BACKEND_URL = 'http://localhost:8000/api'

const AuthContext = React.createContext();


const AuthContextProvider = ({ children }) => {


    const [isLoading, setIsLoading] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [userProfile, setUserProfile] = React.useState();
    const [isDarkModeOn, setIsDarkModeOn] = React.useState(false);



    async function login({ email, password }) {
        try {
            setIsLoading(true);
            const res = await axios.post(`${BACKEND_URL}/user/login`, {
                email, password
            })

            if (res.data.token) {
                await SecureStore.setItemAsync("token", res.data.token)
                setIsLoggedIn(true);
            }

        } catch (error) {

            alert("Login Error :" + error.response.data.message)


        } finally {
            setIsLoading(false);
        }

    }
    async function logout() {
        try {
            setIsLoading(true);
            await SecureStore.deleteItemAsync("token")
            await SecureStore.deleteItemAsync("mode")
            setIsLoggedIn(false);
        } catch (error) {
            alert("Logout Error", error)
        } finally {
            setIsLoading(false)
        }

    }


    const bootStrapAsync = async () => {
        console.log("getting bootstrap");
        try {
            setIsLoading(true);

            let token = await SecureStore.getItemAsync("token")
            let deviceMode = await SecureStore.getItemAsync("mode");


            if (token) {
                const res = await axios.get(`${BACKEND_URL}/user/profile`, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })

                if (res.data.message === 'Profile') {

                    setUserProfile(res.data.user)
                    setIsLoggedIn(true);
                    setIsDarkModeOn(deviceMode === 'dark');


                }

            }
        } catch (error) {
            alert("Starting App Error: " + error.response.data.message);
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {

        bootStrapAsync();

    }, [isLoggedIn])

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, isLoading, logout, setIsLoading, userProfile, setUserProfile, isDarkModeOn, setIsDarkModeOn }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }