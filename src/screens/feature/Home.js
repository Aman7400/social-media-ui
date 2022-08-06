import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/home/Header'
import Stories from '../../components/home/Stories'
import CreatePostsButton from '../../components/home/CreatePostsButton'
import NewsFeeds from '../../components/home/NewsFeeds'

const Home = () => {
  return (
    <SafeAreaView mode="padding" style={{ flex: 1, paddingHorizontal: 16, paddingBottom: 0 }}>
      {/* Header */}
      <Header />
      {/* Create Post */}
      <CreatePostsButton />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} bounces={false}>
        {/* Stories */}
        <Stories />
        {/* News Feed */}
        <NewsFeeds />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home