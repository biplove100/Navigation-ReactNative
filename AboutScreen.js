import React from "react";
import { View, Text, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text style={{ fontSize:22 }}>About Screen</Text>
      <Image source={require('./assets/favicon.png')} style={{height: 60, width: 60}}/>
    </View>
  );
}