import { useNavigation } from "@react-navigation/native"
import { Dimensions, TouchableOpacity } from "react-native"
import { Card } from "react-native-paper"
import React from 'react'

const ExploreCard = ({title,item}) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("PostDetails",{title,post:item}) }>
            <Card style={{
                width: (Dimensions.get("screen").width - 32 - 16) / 2,
                margin: 4,
            }}>
                <Card.Cover source={{ uri: `http://localhost:8000/api${item.uploadedImage}` }} />
            </Card>
        </TouchableOpacity>
    )
}

export default ExploreCard