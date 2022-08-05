import { View, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../theme/theme'
import { FAB } from 'react-native-paper'

const CreatePosts = () => {
    return (
            <FAB
                style={styles.fab}
                icon="pencil-outline"
                onPress={() => console.log('Pressed')}
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
        backgroundColor: colors.onPrimaryContainer
    },
})
export default CreatePosts