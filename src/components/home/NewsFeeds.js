import { View, Text, ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import { colors, fonts } from "../../theme/theme"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomSheet } from 'react-native-btr';
import { useNavigation } from '@react-navigation/native';
import PostCard from '../PostCard';


const NewsFeeds = () => {
 
  return (
    <View style={{zIndex:-1,flex:1}} bounces={false}  >
      {/* Heading */}
      <Text style={{ marginBottom: 8, fontSize: 20, fontFamily: fonts.medium, color: colors.primary }}>Feeds</Text>
      {/* Posts */}
      <PostCard />
      <PostCard />
    </View>
  )
}





export default NewsFeeds