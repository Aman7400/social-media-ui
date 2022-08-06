import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Icon from "react-native-vector-icons/Ionicons"
import { colors, fonts } from '../../theme/theme'

const Header = () => {
    const {userProfile} = React.useContext(AuthContext)
  return (
    <View style={{flexDirection:"row", position:"relative", justifyContent:"space-between",alignItems:"center",marginBottom: 8}}>
        {/* Greetig */}
      <Text style={{
        fontFamily:fonts.bold,
        fontSize:18
      }}>Socially</Text>
      {/* Tools */}
      <TouchableOpacity>
        <Icon name="notifications" color={colors.onPrimaryContainer} size={24} />
      </TouchableOpacity>
    </View>
  )
}

export default Header