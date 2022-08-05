import { View, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../theme/theme'
import { FAB } from 'react-native-paper'

const CreatePosts = () => {
    return (
        <View  style={styles.fab} >
            <FAB
                icon="pencil-outline"
                style={{
                    backgroundColor:colors.onPrimaryContainer
                }}
                onPress={() => console.log('Pressed')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })
export default CreatePosts