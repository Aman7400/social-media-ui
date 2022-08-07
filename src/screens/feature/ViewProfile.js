import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from "../../theme/theme"
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'
import * as SecureStore from "expo-secure-store"
import { useIsFocused } from '@react-navigation/native'
import { Avatar,Button } from 'react-native-paper'
import ExploreCard from '../../components/ExploreCard'

const BACKEND_URL = "http://localhost:8000/api"

const ViewProfile = ({ route, navigation }) => {
    const { userId } = route.params
    const { isLoading, setIsLoading } = React.useContext(AuthContext)
    const [accountDetails, setAccountDetails] = React.useState();

    const getUserAccountDetiails = async () => {
        try {
            setIsLoading(true);
            let token = await SecureStore.getItemAsync("token")
            const res = await axios.get(`${BACKEND_URL}/user/${userId}`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            if (res.data.message === 'Account Details') {
                setAccountDetails(res.data.details)
            }

        } catch (error) {

            console.log(error);
            alert("Account Details Error : ", error)

        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {

        getUserAccountDetiails()

    }, [userId])


    if (isLoading) {
        return (<View style={{ flex: 1 }}>
          <ActivityIndicator style={{ flex: 1 }} />
        </View>)
      }

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 16, }}>
            {/* Toolbar */}
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
                <Icon name="arrow-back-outline" suppressHighlighting onPress={() => navigation.goBack()} size={24} />
                <Text style={{ marginLeft: 16, fontSize: 18, fontFamily: fonts.bold }}>{accountDetails?.userName}</Text>
            </View>
            <>
                <View style={{ flex: 1 }} >
                    {/* Profile Stats */}
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
                        {/* Avatar */}
                        <View style={{ flex: 1 }}>
                            <Avatar.Image source={{ uri: accountDetails?.profilePic ? `${BACKEND_URL}${accountDetails.profilePic}` : null }} />
                        </View>
                        {/* Stats */}
                        <View style={{ flexDirection: "row", flex: 3, justifyContent: "space-evenly" }}>
                            {/* Posts */}
                            <View>

                                <Text style={{ textAlign: "center", fontSize: 16, fontFamily: fonts.medium }}>
                                    0
                                </Text>
                                <Text style={{ fontSize: 14, fontFamily: fonts.light }}>
                                    Posts
                                </Text>

                            </View>
                            {/* Followers */}
                            <View>

                                <Text style={{ textAlign: "center", fontSize: 16, fontFamily: fonts.medium }}>
                                    0
                                </Text>
                                <Text style={{ fontSize: 14, fontFamily: fonts.light }}>
                                    Followers
                                </Text>

                            </View>
                            {/* Following */}
                            <View>

                                <Text style={{ textAlign: "center", fontSize: 16, fontFamily: fonts.medium }}>
                                    0
                                </Text>
                                <Text style={{ fontSize: 14, fontFamily: fonts.light }}>
                                    Following
                                </Text>

                            </View>
                        </View>
                    </View>
                    {/* Profile About */}
                    <View style={{ marginBottom: 16 }}>
                        {/* Full Name */}
                        <Text style={{ fontSize: 18, fontFamily: fonts.medium }}>
                            {accountDetails?.fullName}
                        </Text>
                        <Text style={{ fontSize: 14, fontFamily: fonts.regular }}>
                            {accountDetails?.bio}
                        </Text>
                        <Button onPress={() => {}} style={{ marginVertical: 8 }} mode="contained">
                            Follow
                        </Button>
                        {/* Bio */}
                    </View>
                    <FlatList showsVerticalScrollIndicator={false} scrollsToTop={true} numColumns={2}
                        data={accountDetails?.posts} keyExtractor={(item) => item._id} renderItem={({ item }) => <ExploreCard title={"Posts"} item={item} />} />
                </View>

            </>
        </SafeAreaView>
    )
}

export default ViewProfile