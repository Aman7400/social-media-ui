import { StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../theme/theme'
import { FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const CreatePostsButton = () => {
    const navigation = useNavigation()
    return (
            <FAB
    
                style={styles.fab}
                icon="pencil-outline"
                onPress={() => navigation.navigate("CreatePost")}
            />
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        zIndex: 10000,
        backgroundColor: colors.primary
    },
})
export default CreatePostsButton