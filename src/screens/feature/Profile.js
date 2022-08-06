import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from "react-native-vector-icons/Ionicons"
import { fonts } from "../../theme/theme"
import { BottomSheet } from 'react-native-btr'
import { Avatar, Button, List } from 'react-native-paper'
import ExploreCard from "../../components/ExploreCard"
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'
import * as SecureStore from "expo-secure-store"
import { useIsFocused } from '@react-navigation/native'

const BACKEND_URL = "http://localhost:8000/api"

const Profile = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const { userProfile, logout, isLoading, setIsLoading } = React.useContext(AuthContext)
  const isFocused = useIsFocused();
  const [posts, setPosts] = React.useState([]);

  const getAllPosts = async () => {
    try {
      setIsLoading(true);
      let token = await SecureStore.getItemAsync("token")
      const res = await axios.get(`${BACKEND_URL}/posts/all`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })

      if (res.data.message === 'Posts') {
        setPosts(res.data.posts)
      }

    } catch (error) {

      alert("Posts Error : ", error)

    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {

    if (isFocused) {
      console.log("Getting posts...");
      getAllPosts();
    }

  }, [isFocused])

  function toggle() {
    setVisible((visible) => !visible)
  }

  if (isLoading) {
    return (<View style={{ flex: 1 }}>
      <ActivityIndicator style={{ flex: 1 }} />
    </View>)
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingVertical: 8, paddingHorizontal: 16 }} >
        {/* Heading */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          {/* User Name */}
          <View>
            <Text style={{ fontSize: 24, fontFamily: fonts.bold }}>{userProfile.userName}</Text>
          </View>
          <View>
            <Icon onPress={toggle} suppressHighlighting name="menu-outline" size={36} />
          </View>
        </View>
        {/* Profile Stats */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
          {/* Avatar */}
          <View style={{ flex: 1 }}>
            <Avatar.Image source={{ uri: userProfile.profilePic ? `${BACKEND_URL}${userProfile.profilePic}` : null }} />
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
            {userProfile.fullName}
          </Text>
          <Text style={{ fontSize: 14, fontFamily: fonts.regular }}>
            {userProfile.bio}
          </Text>
          <Button onPress={() => navigation.navigate("EditProfile")} style={{ marginVertical: 8 }} mode="contained">
            Edit Profile
          </Button>
          {/* Bio */}
        </View>
        {/* Post Grid */}
        {/* Explore Items */}
        {/* <ScrollView>
          {
            // userProfile.posts.map((item,i) => <ExploreCard title={"Posts"} key={i} post={item} /> )
          }
         </ScrollView> */}
        <FlatList showsVerticalScrollIndicator={false} scrollsToTop={true} numColumns={2}
          data={posts} keyExtractor={(item) => item._id} renderItem={({ item }) => <ExploreCard title={"Posts"} item={item} />} />
      </SafeAreaView>

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={styles.card}>
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>

            {/* Icon */}
            <Icon name="settings" size={28} />
            {/* Title */}
            <Text style={{ marginLeft: 8, fontSize: 22, fontFamily: fonts.regular }}>
              Settings
            </Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => logout()} style={{ flexDirection: "row", alignItems: "center",marginBottom: 8  }}>

            {/* Icon */}
            <Icon name="bookmark" size={28} />
            {/* Title */}
            <Text style={{ marginLeft: 8, fontSize: 22, fontFamily: fonts.regular }}>
              Saved
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => logout()} style={{ flexDirection: "row", alignItems: "center" }}>

            {/* Icon */}
            <Icon name="log-out" size={28} />
            {/* Title */}
            <Text style={{ marginLeft: 8, fontSize: 22, fontFamily: fonts.regular }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 50,
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    height: 250,
    padding: 24,

  },
});


export default Profile