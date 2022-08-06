import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from "../../theme/theme"

import Icon from "react-native-vector-icons/Ionicons"
import { Avatar } from 'react-native-paper'

const Stories = () => {
  return (
    <View style={{ marginBottom: 16 }}>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* Add Story Button */}
        <TouchableOpacity onPress={() => alert("Upload Story")} style={{ width: 48, height: 48, borderRadius: 100, backgroundColor: colors.primary, justifyContent: 'center', alignItems: "center" }}>
          <Icon name="add" suppressHighlighting={true} color={colors.onPrimary} size={36} />
        </TouchableOpacity>
        {/* Other Stories  */}

        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => <OthersStoryItem key={i} i={i} />)
        }


      </ScrollView>



    </View>
  )
}


const OthersStoryItem = ({i}) => (
  <TouchableOpacity onPress={() => alert(`Story ${i}`)}>
    <Avatar.Image size={48} style={{
      marginHorizontal: 4
    }} source={{ uri: 'https://picsum.photos/24' }} />
  </TouchableOpacity>
);


export default Stories