import { View, Text, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { fonts } from '../../theme/theme'
import { TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker";


const EditProfile = ({ navigation }) => {

  const [profileData, setProfileData] = React.useState({
    fullName: "",
    userName: "",
    bio: ""
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
  const [img, setImg] = React.useState(null)

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


      const formData = new FormData();
      formData.append("profilePic", {
        uri: result.uri,
        type: 'image/jpg',
        name: 'image.jpg',
      });



      // let token = await SecureStore.getItemAsync("token")

      // const res = await axios.post(`${BACKEND_URL}/user/profile`, formData, {
      //     headers: {
      //         Authorization: "Bearer " + token
      //     },
      //     enctype: "multipart/form-data",
      // })


      // if (res.data.message === 'Profile Updated') {

      setIsLoading(false);
      setIsReady(true)
      //     setUserProfile(res.data.updatedUser)
      //     alert("Profile Picture Updated Successfully")

      // }



    } catch (error) {

      setIsLoading(false);
      alert('Upload Error' + error)

    }

  }


  const handleUpdateProfile = () => {
    try {

      console.log({ profileData });
      navigation.navigate("Profile")
      alert("Profile Updated Successfully")

    } catch (error) {

      alert("Update Error", error)

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
          }} source={{ uri: img || 'https://i0.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?ssl=1' }} />
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