import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Headline, TextInput } from 'react-native-paper'
import { fonts } from '../../theme/theme'

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{
        flex: 1,
        width: '100%',
        padding: 24,
        justifyContent: 'center'
      }}>
        <Headline style={{
          fontFamily:fonts.bold,
          textAlign: 'center',
          fontSize:32,
          marginBottom:16
        }} >
          Find new friends with Socially
        </Headline>
        <TextInput placeholder="Full Name" style={{ marginBottom: 16 }} />
        <TextInput placeholder="Email" style={{ marginBottom: 16 }} />
        <TextInput placeholder="Password" style={{ marginBottom: 16 }} secureTextEntry={true} />
        <Button loading={true} style={{ padding: 8 }} mode="contained" onPress={
          () => { }
        }>Sign Up</Button>
        <Button onPress={
          () => navigation.navigate("Login")
        }>Have an Account? Login</Button>
      </View>
    </SafeAreaView>
  )
}

export default Register