import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, View, StyleSheet, Ges } from "react-native"
import { BottomSheet } from "react-native-btr"
import { Avatar, Card } from "react-native-paper"
import Icon from "react-native-vector-icons/Ionicons"
import { fonts } from "../theme/theme"



const LeftContent = props => <Avatar.Image size={36} source={{ uri:'https://picsum.photos/900'}} icon="account" />

const RightContent = props => <Icon suppressHighlighting style={{marginLeft:"auto"}} size={18} onPress={() => props.onPress()}name="ellipsis-vertical" />


const PostCard = () => {
    const navigation = useNavigation()

    const [visible, setVisible] = React.useState(false);

    function toggle() {
        setVisible((visible) => !visible);

    }

    const [isLiked,setIsLiked] = React.useState(false)

    return (
        <>
            <Card style={{ borderRadius: 8, marginBottom: 8,padding:8 }}>
                <View style={{flexDirection:"row",alignItems: "center",marginBottom: 8 }}>
                    <LeftContent/>
                    <View style={{marginLeft:8}}>
                        <Text style={{ fontSize:16,fontFamily:fonts.bold}}>
                            Aman Shukla
                        </Text>
                        <Text style={{ fontSize:12,fontFamily:fonts.regular}}>
                            Out of friends
                        </Text>
                    </View>
                    <RightContent onPress={toggle} />
                </View>
                {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} right={(props) => <RightContent {...props} onPress={toggle} />} /> */}
                <Card.Cover source={{ uri: 'https://picsum.photos/900' }} />
                <Card.Actions style={{ alignItems: "center" }}>
                    <Icon name={isLiked ? "heart" : "heart-outline"} suppressHighlighting={true} color={isLiked ? "red" : "black"} onPress={() => setIsLiked(!isLiked)} style={{ marginRight: 4 }} size={24} />
                    <Icon name="chatbox-outline" suppressHighlighting={true} onPress={() => alert("Comment")} style={{ marginRight: 4 }} size={24} />
                    <Icon name="paper-plane-outline" suppressHighlighting={true} onPress={() => alert("Share")} size={24} />
                    <Icon style={{marginLeft:"auto"}} name="bookmark-outline" suppressHighlighting={true} onPress={() => alert("Share")} size={24} />
                </Card.Actions>
            </Card>

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

export default PostCard