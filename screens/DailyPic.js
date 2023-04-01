import { Text, View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, ImageBackground, Image, Platform } from 'react-native'
import React, { Component } from 'react'

export default class DailyPicScreen extends Component {
  render() {
    return (
      <View  style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
      }}>
        <Text>DailyPic</Text>
      </View>
    )
  }
}