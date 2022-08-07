import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import * as SecureStore from "expo-secure-store"
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExploreCard from '../../components/ExploreCard';

const BACKEND_URL = "http://localhost:8000/api"

const Explore = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const isFocused = useIsFocused();
    const [exploreFeed, setExploreFeeds] = React.useState([]);
    const { isLoading, setIsLoading } = React.useContext(AuthContext)


    const getExlporeFeeds = async () => {
        try {
            setIsLoading(true);
            let token = await SecureStore.getItemAsync("token")
            const res = await axios.get(`${BACKEND_URL}/feed/latest`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            if (res.data.message === 'Latest Posts') {
                setExploreFeeds(res.data.latestPosts)
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
            console.log("Getting Explore...");
            getExlporeFeeds();
        }

    }, [isFocused])

    if (isLoading) {
        return (<View style={{ flex: 1 }}>
            <ActivityIndicator style={{ flex: 1 }} />
        </View>)
    }



    return (
        <SafeAreaView style={{ padding: 16 }}>
            {/* Search Bar */}
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ marginBottom: 16 }}
            />
            {/* Explore Items */}
            <FlatList
                showsVerticalScrollIndicator={false}
                scrollsToTop={true}
                numColumns={2}
                data={exploreFeed}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <ExploreCard title={"Explore"} item={item} />} />
        </SafeAreaView>
    )
}

export default Explore
