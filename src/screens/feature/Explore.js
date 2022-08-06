import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, Searchbar } from 'react-native-paper';
import { Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ExploreCard from '../../components/ExploreCard'

const Explore = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

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
            <FlatList showsVerticalScrollIndicator={false} scrollsToTop={true} numColumns={2} data={[{
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                title: "First Item",
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                title: "Second Item",
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                title: "Third Item",
            }, {
                id: "58694a0f-3da1-471f-bd96-145571e29d7",
                title: "Third Item",
            }, {
                id: "58694a0f-3da1-471f-bd96-145571e292",
                title: "Third Item",
            }, {
                id: "58694a0f-3da1-471f-bd96-1455729d72",
                title: "Third Item",
            }, {
                id: "58694a0f-3da1-471f-bd96-145529d72",
                title: "Third Item",
            },]} keyExtractor={(item) => item.id} renderItem={({ item }) => <ExploreCard />} />
        </SafeAreaView>
    )
}



export default Explore