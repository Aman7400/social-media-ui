import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from "../../theme/theme"
import { Button, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker";

import * as SecureStore from "expo-secure-store"
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext'

const BACKEND_URL = "http://localhost:8000/api"

const CreatePost = ({ navigation }) => {


    const [isLoading, setIsLoading] = React.useState(false)
    const [img, setImg] = React.useState(null)
    const [isReady, setIsReady] = React.useState(false)

    const [postData, setPostData] = React.useState({
        caption: "",
        location: ""
    })

    const handlePostDataChange = (name, value) => {
        setPostData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

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
            setIsLoading(false);
            setIsReady(true)



        } catch (error) {

            setIsLoading(false);
            alert('Upload Error' + error)

        }

    }


    const handlePostCreate = async () => {
        try {
            const formData = new FormData();
            formData.append("uploadedImage", {
                uri: img,
                type: 'image/jpg',
                name: 'image.jpg',
            });

            formData.append("caption",postData.caption)
            formData.append("location",postData.location)

            let token = await SecureStore.getItemAsync("token")

            const res = await axios.post(`${BACKEND_URL}/posts/create`, formData, {
                headers: {
                    Authorization: "Bearer " + token
                },
                enctype: "multipart/form-data",
            })

            if (res.data.message === 'Post Created') {

                setIsLoading(false);
                navigation.navigate("Home");
                alert("Post Created Successfully");

            }

        } catch (error) {
            alert("Post Create Error",error)
        }
    }


    return (
        <SafeAreaView style={{ paddingHorizontal: 16 }}>
            {/* Toolbar */}
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
                <Icon name="close" suppressHighlighting onPress={() => navigation.navigate("Home")} size={24} />
                <Text style={{ marginLeft: 16, fontSize: 18, fontFamily: fonts.bold }}>New Post</Text>
                {isReady && <Icon onPress={handlePostCreate} style={{ marginLeft: "auto" }} color="blue" name="checkmark-done-outline" suppressHighlighting size={24} />}
            </View>
            {/* Upload Image */}

            <View >

                <Image source={{ uri: img }} style={{
                    height: 240, width: "100%"
                }} />

                <Button loading={isLoading} mode="contained" onPress={uploadImage} labelStyle={{ fontFamily: fonts.bold }} style={{ marginVertical: 8 }}>
                    {isLoading ? "Uploading..." : "Upload Image"}
                </Button>

            </View>



            {/* Post Form */}

            <View >
                <TextInput onChangeText={(value) => handlePostDataChange("caption", value)} dense style={{ marginBottom: 8 }} placeholder="Write a Caption" />
                <TextInput onChangeText={(value) => handlePostDataChange("location", value)} dense style={{ marginBottom: 8 }} placeholder="Add Location" />
            </View>

        </SafeAreaView>
    )
}

export default CreatePost