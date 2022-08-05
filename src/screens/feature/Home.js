import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/home/Header'
import Stories from '../../components/home/Stories'
import CreatePosts from '../../components/home/CreatePosts'
import NewsFeeds from '../../components/home/NewsFeeds'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* Header */}
      <Header/>
      {/* Stories */}
      <Stories/>
      {/* Create Post */}
      <CreatePosts />
      {/* News Feed */}
      <NewsFeeds />
    </SafeAreaView>
  )
}

export default Home