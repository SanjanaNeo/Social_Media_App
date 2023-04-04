import React from 'react'
import { Text, View, Button,StyleSheet } from 'react-native'
import AntDesign from '@ant-design/icons'

const LoginScreen=({navigation})=>{
    return (
      <View>
        <Text>Login Screen</Text>
        <Button title="Click here"
        onPress={()=>navigation.navigate('Signup')}  
        >

        </Button>
      </View>
    )
  
}

export default LoginScreen
