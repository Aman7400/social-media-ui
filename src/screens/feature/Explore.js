import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Searchbar } from 'react-native-paper';

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
            />
        </SafeAreaView>
    )
}

export default Explore