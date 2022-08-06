import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { colors, fonts } from '../../theme/theme'

const Header = () => {
  return (
    <View style={{flexDirection:"row", position:"relative", justifyContent:"space-between",alignItems:"center",marginBottom: 8}}>
        {/* Greetig */}
      <Text style={{
        fontFamily:fonts.bold,
        fontSize:18
      }}>Socially</Text>
      {/* Tools */}
      <TouchableOpacity>
        <Icon name="notifications" color={colors.primary} size={24} />
      </TouchableOpacity>
    </View>
  )
}

export default Header