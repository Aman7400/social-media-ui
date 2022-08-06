import { ActivityIndicator, FlatList, View } from 'react-native'
import React from 'react'
import ExploreCard from '../ExploreCard';
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'
import * as SecureStore from "expo-secure-store"
import { useIsFocused } from '@react-navigation/native'
import PostCard from '../PostCard';

const BACKEND_URL = "http://localhost:8000/api"


const NewsFeeds = () => {

  const isFocused = useIsFocused();
  const [feeds, setFeeds] = React.useState([]);
  const { isLoading, setIsLoading } = React.useContext(AuthContext)

  const getAllPosts = async () => {
    try {
      setIsLoading(true);
      let token = await SecureStore.getItemAsync("token")
      const res = await axios.get(`${BACKEND_URL}/feed/latest`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })

      if (res.data.message === 'Latest Posts') {
        setFeeds(res.data.latestPosts)
      }

    } catch (error) {

      console.log(error);

      alert("Feeds Error : ", error)

    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {

    if (isFocused) {
      console.log("Getting Feed...");
      getAllPosts();
    }

  }, [isFocused])

  if (isLoading) {
    return (<View style={{ flex: 1 }}>
      <ActivityIndicator style={{ flex: 1 }} />
    </View>)
  }
 
  return (
    <View style={{zIndex:-1,flex:1}} bounces={false}  >
      {/* Posts */}
      <FlatList showsVerticalScrollIndicator={false} scrollsToTop={true}
          data={feeds} keyExtractor={(item) => item._id} renderItem={({ item }) => <PostCard post={item} />} />
    </View>
  )
}





export default NewsFeeds