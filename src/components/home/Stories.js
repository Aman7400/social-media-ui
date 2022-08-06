import { View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from "../../theme/theme"

import Icon from "react-native-vector-icons/Ionicons"

const Stories = () => {
  return (
    <View style={{ marginBottom: 16 }}>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* Add Story Button */}
        <TouchableOpacity onPress={() => alert("Upload Story")} style={{ width: 48,marginRight:4, height: 48, borderRadius: 100, backgroundColor: colors.primary, justifyContent: 'center', alignItems: "center" }}>
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
  <TouchableOpacity style={{
    marginHorizontal:4,
    height:48,width:48,borderRadius:100
  }} onPress={() => alert(`Story ${i}`)}>
    <Image style={{
     borderWidth: 2,
     borderColor: "red",
     height:48,width:48,
     borderRadius:100,
    }} source={{ uri: 'https://picsum.photos/24' }} />
  </TouchableOpacity>
);


export default Stories