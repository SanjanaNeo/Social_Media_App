import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import { Text, View } from 'react-native'

const Routes=()=>{
  
    return (
     <NavigationContainer>
        <AuthStack/>
     </NavigationContainer>
    )
  
}

export default Routes

