import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from "../../theme/theme"
import PostCard from '../../components/PostCard'

const PostDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1,paddingHorizontal:16,}}>
      {/* Toolbar */}
      <View style={{ flexDirection: "row", alignItems: "center",marginBottom: 16 }}>
        <Icon name="arrow-back-outline" suppressHighlighting onPress={() => navigation.goBack()} size={24} />
        <Text style={{ marginLeft: 16, fontSize: 18, fontFamily: fonts.bold }}>Exlpore</Text>
      </View>
      {/* Posts */}
      <PostCard />
    </SafeAreaView>
  )
}

export default PostDetails