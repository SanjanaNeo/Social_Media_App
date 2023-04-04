import 'react-native-gesture-handler';
import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

  const App=()=>{
    const Stack = createNativeStackNavigator();
    const [isFirstLaunch,setIsFirstLaunch]=useState(null)
    
    useEffect(()=>{
      AsyncStorage.getItem('alreadyLaunched').then(value=>{
        if(value===null){
          AsyncStorage.setItem('alreadyLaunched','true')
          setIsFirstLaunch(true)
        }
        else{
          setIsFirstLaunch(false)
        }
      })
    },[])

    if(isFirstLaunch===null){
      return null
    }else if(isFirstLaunch===true){
      return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      )
    }
    else{
      return <LoginScreen/>
    }
    
    
    
  
}

export default App
