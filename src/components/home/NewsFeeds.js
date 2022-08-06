import { View } from 'react-native'
import React from 'react'
import PostCard from '../PostCard';


const NewsFeeds = () => {
 
  return (
    <View style={{zIndex:-1,flex:1}} bounces={false}  >
      {/* Posts */}
      <PostCard />
      <PostCard />
      <PostCard />
    </View>
  )
}





export default NewsFeeds