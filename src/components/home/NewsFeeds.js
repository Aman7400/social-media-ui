import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts } from "../../theme/theme"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const LeftContent = props => <Avatar.Icon  {...props} icon="account" />

const NewsFeeds = () => {
  return (
    <View style={{zIndex:-1,flex:1}} bounces={false}  >
      {/* Heading */}
      <Text style={{ marginBottom: 8, fontSize: 20, fontFamily: fonts.medium, color: colors.primary }}>Feeds</Text>
      {/* Feed Card */}
      <FeedCard />
      <FeedCard />
    </View>
  )
}

const FeedCard = () => {
  return (
    <Card style={{ borderRadius: 8,marginBottom:8 }}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Cover source={{ uri: 'https://picsum.photos/900' }} />
      <Card.Actions style={{ alignItems: "center" }}>
        <Icon name="heart-outline" suppressHighlighting={true} onPress={() => alert("Like")} style={{ marginRight: 4 }} size="24" />
        <Icon name="chatbox-outline" suppressHighlighting={true} onPress={() => alert("Comment")} style={{ marginRight: 4 }} size="24" />
        <Icon name="arrow-redo-outline" suppressHighlighting={true} onPress={() => alert("Share")} size="24" />
      </Card.Actions>
    </Card>
  )
}

export default NewsFeeds