import { useNavigation } from "@react-navigation/native"
import { Dimensions, TouchableOpacity } from "react-native"
import { Card } from "react-native-paper"
import React from 'react'

const ExploreCard = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("PostDetails") }>
            <Card style={{
                width: (Dimensions.get("screen").width - 32 - 16) / 2,
                margin: 4,
            }}>
                <Card.Cover source={{ uri: 'https://picsum.photos/900' }} />
            </Card>
        </TouchableOpacity>
    )
}

export default ExploreCard