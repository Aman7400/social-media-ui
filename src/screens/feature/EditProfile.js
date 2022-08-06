import { View, Text, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { fonts } from '../../theme/theme'
import { TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from '../../contexts/AuthContext'

import * as SecureStore from "expo-secure-store"
import axios from 'axios'

const BACKEND_URL = "http://localhost:8000/api"

const EditProfile = ({ navigation }) => {

  const {userProfile,setUserProfile} = React.useContext(AuthContext)

  const [profileData, setProfileData] = React.useState({
    fullName: userProfile.fullName,
    userName: userProfile.userName,
    bio: userProfile.bio
  })

  const handleProfileChange = (name, value) => {
    setProfileData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const [isLoading, setIsLoading] = React.useState(false)
  const [img, setImg] = React.useState(userProfile.profilePic ? `${BACKEND_URL}${userProfile.profilePic}` : null)

  const [isReady, setIsReady] = React.useState(false)

  const uploadImage = async () => {

    try {

      setIsReady(false)
      setIsLoading(true);


      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "Images",
        aspect: [4, 3],
        quality: 1,
      });


      setImg(result.uri);

      setIsReady(true)

    } catch (error) {

      setIsLoading(false);
      alert('Upload Error' + error)

    }

  }


  const handleUpdateProfile = async () => {
    try {

      const formData = new FormData();
      formData.append("profilePic", {
        uri: img,
        type: 'image/jpg',
        name: 'image.jpg',
      });
      formData.append("fullName",profileData.fullName)
      formData.append("userName",profileData.userName)
      formData.append("bio",profileData.bio)


      let token = await SecureStore.getItemAsync("token")

      const res = await axios.post(`${BACKEND_URL}/user/profile`, formData, {
          headers: {
              Authorization: "Bearer " + token
          },
          enctype: "multipart/form-data",
      })


      if (res.data.message === 'Profile Updated') {

          setIsLoading(false);
          setUserProfile(res.data.updatedUser)
          navigation.navigate("Profile")
          alert("Profile Updated Successfully")
      }

    } catch (error) {

      alert("Edit Error", error)

    }
  }


  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      {/* Toolbar */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
        <Icon name="arrow-back-outline" suppressHighlighting onPress={() => navigation.goBack()} size={24} />
        <Text style={{ marginLeft: 16, fontSize: 18, fontFamily: fonts.bold }}>Edit Profile</Text>
        {isReady && <Icon style={{ marginLeft: "auto" }} name="checkmark-done-outline" suppressHighlighting color="blue" onPress={handleUpdateProfile} size={24} />}
      </View>
      {/* Profile Form */}

      <View style={{ flex: 1 }}>

        <View style={{
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
          position: 'relative',
        }}>

          <TouchableOpacity
            onPress={uploadImage}
            style={{
              position: "relative",
              top: 120,
              left: 40,
              zIndex: 3,
              height: 36,
              width: 36,
              backgroundColor: "blue",
              justifyContent: 'center',
              alignItems: "center",
              borderRadius: 100

            }}>
            <Icon name={"camera"} size={18} color="white" />
          </TouchableOpacity>

          <Image resizeMode="cover" style={{
            width: 120, height: 120,
            borderRadius: 100,
            marginBottom: 32
          }} source={{ uri: img}} />
          <TextInput value={profileData.fullName} onChangeText={(value) => handleProfileChange("fullName", value)} placeholder="Full Name" style={{
            marginBottom: 8,
            width: "100%"
          }} />
          <TextInput value={profileData.userName} onChangeText={(value) => handleProfileChange("userName", value)} placeholder="Username" style={{
            marginBottom: 8,
            width: "100%"
          }} />
          <TextInput value={profileData.bio} onChangeText={(value) => handleProfileChange("bio", value)} placeholder="Bio" style={{
            marginBottom: 8,
            width: "100%"
          }} />

        </View>


      </View>

    </SafeAreaView>
  )
}

export default EditProfile