import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from "react-native-vector-icons/Ionicons"
import { fonts } from "../../theme/theme"
import { BottomSheet } from 'react-native-btr'
import { Avatar, Button } from 'react-native-paper'
import ExploreCard from "../../components/ExploreCard"
import { AuthContext } from '../../contexts/AuthContext'

const BACKEND_URL = "http://localhost:8000/api"

const Profile = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const {userProfile} = React.useContext(AuthContext)

  function toggle() {
      setVisible((visible) => !visible);

  }
  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingVertical: 8, paddingHorizontal: 16 }} >
        {/* Heading */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between",marginBottom: 16 }}>
          {/* User Name */}
          <View>
            <Text style={{ fontSize: 24, fontFamily: fonts.bold }}>{userProfile.userName}</Text>
          </View>
          <View>
            <Icon onPress={toggle} suppressHighlighting name="menu-outline" size={36} />
          </View>
        </View>
        {/* Profile Stats */}
        <View style={{ flexDirection: "row",alignItems: "center",marginBottom: 16}}>
          {/* Avatar */}
          <View style={{ flex:1}}>
            <Avatar.Image source={{ uri: userProfile.profilePic ? `${BACKEND_URL}${userProfile.profilePic}` : null}}/>
          </View>
          {/* Stats */}
          <View style={{ flexDirection: "row",flex:3,justifyContent: "space-evenly"}}>
            {/* Posts */}
            <View>

              <Text style={{textAlign:"center", fontSize: 16, fontFamily: fonts.medium }}>
                0
              </Text>
              <Text style={{ fontSize: 14, fontFamily: fonts.light }}>
                Posts
              </Text>

            </View>
            {/* Followers */}
            <View>

              <Text style={{textAlign:"center", fontSize: 16, fontFamily: fonts.medium }}>
                0
              </Text>
              <Text style={{ fontSize: 14, fontFamily: fonts.light }}>
                Followers
              </Text>

            </View>
            {/* Following */}
            <View>

              <Text style={{textAlign:"center", fontSize: 16, fontFamily: fonts.medium }}>
                0
              </Text>
              <Text style={{ fontSize: 14, fontFamily: fonts.light }}>
                Following
              </Text>

            </View>
          </View>
        </View>
        {/* Profile About */}
        <View style={{marginBottom: 16 }}>
          {/* Full Name */}
          <Text style={{ fontSize:18,fontFamily: fonts.medium }}>
            {userProfile.fullName}
            </Text>
            <Text style={{ fontSize:14,fontFamily: fonts.regular }}>
            {userProfile.bio}
            </Text>
            <Button onPress={() => navigation.navigate("EditProfile")} style={{marginVertical:8}} mode="contained">
              Edit Profile
            </Button>
          {/* Bio */}
        </View>
        {/* Post Grid */}
         {/* Explore Items */}
         <FlatList showsVerticalScrollIndicator={false} scrollsToTop={true} numColumns={2} data={[{
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                title: "First Item",
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                title: "Second Item",
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                title: "Third Item",
            }, {
                id: "58694a0f-3da1-471f-bd96-145571e29d7",
                title: "Third Item",
            }, {
                id: "58694a0f-3da1-471f-bd96-145571e292",
                title: "Third Item",
            }, {
                id: "58694a0f-3da1-471f-bd96-1455729d72",
                title: "Third Item",
            }, {
                id: "58694a0f-3da1-471f-bd96-145529d72",
                title: "Third Item",
            },]} keyExtractor={(item) => item.id} renderItem={({ item }) => <ExploreCard title={"Posts"} />} />
      </SafeAreaView>

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={styles.card}>
          <Text>Place your custom view inside BottomSheet</Text>
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
      justifyContent: "center",
      alignItems: "center",
  },
});


export default Profile