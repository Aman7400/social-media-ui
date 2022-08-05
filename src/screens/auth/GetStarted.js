import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../theme/theme'
import { Button } from 'react-native-paper'

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex:1
    }}>
      <View style={{
        flex:1,
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Button onPress={
          () => navigation.navigate("Login")
        } mode="contained">Get Started</Button>
      </View>
    </SafeAreaView>
  )
}

export default GetStarted

const styles = StyleSheet.create({})