import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, View, StyleSheet, Ges, TouchableOpacity } from "react-native"
import { BottomSheet } from "react-native-btr"
import { Avatar, Card } from "react-native-paper"
import Icon from "react-native-vector-icons/Ionicons"
import { AuthContext } from "../contexts/AuthContext"
import { fonts } from "../theme/theme"



const LeftContent = props => <Avatar.Image size={36} source={{ uri:'https://picsum.photos/900'}} icon="account" />

const RightContent = props => <Icon suppressHighlighting style={{marginLeft:"auto"}} size={18} onPress={() => props.onPress()}name="ellipsis-vertical" />


const PostCard = ({post}) => {
    const navigation = useNavigation()

    const [visible, setVisible] = React.useState(false);

    function toggle() {
        setVisible((visible) => !visible);

    }

    const {userProfile} = React.useContext(AuthContext)

    const [isLiked,setIsLiked] = React.useState(false)


    console.log(post);


    return (
        <>
            <Card style={{ borderRadius: 8, marginBottom: 8,padding:8 }}>
                <View style={{flexDirection:"row",alignItems: "center",marginBottom: 8 }}>
                    <LeftContent/>
                    <View style={{marginLeft:8}}>
                        <Text style={{ fontSize:16,fontFamily:fonts.bold}}>
                            {userProfile.userName}
                        </Text>
                        <Text style={{ fontSize:12,fontFamily:fonts.regular}}>
                            {post?.location}
                        </Text>
                    </View>
                    <RightContent onPress={toggle} />
                </View>
                {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} right={(props) => <RightContent {...props} onPress={toggle} />} /> */}
                <Card.Cover source={{ uri: `http://localhost:8000/api${post?.uploadedImage}` }} />
 
                <Card.Actions style={{ alignItems: "center" }}>
                    <Icon name={isLiked ? "heart" : "heart-outline"} suppressHighlighting={true} color={isLiked ? "red" : "black"} onPress={() => setIsLiked(!isLiked)} style={{ marginRight: 4 }} size={24} />
                    <Icon name="chatbox-outline" suppressHighlighting={true} onPress={() => alert("Comment")} style={{ marginRight: 4 }} size={24} />
                    <Icon name="paper-plane-outline" suppressHighlighting={true} onPress={() => alert("Share")} size={24} />
                    <Icon style={{marginLeft:"auto"}} name="bookmark-outline" suppressHighlighting={true} onPress={() => alert("Share")} size={24} />
                </Card.Actions>
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontFamily:fonts.medium}}>{userProfile.userName}</Text>
                    <Text style={{fontFamily:fonts.light,marginLeft:8}}>{post?.caption}</Text>
                </View>
            </Card>

            <BottomSheet
                visible={visible}
                onBackButtonPress={toggle}
                onBackdropPress={toggle}
            >
                <View style={styles.card}>
                    <View style={{alignItems:"center"}}>
                        <TouchableOpacity style={{borderColor:"black",borderWidth:1,borderRadius:50,width:48,height:48,justifyContent:"center",alignItems: "center",marginBottom:4}}>
                            <Icon name="arrow-redo-outline" suppressHighlighting size={24} />
                        </TouchableOpacity>
                        <Text>Share</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <TouchableOpacity style={{borderColor:"black",borderWidth:1,borderRadius:50,width:48,height:48,justifyContent:"center",alignItems: "center",marginBottom:4}}>
                            <Icon name="link-outline" suppressHighlighting size={24} />
                        </TouchableOpacity>
                        <Text>Copy Link</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <TouchableOpacity style={{borderColor:"red",borderWidth:1,borderRadius:50,width:48,height:48,justifyContent:"center",alignItems: "center",marginBottom:4}}>
                            <Icon name="alert-circle-outline" color="red" suppressHighlighting size={24} />
                        </TouchableOpacity>
                        <Text style={{color:"red"}}>Report</Text>
                    </View>
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
        padding:16,
        height:120,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection:"row"
    },
});

export default PostCard